import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native';
import Header from '../../components/header';

const HomeScreen = () =>{
    return (
        <View style={styles.container}>
            <Header 
                name='Aung Aung Oo'
                amount='1,000,000'
                level='2'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
})

export default HomeScreen;

