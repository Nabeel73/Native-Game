import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Custom import files 
import Colors from '..//Constants/colors';



const NumberContainer = props => {
return(
    <View style={styles.container}>
        <Text style={styles.number}>{props.children}</Text>
    </View>

)};

const styles =StyleSheet.create({
    container:{
        padding:10,
        borderRadius:10,
        borderWidth:2,
        borderColor:colors.primary,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
    },
    number:{
        color:colors.secondary,
        fontSize:10,

    },

});

export default NumberContainer;