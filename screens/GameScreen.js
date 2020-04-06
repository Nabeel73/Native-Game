import React, {useState} from 'react';
import { StyleSheet,View,Text, Button } from 'react-native';

//Custom import files 
import NumberContainer from '../Components/numberContainer';
import Card from '../Components/Card';

const generateRadmonBetween = (max,min, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() *  (max - min)) + min;
    if( rndNum === exclude){
        return generateRadmonBetween(min,max,exclude);
    }else{
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRadmonBetween(1,100, props.userChoice)
    );
     return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
     <NumberContainer>{currentGuess}</NumberContainer>
     <Card style={styles.ButtonContainer}>
         <Button title="Smaller" onPress={() => {}}/>
         <Button title="Greater" onPress={() => {}}/>
     </Card>
        </View>
     )
};

const styles =StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    ButtonContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10,
      width:300,
      maxWidth:'80%',
    }
});

export default GameScreen;