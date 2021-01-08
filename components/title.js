import React from 'react'
import { View, Text,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const title = (props)=> {
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{}}>
                    <Icon name='menu' size={25} color='#000'/>
                </TouchableOpacity>
                <Image source={require('../assets/images/WavePay.png')} style={{width:wp(30),height:hp(4)}}/>
                <TouchableOpacity>
                    <Icon name='notifications-outline' size={25} color='#000'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    header:{
        flexDirection:'row',
        width:wp(100),
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:'#F6E24C'
    },
})

export default title;
