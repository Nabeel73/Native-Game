import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Custom import files
//import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={'Guest the Game'}/>
      <StartGameScreen />
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
