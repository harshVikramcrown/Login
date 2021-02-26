import { StatusBar } from "expo-status-bar";
import React, { Component,useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text} from 'react-native';
import Login from "./login.jsx";
import Navigation from "./navigation";
// import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator();

  export default function App(){
    
return (
  <NavigationContainer>
         <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Login" component={Login}/>
            <RootStack.Screen name="Navigation" component={Navigation} />
        </RootStack.Navigator>
        </NavigationContainer>
);
}

