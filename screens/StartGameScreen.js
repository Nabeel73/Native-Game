import React from 'react';
import { View ,Text,StyleSheet,TextInput, Button, TouchableWithoutFeedback } from 'react-native';


const StartGameScreen = props  => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput/>
                <View style={styles.ButtonContainer}>
                    <Button title={Reset} onPress={() => {}}/>
                    
                    <Button title={Confirm} onPress={() => {}}/>
                </View>
            </View>
        </View>
    )

};

const styles = StyleSheet.create=({
screen:{
    flex:1,
    padding:10,
    alignItems:'center',

},
title:{
    fontSize:18,
    marginVertical:10


},
inputContainer:{
    width:300,
    maxWidth:'80%',
    alignItems:'center',
    shadowColor:'black',
    shadowOffset:{width:0, height:2},
    shadowRadius:6,
    shadowOpacity:0.26,
    elevation:6,
    BackgroundColor:'white',
    padding:10,
    borderRadius:20,

},
ButtonContainer:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',

}

});

export default StartGameScreen;