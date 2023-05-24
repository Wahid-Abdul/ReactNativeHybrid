import React, { useEffect } from 'react';
import { View, Text, StyleSheet, AppRegistry, Image } from "react-native";
import ImageIcon from '../svg/ImageIcon';
import Svg, { Circle } from 'react-native-svg';
// import * from "./../../assets/"
import {NativeModules, TouchableOpacity} from 'react-native';
const {CalendarModule} = NativeModules;

const SettingsIndex = (props: any) => {
    useEffect(() => {
        console.log('%%%%%%%%%%%%%%%%%%', props)
      }, [])

    return (
    <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
            I am a Settings screen !!
        </Text>
        <TouchableOpacity
          onPress={() => {
            CalendarModule.createCalendarEvent('Pandi', 'Madurai');
            console.log('QQQQQQQ', CalendarModule.createCalendarEvent);
          }}>
          <Text>Calendar loggg </Text>
        </TouchableOpacity>
        <Image source={require("./../../assets/book.png")} style={{height: 100, width: 100}}/>
        <View style={{height: 100, width: 100}}>
            {/* <ImageIcon /> */}
                <Svg height="50%" width="50%" viewBox="0 0 100 100" >
                    <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" />
                </Svg>
        </View>
        
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    highScoresTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    scores: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default SettingsIndex;
