import { StyleSheet, Dimensions} from 'react-native';

const { height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container : {
    marginTop: 30,
    alignItems: 'center',
    height: height - 50,
    justifyContent: 'space-between'
  },
  form : {
    width: '60%',
    alignItems: 'center'
  },
  textInput: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 30,
    borderColor: '#c3c9cb',
    paddingLeft: 10
  },
  image: {
    aspectRatio: 1,
    width: 200,
    height: 'auto',
    alignSelf: 'center',
    marginVertical: 20,
  },
  button: {
    width: '50%',
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
    flexDirection: 'row',
  },
  signUpText:{
    fontSize: 15,
    color: '#01337f'
  }
});

export default styles;