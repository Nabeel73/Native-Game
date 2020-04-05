import React, {useState} from 'react';
import { View, Text, StyleSheet, Input, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';


//Custom import files
import Card from '../Components/Card';
import Colors from '../Constants/colors';
import Input from '../Components/Input';


const StartGameScreen = props => {

    const [enteredValue, setEndteredValue] = useState('');
    const [Confirmed, setConfiremed] = useState('false');
    const [selectNumber, setSelectNumber ] = useState('');


    const numberInputHandler = inputText => {
        setEndteredValue(inputText.replace(/[^0-9]/g,''));

    };

    const resetInputHandler = () =>{
        setEndteredValue('');
        setConfiremed(true);
    }
    const ConfirmInputHandler = () =>{
       // setEndteredValue('');
        setConfiremed(false);
        setSelectNumber();
       alert('Its  Working Nabeel');
    }
 
    return (
        <TouchableWithoutFeedback onPress={ ()=> {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.Input}
                onBlurSumnit
                autoCapitilize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
                />
                <View style={styles.ButtonContainer}>
                    <View style={styles.Button}>  <Button title="Reset" onPress={resetInputHandler} color={Colors.primary} /></View>
                    <View style={styles.Button}>  <Button title="Confirm" onPress={ConfirmInputHandler} color={Colors.secondary} /></View>
                </View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    title: {
        fontSize: 18,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        /*  shadowColor:'black',
          shadowOffset:{width:0, height:2},
          shadowRadius:6,
          shadowOpacity:0.26,
          elevation:6,
          BackgroundColor:'white',
          padding:10,
          borderRadius:20,
      */
    },
    ButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',

    },
    Button: {
        width: 100,
        //Color:'Black',
    },
    Input:{
        width:'50',
    }

});

export default StartGameScreen;