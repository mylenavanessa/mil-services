import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';

import api from '../../services/api'
import styles from './styles';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    const { data } = await api.post('/auth', {
      email,
      password,
      type_user: 'client'
    })

    if (data) {
      const { _id, name, cpf, phone, email, password, service_id } = data;
      navigation.navigate('Profile', { _id, name, cpf, phone, email, password })
    } else {
      Alert.alert('Dados incorretos, tente novamente')
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={'padding'} enabled>
      <Image resizeMode="contain" source={require('../../assets/logo.png')} style={styles.image} />
      <TextInput
        style={styles.textInput}
        placeholder='E-mail'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder='Senha'
        keyboardType='visible-password'
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.textButton}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.signUp}>
        <Text style={styles.text}>Ainda não possui conta?</Text>
        <Text style={styles.signUpText} onPress={() => navigation.navigate('Person')}> Registre-se grátis</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
