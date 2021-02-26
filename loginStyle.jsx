import { Alert, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text} from 'react-native';


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
  
  export default styles;