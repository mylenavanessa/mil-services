import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';

import styles from './styles';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
     <Image resizeMode="contain" source={require('../../assets/logo.png')} style={styles.image}/>
      <TextInput
        style={styles.textInput}
        placeholder= '  E-mail'
      />
      <TextInput
        style={styles.textInput}
        placeholder= '  Senha'
      />
      <Button  style={styles.button} title= 'LOGIN'/>

      <View style={styles.signUp}>
        <Text  style={styles.text}>Ainda não possui conta?</Text>
        <Text  style={styles.signUpText} onPress={() => navigation.navigate('Location')}> Registre-se grátis</Text>
      </View>
    </View>
  );
}
