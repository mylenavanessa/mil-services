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
    width: '30%',
    height: 40,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    shadowOffset:{  width: 0,  height: 3  },
    shadowColor: 'black',
    shadowOpacity: 0.4,
  },
  text: {
    fontSize: 15,
    borderRadius: 2
  },
  textButton: {
    color: 'white',
    fontWeight:'bold',

  },
  signUp: {
    marginTop: 25,
    flexDirection: 'row'
  },
  signUpText:{
    fontSize: 15,
    color: '#01337f'
  }
});

export default styles;