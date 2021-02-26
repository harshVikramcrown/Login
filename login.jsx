import React, { Component,useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text} from 'react-native';
import Navigation from './navigation';
import styles from './loginStyle';

const Login=({navigation})=>{
    const [username, setusername] = useState(null);
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
          onChangeText={(username) =>{
            setusername( username )}
          
          }
          placeholder={'Username'}
          style={styles.input}
        />
        {username===""? (<Text>User Name Can't be empty!</Text>):null}
        <TextInput
          value={password}
          onChangeText={(password) =>setpassword( password )}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        {password===""? (<Text>password can't be empty!</Text>):null}
        <Button
          title={'Login'}
          style={styles.input}
          onPress={()=>{
            if(username!='' && username!= null &&password!='' && password!=null){
              navigation.navigate('Navigation')}
            }
        }
          />
        </View>
    );
}


  export default Login;