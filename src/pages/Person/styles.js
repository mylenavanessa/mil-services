import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container : {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    aspectRatio: 1,
    width: 150,
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

  }
});
  
  export default styles;