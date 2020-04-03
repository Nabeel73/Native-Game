import React from 'react';
import {styleSheet, View ,Text} from 'react-native';


const Header = props => { 
    return(
        <view style={styles.header}>
            <Text style={styles.HeaderTitle}>
                {props.title}
            </Text>
        </view>
    );
};

const  styles = StyleSheet.create({
    header:{
        width:'100%',
        height:50,
        paddingTop:36,
        backgroundColor:'orange',
        alignItem:'center',
        justifyContent:'center',
    },
    HeaderTitle:{
        color:"black",
        fontSize:18
    }


}); 


export default Header;