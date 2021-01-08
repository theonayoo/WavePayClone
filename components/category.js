import React from 'react'
import { View, Text,StyleSheet,Dimensions,TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeth from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Swiper from 'react-native-swiper';

const {width,height} = Dimensions.get('window')

export default function category() {
    return (
        <View style={styles.container}>
            <View style={styles.fiCat}>
                <View style={[styles.sendMoney,{borderEndWidth:0.3}]}>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Icon name='send-outline' size={30} color='#000'/>
                        <Text>Send Money</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.sendMoney,{borderEndWidth:0.3}]}>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Icon name='newspaper-outline' size={30} color='#000'/>
                        <Text>History</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.sendMoney}>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Icon name='wallet-outline' size={30} color='#000'/>
                        <Text>Cash In / Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.CatContainer}>
                <View style={styles.CatSe}>
                    <View style={styles.sendMoney}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Icon name='phone-portrait-outline' size={30} color='#000'/>
                            <Text>Topup</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sendMoney}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Icon name='cart-outline' size={30} color='#000'/>
                            <Text>Loan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sendMoney}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Icon name='alert-circle-outline' size={30} color='#000'/>
                            <Text>Wave PoYa</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.CatTh}>
                    <View style={styles.sendMoney}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Icon name='airplane-outline' size={30} color='#000'/>
                            <Text>Tickets</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sendMoney}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Icon name='game-controller-outline' size={30} color='#000'/>
                            <Text>Game</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sendMoney}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <IconFeth name='more-horizontal' size={30} color='#000'/>
                            <Text>More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.promotionCon}>
                <View style={styles.promotion}>
                    <View style={styles.seeAll}>
                        <Text style={{fontSize:16,}}>Promotions</Text>
                        <TouchableOpacity>
                            <Text style={{color:'#3693CD'}}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageSwiper}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
                                <View style={styles.slide1}>
                                    <Image source={{uri:'https://images.pexels.com/photos/545065/pexels-photo-545065.jpeg?cs=srgb&dl=pexels-burst-545065.jpg&fm=jpg'}} 
                                        style={{height:'100%',width:'100%',borderRadius:10}}
                                    />
                                </View>
                                <View style={styles.slide2}>
                                    <Image source={{uri:'https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg?cs=srgb&dl=pexels-alexander-mils-2068975.jpg&fm=jpg'}} 
                                            style={{height:'100%',width:'100%',borderRadius:10}}
                                        />
                                </View>
                                <View style={styles.slide3}>
                                    <Image source={{uri:'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?cs=srgb&dl=pexels-energepiccom-2988232.jpg&fm=jpg'}} 
                                            style={{height:'100%',width:'100%',borderRadius:10}}
                                        />
                                </View>
                            </Swiper>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column'
    },
    seeAll:{
        marginHorizontal:15,
        marginVertical:15,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    fiCat:{
        width:wp(90),
        backgroundColor:'#fff',
        marginTop:-45,
        flexDirection:'row',
        justifyContent:'space-around',
        borderRadius:10,
        padding:10,
        shadowOffset:{width:0,height:10},
        shadowColor:'#000',
        elevation: 5,
        alignSelf:'center',
    },
    CatContainer:{
        flexDirection:'column',
        paddingVertical:10,
        marginTop:5,
        alignItems:'center',
        justifyContent:'center'
    },
    CatTh:{
        width:wp(90),
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        shadowOffset:{width:0,height:10},
        shadowColor:'#000',
        elevation: 5,
        alignSelf:'center'
    },
    CatSe:{
        width:wp(90),
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        shadowOffset:{width:0,height:10},
        shadowColor:'#000',
        elevation: 5,
        alignSelf:'center'
    },
    promotionCon:{
        paddingVertical:5,
        alignItems:'center',
        justifyContent:'center'
    },
    promotion:{
        width:wp(90),
        height:hp(25),
        backgroundColor:'#fff',
        flexDirection:'column',
        justifyContent:'space-around',
        padding:10,
        borderRadius:10,
        shadowOffset:{width:0,height:10},
        shadowColor:'#000',
        elevation: 5,
        alignSelf:'center'
    },
    sendMoney:{
        alignItems:'center',
        padding:15,
    },
    imageSwiper:{
        alignItems:'center',
        padding:15,
    },
    wrapper: {
        height:'100%',
        borderRadius:10
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
