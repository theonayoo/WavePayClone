import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity, } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Title from '../../components/title';

const WaveShop = () =>{
    return (
        <View>
            <Title />
            <View style={styles.container}>
                <Text>Wave Shops</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:hp(100),
        justifyContent:'center',
        alignItems:'center',
    }
})

export default WaveShop;
