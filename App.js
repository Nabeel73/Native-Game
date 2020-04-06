import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Custom import files
import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';


export default function App() {

  const [userNumber, setUserNumber]= useState();

  const startGameHandler = (selectNumber) =>{
    setUserNumber(selectNumber);
  };

  let content = <StartGameScreen onStartScreen={startGameHandler}/>;
  if(userNumber){
      Content = <GameScreen/>;
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guest the Game'}/>
      {Content}
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

 //export default App;