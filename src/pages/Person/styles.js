import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container : {
    marginTop: -30,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 300
  },
  image: {
    aspectRatio: 1,
    width: 150,
    height: 'auto',
    alignSelf: 'center',
    marginVertical: 20,
  },
  button: {
    width: '70%',
    height: 40,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    shadowOffset:{  width: 0,  height: 3  },
    shadowColor: 'black',
    shadowOpacity: 0.4,
    marginBottom: 50
  },
  text: {
    fontSize: 24,
    borderRadius: 2,
    marginBottom: 40
  },
  textButton: {
    color: 'white',
    fontWeight:'bold',
  },
  viewButton: {
    height: 300,
    justifyContent: 'space-between'
   }
});
  
  export default styles;