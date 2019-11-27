import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container : {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '60%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 25,
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
    fontSize: 10,
  },
  signUp: {
    marginTop: 25,
    flexDirection: 'row'
  },
  signUpText:{
    fontSize: 10,
    color: '#01337f'
  }
});

export default styles;