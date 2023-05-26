import React, { useEffect } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import DashboardIndex from './src/dashboard/DashboardIndex';
import SettingsIndex from './src/settings/SettingsIndex';

const RNHighScores = (props) => {
  useEffect(() => {
    console.log('%%%%%%%%%%%%%%%%%%', props)
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.highScoresTitle}>
        2048 High Scores!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
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

// Module name
// AppRegistry.registerComponent('DashboardIndex', () => DashboardIndex);
AppRegistry.registerComponent('SettingsIndex', () => SettingsIndex);
// AppRegistry.registerComponent('RNHighScores', () => DashboardIndex);
