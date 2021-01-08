import React,{useState} from 'react'
import { View, Text,ScrollView,StyleSheet, Dimensions,Image ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Category from './category';
import Title from './title';

const {width,height} = Dimensions.get('window');

const home = (props) =>{
    const [hide,setHide] = useState({
        eyes:false
    })

    const eyesOnChangeHandler =()=>{
        setHide({
            ...hide,
            eyes:!hide.eyes
        })
    }
    return (
        <View style={styles.container}>
            <Title />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerContent}>
                    <View style={styles.footer}>  
                        <TouchableOpacity style={styles.image}>
                            <Icon name='person' size={35} color='#3693CD' />
                        </TouchableOpacity>
                        <View style={styles.titleFooter}>
                            <Text style={styles.name}>{props.name}</Text>
                            <View style={{flexDirection:'row',marginTop:3}}>
                                { hide.eyes?
                                    <Text style={styles.amount}>{props.amount} Kyat</Text>
                                    :
                                    <Text style={styles.amount}>***** Kyat</Text>
                                }
                                <TouchableOpacity style={{marginLeft:10}} onPress={()=>eyesOnChangeHandler()}>
                                    { hide.eyes?
                                        <Icon name='eye' size={20} color='#000'/>
                                        :
                                        <Icon name='eye-off' size={20} color='#000'/>
                                    }
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.level}>LEVEL {props.level}</Text>
                        </View>
                    </View>
                </View>
                <Category />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    scrolContent:{
        alignItems:'center',
    },
    headerContent:{
        height:height/4,
        backgroundColor:'#F6E24C'
    },
    name:{
        fontSize:18,
    },
    amount:{
        fontSize:13,
    },
    level:{
        // fontWeight:'bold',
        fontSize:14,
        marginTop:5
    },
    footer:{
        width:width,
        // backgroundColor:'red',
        flexDirection:'row',
        paddingHorizontal:30,
        paddingVertical:30,
    },
    titleFooter:{
        flexDirection:'column',
        marginLeft:20,
        justifyContent:'space-evenly'
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        fontStyle:'italic',
        color:'#3693CD',
        flexDirection:'row'
    },
    image:{
        backgroundColor:'#fff',
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
})

export default home;