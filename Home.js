import React, {useState, useEffect} from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import CurrentView from './CurrentView';
import HourlyView from './HourlyView';
import DailyView from './DailyView';

const API_KEY = 'ba2ef45739e6c573f46e9037dd183234';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [daily, setDaily] = useState(null);
  const [date, setDate] = useState(null);
  
  const getDataAPI =  async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const d = new Date();
      let hour = d.getHours();
      let w = d.getDay();
      setDate(d);

      const loc = await Location.getCurrentPositionAsync({accuracy: 5});
      const {latitude, longitude} = loc.coords;
      setLocation({latitude, longitude});

      const ci = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});
      setCity(ci[0].city);

      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude={minutely-alerts}&appid=${API_KEY}`);
      const json = await response.json();

      const cur = {temp: json.current.temp.toFixed(0), main: json.current.weather[0].description, high: json.daily[0].temp.max.toFixed(0), low: json.daily[0].temp.min.toFixed(0), icon: json.current.weather[0].icon};
      setCurrent(cur);

      const ho = json.hourly.map((item) => { return {temp: item.temp.toFixed(0), main: item.weather[0].main, hour: (hour++) % 24, icon: item.weather[0].icon} });
      setHourly(ho);

      const da = json.daily.map((item) => { return {dow: (w++) % 7, high: item.temp.max.toFixed(0), low: item.temp.min.toFixed(0), main: item.weather[0].main, icon: item.weather[0].icon} });
      setDaily(da);
      
      setLoading(false);

    };

    useEffect( () => {
      getDataAPI();
    }, [])

    return (
      <View>
        <ScrollView contentContainerStyle = {styles.container}>
          {(loading) ? null : <CurrentView city = {city} current = {current} /> }
          {(loading) ? null : <HourlyView hourly = {hourly} date = {date}/> }
          {(loading) ? null : <DailyView daily = {daily} date = {date}/> }
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create( {
  container: {
    
  }
})