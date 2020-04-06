import React, {useState, useRef,useEffect} from 'react';
import { StyleSheet,View,Text, Button , Alert} from 'react-native';

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

    const [rounds,setRounds] = useState(0);
     const currentLow = useRef(1);
     const currentHigh = useRef(100);

     const { userChoice , onGameOver} = props;

    useEffect = (() => {
        if(currentGuess === userChoice){
        onGameOver(rounds);
        }[currentGuess,userChoice,onGameOver]}
        );    

    const nextGuessHandler = direction => {
        if( 
        (direction === 'smaller' && currentGuess < props.userChoice) 
        || (direction === 'greater' && currentGuess > props.userChoice)
        ){
            Alert.alert('Don/t lie', 'This is worng', [{
                text:'sorry', style:'cancel'
            }]           
            );
            return;
        }
        if (direction === 'smaller'){
           currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRadmonBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess);
        setCurrentGuess(nextNumber); 
        setRounds(curRounds => curRounds + 1 )

        };

        return(
            <View style={styles.screen}>
                <Text>Opponent's Guess</Text>
                    <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.ButtonContainer}>
                        <Button title="Smaller" onPress={nextGuessHandler.bind(this,'smaller')}/>
                        <Button title="Greater" onPress={nextGuessHandler.bind(this,'greater')}/>
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