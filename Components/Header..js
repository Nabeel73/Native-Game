import React from 'react';
import {styleSheet, View ,Text} from 'react-native';


const Header = props => { 
    return(
        <view style={styles.Header}>
            <Text style={styles.HeaderText}>
                {props.title}
            </Text>
        </view>
    );
};

const  styles = StyleSheet.create({

}); 


export default Header;