import { StatusBar } from "expo-status-bar";
import React, { Component,useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text} from 'react-native';

//export default class App extends Component {
  export default function App(){
 const [username, setusername] = useState('');
 const [password, setpassword] = useState('');
  
    

  
    return (
      
      
      <View style={styles.container}>
         <Image style={styles.image3} source={require("./f.png")}></Image>
         <Image style={styles.image4} source={require("./t.png")}></Image>
         <Image style={styles.image5} source={require("./g.png")}></Image>
             <Text style={styles.description}>
          CAFE WIFI
        </Text>
           <ImageBackground style={styles.backgroundImage} source={require("./b.jpg")}>
           </ImageBackground>
           <Image style={styles.image} source={require("./smile.png")}></Image>
          
        <TextInput
          value={username}
          onChangeText={(username) =>setusername( username )}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(password) =>setpassword( password )}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={()=>Alert.alert('Hello There', `${username} + ${password}`)}
        />
        </View>
    );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    },
  backgroundImage:{
    position: 'absolute',
    
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3,
  },
  image: {
    marginBottom: 40,
   height:80,
   width:80,
  },
  description:{
    fontSize:60,
    color:'brown',
    fontStyle:'italic',
    fontWeight:'bold',
    textShadowColor:'brown',
    textShadowRadius:10,
    textDecorationColor:'red',
    marginBottom:30,
  },
  image3: {
    marginBottom: 40,
   height:40,
   width:40,
   position:"absolute",
   top:50,
   left:10,
  },
  image4: {
    marginBottom: 40,
   height:40,
   width:40,
   position:"absolute",
   top:50,
   left:150,
  },
  image5: {
    marginBottom: 40,
   height:40,
   width:40,
   position:"absolute",
   top:50,
   left:80,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
