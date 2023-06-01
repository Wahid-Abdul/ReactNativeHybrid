import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
// import ImageIcon from '../svg/ImageIcon';
import Svg, { Circle } from 'react-native-svg';
import codePush from "react-native-code-push";

// import * from "./../../assets/"
import { NativeModules, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CodePush from 'react-native-code-push';
import { getPercentage } from '../utils/utils';
// const {CalendarModule} = NativeModules;

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
};


const SettingsIndex = (props: any) => {

  const [logs, setLogs] = useState<string[]>([]);

  const flatListRef = useRef(null);


  useEffect(() => {
    CodePush.notifyAppReady();
    console.log('%%%%%%%%%%%%%%%%%%', props)
  }, [])

  const checkifUpdatesAvailable = () => {
    codePush.checkForUpdate().then(update => {
      // if (!update) {
      alert(update)
      // }else{

      // }
    })
  }

  const addLog = (log: any) => {
    setLogs((prevLogs) => [...prevLogs, `${log}`]);
  };

  const syncStatusChangeCallback = (syncStatus: number) => {

    addLog('syncStatus')
    addLog(syncStatus)
    console.log('syncStatus>> ', syncStatus)
    switch (syncStatus) {
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        // Show "downloading" modal
        addLog('downloading.........')
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        // Hide "downloading" modal
        addLog('installing.........')
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        addLog('up to date')
        break;
      case codePush.SyncStatus.UNKNOWN_ERROR:
        addLog('unknown error')
        break;
      case codePush.SyncStatus.UPDATE_IGNORED:
        addLog('update ignored')
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        addLog('update installed')
        break;
      case codePush.SyncStatus.SYNC_IN_PROGRESS:
        addLog('sync in progress')
        break;
      default:
        addLog('default casee')
    }
  }
  const downloadProgressCallback = (progress: any) => {
    console.log('progress>> ', progress)
    addLog('progress')
    addLog(JSON.stringify(progress) + getPercentage(progress?.receivedBytes, progress?.totalBytes))
  }

  const keyExtractor = (_, index) => String(index);

  const renderItem = ({ item }) => <Text style={{ color: 'black' }}>{item}</Text>;

  const handleBinaryVersionMismatchCallback = () => { }

  const onUpdateCheck = () => {

    const temp = codePush.sync({
      // updateDialog: true,
      installMode: codePush.InstallMode.ON_NEXT_RESTART,
    }, syncStatusChangeCallback, downloadProgressCallback, handleBinaryVersionMismatchCallback);
    // const temp = codePush.sync({
    //     // updateDialog: true,
    //     installMode: codePush.InstallMode.ON_NEXT_RESTART,
    // });
  };

  const Stack = createNativeStackNavigator();

  function SecondScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.highScoresTitle}>
        I am a Settings screen v0.0.79 !!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'lightgreen', borderRadius: 5,
          width: 200, height: 50,
          alignItems: 'center', justifyContent: 'center'
        }}
        onPress={onUpdateCheck}>
        <Text>CHECK FOR UPDATES !</Text>
      </TouchableOpacity>

      <View style={{ height: 100, width: 100 }}>
        <Svg height="50%" width="50%" viewBox="0 0 100 100" >
          <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" />
        </Svg>
      </View>
      <FlatList
        style={{ borderWidth: 1, width: '100%', height: 100 }}
        ref={flatListRef}
        data={logs}
        renderItem={renderItem}
        keyExtractor={keyExtractor}

      />
    </View>
  )
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

export default codePush(codePushOptions)(SettingsIndex);
