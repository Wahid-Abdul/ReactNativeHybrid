import React, { useEffect } from 'react';
import { View, Text, StyleSheet, AppRegistry, TouchableHighlight, BackHandler, Alert, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasketOrder from '../basket/BasketOrder';
import BasketOrderSuccess from '../basket/BasketOrderSuccess';

function HomeScreen() {
	const navigation = useNavigation()
	useEffect(() => {
		const backAction = () => {
		  Alert.alert('Hold on!', 'Are you sure you want to go back?', [
			{
			  text: 'Cancel',
			  onPress: () => null,
			  style: 'cancel',
			},
			{text: 'YES', onPress: () => {
				BackHandler.exitApp()
				setTimeout(() => {
					BackHandler.exitApp();
				 }, 2000);
			}},
		  ]);
		  return true;
		};
	
		const backHandler = BackHandler.addEventListener(
		  'hardwareBackPress',
		  backAction,
		);
	
		return () => backHandler.remove();
	  }, []);

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen v0.0.1</Text>

			<TouchableOpacity onPress={() => navigation.navigate('SecondScreen')} style={{height:50, width: 200, backgroundColor: 'lightblue', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
				<Text>Go to next screen</Text>
			</TouchableOpacity>
		</View>
	);
}


function SecondScreen() {
	const navigation = useNavigation()

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<TouchableOpacity onPress={() => navigation.navigate('BasketOrder')} style={{height:50, width: 200, backgroundColor: 'lightblue', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: 'white'}}>Go to basket order screen</Text>
			</TouchableOpacity>
		</View>
	);
}

const Stack = createNativeStackNavigator();

const DashboardIndex = (props: any) => {
	


	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={({ route, navigation }) => ({
					headerShown: false,
					animation: 'slide_from_right',
				})}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="SecondScreen" component={SecondScreen} />
				<Stack.Screen name="BasketOrder" component={BasketOrder} />
				<Stack.Screen name="BasketOrderSuccess" component={BasketOrderSuccess} />

			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
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

export default DashboardIndex;
