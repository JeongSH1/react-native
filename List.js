import React from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, ScrollView} from 'react-native';

const Item = ({title, location, temp, high, low, main}) => (
    <View style = {styles.item}>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <Text style = {styles.item.title}>{title}</Text>
                <Text style = {styles.item.location}>{location}</Text>

            </View>
            <View><Text style = {styles.item.temp}>{temp}°</Text></View>
        </View>
        
        <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
            <View>
                <Text style = {styles.item.main}>{main}</Text>
            </View>
            <View><Text>{`최고:${high}° 최저:${low}°`}</Text></View>
        </View>
        

    </View>
);

export default function List() {

    const renderItem = ({item}) => (
        <Item title = {item.title} location = {item.location} temp = {item.temp} high = {item.high} low = {item.low} main = {item.main}/>
    );
    const tmp = [{title: '나의 위치', location: '수원시', temp: '26', high: '29', low: '22', main: '대체로 흐림'}];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style = {styles.headerText}>날씨</Text>
            </View>
            <View>
                <TextInput style = {styles.search} placeholder = ' 🔍  도시 또는 공항 검색'></TextInput>
            </View>
            <ScrollView>
                <FlatList
                    data = {tmp}
                    renderItem = {renderItem}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        
    },

    header: {
        marginTop: 50,
        marginLeft: 20
    },

    headerText: {
        fontSize: 40,
        fontWeight: "800",
        justifyContent: 'flex-start'
    },

    search: {
        height: 40,
        backgroundColor: '#ffffff',
        margin: 20,
        borderRadius: 15
    },

    item: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        marginHorizontal: 10,
        padding: 15,
        flex: 1,

        title: {
            fontSize: 25,
            fontWeight: 'bold',
        },

        temp: {
            fontSize: 40,
            fontWeight: 'bold'
        },

        location: {
            fontSize: 15,
            fontWeight: 'bold'
        }
        
        
    }
} )