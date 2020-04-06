import React from 'react';
import { View ,Text,StyleSheet} from 'react-native';

//Custom import files
import Colors from '..//Constants/colors';


const Header = props => { 
    return(
        <View style={styles.header}>
            <Text style={styles.HeaderTitle}>
                {props.title}
            </Text>
        </View>
    );
};

const  styles = StyleSheet.create({
    header:{
        width:'100%',
        height:50,
        paddingTop:36,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
    },
    HeaderTitle:{
        color:"black",
        fontSize:18
    }


}); 


export default Header;