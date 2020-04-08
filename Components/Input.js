import React from 'react';
import { StyleSheet, TextInput, } from 'react-native';


const Input = props => { 
    return(
        <TextInput {...props} style={{ ...styles.Input, ...props.style}}/>
    )
};

const styles = StyleSheet.create({
    Input:{
        height:2,
        borderBottomColor:' #581845 rgb ( 88, 24, 69)',
        borderBottomWidth:'1',
        marginVertical:10,
    }



});

export default Input;