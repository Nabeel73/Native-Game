import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Custom import files
import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {

  const [userNumber, setUserNumber]= useState();
  const [guestRound, setGuestRound]= useState(0);

  const restartGamne = () => {
    setGuestRound(0);
    setUserNumber(null);
  }  


  const startGameHandler = (selectNumber) =>{
    setUserNumber(selectNumber);
    setGuestRound(0);
  };

  const gameOverHandler = numOfRounds =>{
    setGuestRound(numOfRounds);
  } 

  let content = <StartGameScreen 
  onStartGame={startGameHandler}
  onGameOver={gameOverHandler}/>;

  if(userNumber && guestRound <=  0 ){
      content = <GameScreen userChoice={userNumber}/>;
  }else if(guestRound > 0){
    content = <GameOverScreen 
    roundsNumber={guestRound}
    userNumber={userNumber}
    onRestart={restartGamne}
    />;
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guest the Game'}/>
      {content}
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