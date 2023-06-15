import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GreenTick from "../svg/GreenTick";

function BasketOrderSuccess() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' }}>
            <View  style={{height: '80%', alignItems: 'center', justifyContent: 'center'}}>
            <GreenTick />
			<Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginVertical: 10}}>Order submitted successfully</Text>
			<Text style={{color: 'white', fontSize: 16, marginVertical: 10}}>Items have been submitted</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: '#0060A9',
                height: 50,
                width: '90%',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
            }}>
                <Text style={{color: 'white'}}>VIEW ORDERBOOK</Text>
            </TouchableOpacity>
		</View>
	);
}

export default BasketOrderSuccess;