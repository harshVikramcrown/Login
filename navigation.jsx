import React, { Component,useState } from 'react';
import { AppRegistry, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text} from 'react-native';
const Navigation=({navigation})=>{
// const Nav= useNavigation();
return(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
<ImageBackground style={styles.backgroundImage} source={require("./b.jpg")}>
           </ImageBackground>
    <Text>Hello There!</Text>
    <Button title="Click to go Back"
    //style={style.inp}
    onPress= {()=>navigation.goBack()}
    />
    </View>
);
}
const styles = StyleSheet.create({
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3,
      },
    });
export default Navigation;