import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
             source={require("../assets/background.jpg")}>   
             <View style={styles.LogoContainer}> 
             <Image style={styles.Logo} source={require("../assets/logo.png")} />
             <Text>Buy and Sell Everything</Text>
             </View>
             <View style={styles.LoginButton}></View>     
             <View style={styles.RegisterButton}></View>     

         </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },    
    LoginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    RegisterButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    Logo: {
        width: 100,
        height: 100,
    },
    LogoContainer:{
        position: 'absolute',
        top: 50,
        alignItems: 'center',
    },
})

export default WelcomeScreen;