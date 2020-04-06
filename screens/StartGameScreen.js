import React, {useState} from 'react';
import { View, Text, StyleSheet, Input, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';


//Custom import files
import Card from '../Components/Card';
import Colors from '../Constants/colors';
import Input from '../Components/input';
import NumberContainer from '../Components/numberContainer';


const StartGameScreen = props => {

    const [enteredValue, setEndteredValue] = useState('');
    const [Confirmed, setConfiremed] = useState('false');
    const [selectNumber, setSelectNumber ] = useState('');


    const numberInputHandler = inputText => {
        setEndteredValue(inputText.replace(/[^0-9]/g,''));
       };

    const resetInputHandler = () =>{
        setEndteredValue('');
        setConfiremed(false);
    }
    const ConfirmInputHandler = () =>{
        const chooseNumber = parseInt(enteredValue);
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber  >  99){
            Alert.alert(
                'Invalid Number!',
                'Number is between 0 to 99',
                [{text:'okay', style:'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        setConfiremed(true);
        setSelectNumber(chooseNumber);
        setEndteredValue('');
        Keyboard.dismiss();
        //alert('Its  Working Nabeel');
        };

        let ConfirmedOutput;

        if(Confirmed){
        ConfirmedOutput = (
        <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(selectNumber)}/>
        </Card>
        )}
 
    return (
        <TouchableWithoutFeedback 
            onPress={ ()=> {
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
            {ConfirmedOutput}
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
        textAlign:'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center',

    }

});

export default StartGameScreen;