import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
      marginTop: -30,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      width: '100%',
      height: 40,
      borderRadius: 5,
      borderWidth: 1,
      marginBottom: 25,
      borderColor: '#c3c9cb'
    },
    numero: {
      width: '30%',
      height: 40,
      borderRadius: 5,
      borderWidth: 1,
      marginBottom: 25,
      alignSelf:'flex-start',
      borderColor: '#c3c9cb'
    },
    image: {
      aspectRatio: 1,
      width: 150,
      height: 'auto',
      alignSelf: 'center',
      marginVertical: 20,
    },
    button: {
      width: '30%',
    },
    text: {
      fontSize: 15,
      marginBottom: 30,
      marginTop: -30,
      height: 'auto',

    },
    viewInput: {
       width:'60%'
  
      }
  });
  
  export default styles;