import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Router from './src/routes'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Image resizeMode="contain" source={require('./src/assets/logo.png')} style={{
    // aspectRatio: 1,
    // width: 171,
    // height: 93,
    // alignSelf: 'center',
    // marginVertical: 20,
    //   }}/>
    // </View>
    <Router/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
