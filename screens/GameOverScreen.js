import React, {useState, useRef,useEffect} from 'react';
import { StyleSheet,View,Text } from 'react-native';

const GameOverScreen = props => {
 return(
     <View style={StyleSheet.screen}>
         <Text>GAME FINISH </Text>
     </View>
 )
}


const style = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})


export default GameOverScreen;

