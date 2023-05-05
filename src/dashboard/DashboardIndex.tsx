import React, { useEffect } from 'react';
import { View, Text, StyleSheet, AppRegistry, TouchableHighlight } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
	const navigation = useNavigation()
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>

			<TouchableHighlight onPress={() => navigation.navigate('SecondScreen')}>
				<Text>Go to next screen</Text>
			</TouchableHighlight>
		</View>
	);
}

function SecondScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}

const Stack = createNativeStackNavigator();

const DashboardIndex = (props) => {
	useEffect(() => {
		console.log('%%%%%%%%%%%%%%%%%%', props)
	}, [])

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="SecondScreen" component={SecondScreen} />
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
