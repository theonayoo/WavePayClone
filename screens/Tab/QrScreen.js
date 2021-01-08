import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Title from '../../components/title';

const QrScreen = (props) =>{
    return (
        <View style={styles.container}>
            <Title />
            <View style={{width:wp(80)}}>
                <Text style={{textAlign:'center',fontSize:16}}>Let your sender scan this QR code to send money to you.</Text>
            </View>
            <View style={styles.footerContent}>
                <Image source={require('../../assets/images/qrcode.png')}
                    style={styles.qrImage}
                />
                <Text style={{fontSize:16,marginTop:20}}>My number</Text>
                <Text style={{fontSize:20,marginTop:16,fontWeight:'bold'}}>9791919673</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#F6E24C'
    },
    qrImage:{
        width:wp(80),
        height:hp(45)
    },
    footerContent:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    }
})

export default QrScreen;
