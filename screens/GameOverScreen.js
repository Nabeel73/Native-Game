import React, {useState, useRef,useEffect} from 'react';
import { StyleSheet,View,Text, Button } from 'react-native';

const GameOverScreen = props => {
 return(
     <View style={styles.screen}>
         <Text>GAME FINISH </Text>
         <Text>Number of Rounds{props.roundsNumber} </Text>
         <Text>Number Was {props.user}</Text>
         <Button title="Restart Game" onPress={props.onRestart}/>

     </View>
 )
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})


export default GameOverScreen;

