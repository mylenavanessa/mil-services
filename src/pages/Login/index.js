import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

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

      <TouchableOpacity style={styles.button} >
        <Text style={styles.textButton}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.signUp}>
        <Text  style={styles.text}>Ainda não possui conta?</Text>
        <Text  style={styles.signUpText} onPress={() => navigation.navigate('SignUp')}> Registre-se grátis</Text>
      </View>
    </View>
  );
}
