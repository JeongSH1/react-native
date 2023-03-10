import { View, Text, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";

const Item = ({temp, icon, hour}) => (
    <View style = {styles.item}>
        <Text style = {styles.item.hourText}>{ (parseInt(hour/12)) ? ((hour===12) ? '오후 12시' : `오후 ${hour%12}시`) : `오전 ${hour}시`}</Text>
        <Image source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}} style = {styles.icon}/>
        <Text style = {styles.item.tempText}>{`${temp}°`}</Text>
    </View>
)

export default function DailyView(props) {

    const renderItem = ({item}) => (
        <Item temp = {item.temp} icon = {item.icon} hour = {item.hour}/>
    );

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>시간별 일기예보</Text>
            <FlatList horizontal
                data = {props.hourly}
                renderItem = {renderItem}
            />
        </View>
        
    );
    
}  

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'black'
    },

    title: {
        margin: 5,
        fontSize: 15,
        color: 'white',
        fontWeight: "200"
    },

    icon: {
        width: 50,
        height: 50
    },  

    item: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        
        mainText: {
            marginVertical: 5,
            fontSize: 20,
            color: 'white'
        },
        tempText: {
            fontSize: 20,
            color: 'white'
        },

        hourText: {
            fontSize: 15,
            color: 'white'
        }


    }
})