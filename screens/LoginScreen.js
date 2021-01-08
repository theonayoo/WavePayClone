import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,TextInput,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width,height} = Dimensions.get('window')
const LoginScreen =(props)=> {
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    if(loading){
        return (
            <View style={styles.Loading}>
                <Text>Loading...</Text>
            </View>
        )
    }else{
        return (
            <View style={styles.Loading}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#ff8800'}}>Wave Clone Ui</Text>
                <View style={styles.inputContent}>
                    <Icon name='person' size={23} color='#000'/>
                    <TextInput placeholder='Email' style={styles.inputText}/>
                </View>
                <View style={styles.inputContent}>
                    <Icon name='key' size={23} color='#000'/>
                    <TextInput placeholder='Password' style={styles.inputText} secureTextEntry={true}/>
                </View>
                <View style={{marginTop:40}}>
                    <TouchableOpacity style={styles.btnContent} 
                        onPress={()=>props.navigation.navigate('TabScreen')}
                    >
                        <Text style={{fontWeight:'bold',color:'#fff'}}>Login</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <Text>If you don't have any account please </Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Register')}>
                            <Text style={{color:'red',fontWeight:'bold'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default LoginScreen;

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
        width:width-100,
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