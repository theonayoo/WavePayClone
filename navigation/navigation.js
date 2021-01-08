import React,{useEffect,useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/Ionicons';
import IconShop  from 'react-native-vector-icons/Entypo';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from '../screens/Tab/HomeScreen';
import QrScreen from '../screens/Tab/QrScreen';
import QrPayScreen from '../screens/Tab/QrPayScreen';
import WaveShopScreen from '../screens/Tab/WaveShopScreen';
import InboxScreen from '../screens/Tab/InboxScreen';
import ProfileScreen from '../screens/ProfileScreen';

const stack = createStackNavigator();

const tab = createBottomTabNavigator();

const TabScreen = ()=>{
    return(
        <tab.Navigator>
            <tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={{tabBarIcon:({color})=>(
                    <Icon name="home" size={24} color={color}/>
                )
                }}
                />
            <tab.Screen 
                name='MyQr' 
                component={QrScreen}
                options={{tabBarIcon:({color})=>(
                    <Icon name="qr-code-outline" size={24} color={color}/>
                )}}
                />
            <tab.Screen 
                name='QrPay' 
                component={QrPayScreen}
                options={{tabBarIcon:({color})=>(
                    <Icon name="scan-outline" size={24} color={color}/>
                )}}
                />
            <tab.Screen 
                name='WaveShop' 
                component={WaveShopScreen}
                options={{tabBarIcon:({color})=>(
                    <IconShop name="shop" size={24} color={color}/>
                )}}
                />
            <tab.Screen 
                name='Inbox' 
                component={InboxScreen}
                options={{tabBarIcon:({color})=>(
                    <Icon name="mail-outline" size={24} color={color}/>
                )}}
                />
        </tab.Navigator>
    )
}

const navigation = () =>{
    return (
        <stack.Navigator headerMode='none'>
            <stack.Screen name="TabScreen" component={TabScreen}/>
            <stack.Screen name='Login' component={LoginScreen}/>
            <stack.Screen name='Register' component={RegisterScreen}/>
            <stack.Screen name='Profile' component={ProfileScreen} />
        </stack.Navigator>
    )
}

export default navigation;
