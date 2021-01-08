import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,TextInput,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const {width,height} = Dimensions.get('window')
const RegisterScreen =(props)=> {
        return (
            <View style={styles.Loading}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#ff8800'}}>Ace Register</Text>
                <View style={styles.inputContent}>
                    <Icon name='person' size={23} color='#000'/>
                    <TextInput placeholder='Email' style={styles.inputText}/>
                </View>
                <View style={styles.inputContent}>
                    <Icon name='key' size={23} color='#000'/>
                    <TextInput placeholder='Password' style={styles.inputText} secureTextEntry={true}/>
                </View>
                <View style={styles.inputContent}>
                    <Icon name='key' size={23} color='#000'/>
                    <TextInput placeholder='Confirm Password' style={styles.inputText} secureTextEntry={true}/>
                </View>
                <View style={{marginTop:40}}>
                    <TouchableOpacity style={styles.btnContent} 
                        onPress={()=>props.navigation.navigate('TabNav')}
                    >
                        <Text style={{fontWeight:'bold',color:'#fff'}}>Register</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <Text>If you account already have, please </Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                            <Text style={{color:'red',fontWeight:'bold'}}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

export default RegisterScreen;

const styles = StyleSheet.create({
    Loading:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    inputContent:{
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderBottomColor:'#000',
        width:width-50,
        alignItems:'center',
        marginTop:15
    },
    inputText:{
        marginLeft:20,
    },
    btnContent:{
        backgroundColor:'#ff8800',
        paddingHorizontal:width/4,
        paddingVertical:15,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        shadowOffset:{width:0,height:10},
        shadowColor:'#000',
        elevation:5
    }
})