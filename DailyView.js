import { View, Text, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";

const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const Item = ({dow, high, low, icon}) => (
    <View style = {styles.item}>
        <Text style = {styles.item.mainText}>{`${dayOfWeek[dow]}`}</Text>
        <Image source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}} style = {styles.icon}/>
        <Text style = {{...styles.item.mainText, alignContent: "flex-end"}}>{`${low}° - ${high}°`}</Text>
        
    </View>
)

export default function DailyView(props) {
    const renderItem = ({item}) => (
        <Item dow = {item.dow} high = {item.high} low = {item.low} icon = {item.icon}/>
    );

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>10일간의 일기예보</Text>
            <FlatList
                ItemSeparatorComponent = {()=> <View style = {styles.separator}></View>}
                data = {props.daily}
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

    separator: {
        backgroundColor: 'white',
        height: 1
    },

    title: {
        margin: 5,
        fontSize: 15,
        fontWeight: "200",
        color: 'white'
    },

    icon: {
      width: 50,
      height: 30,
      marginHorizontal: 50
    },

    item: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
        mainText: {
            fontSize: 20,
            color: 'white',
            fontWeight: "200"
        },

    }
})