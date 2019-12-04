import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
      marginTop: -30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      width: '100%',
      height: 40,
      borderRadius: 5,
      borderWidth: 1,
      marginBottom: 25,
      borderColor: '#c3c9cb',
      paddingLeft: 10
    },
    numero: {
      width: '40%',
      height: 40,
      borderRadius: 5,
      borderWidth: 1,
      marginBottom: 25,
      alignSelf:'flex-start',
      borderColor: '#c3c9cb',
      paddingLeft: 10
    },
    image: {
      aspectRatio: 1,
      width: 150,
      height: 'auto',
      alignSelf: 'center',
      marginVertical: 20,
    },
    button: {
      height: 40,
      width: '70%',
      backgroundColor: '#1E90FF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      shadowOffset:{  width: 0,  height: 3  },
      shadowColor: 'black',
      shadowOpacity: 0.4,
      marginBottom: 5,
      alignSelf: "center"
    },
    text: {
      fontSize: 15,
      marginBottom: 30,
      marginTop: -30,
      height: 'auto',
    },
    viewInput: {
      width:'60%',
    },
    textButton: {
      color: 'white',
      fontWeight:'bold',
    },
  });
  
  export default styles;