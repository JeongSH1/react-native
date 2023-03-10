import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import PaginationDot from 'react-native-animated-pagination-dot';
import List from './List';
import { Feather } from '@expo/vector-icons';

const page = ['나의 위치']

function PageDot(){
  const [curPage, setCurPage] = useState(0);

  return (
    <View style = {{marginTop:10}}>
      <PaginationDot
        activeDotColor='black'
        curPage={curPage}
        maxPage={page.length} />
    </View>
  )
}

const Tab = createBottomTabNavigator();


export default function App() {

    return (
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName='  '
          screenOptions={

              ({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                  let iconName;
    
                  if (route.name === ' ') {
                    iconName = 'map';
                    return <View style = {{marginRight: 80, marginTop: 3}}><Feather name = {iconName} size={24} color ='black'/></View>
                  }
                  else if (route.name === '   ') {
                    iconName = 'list';
                    return <View style = {{marginLeft: 80, marginTop: 4}}><Feather name = {iconName} size={24} color ='black'/></View>
                  }
                  else {
                    return <PageDot />;
                  }
                  },
                tabBarStyle: {
                  height: 40,
                },
                headerShown: false
                
                })
            
            } >
            <Tab.Screen name = ' ' component={HomeScreen}/>
            <Tab.Screen name = '  ' component={HomeScreen}/>
            <Tab.Screen name = '   ' component={List}/>
        </Tab.Navigator>
      </NavigationContainer>
  )
}

