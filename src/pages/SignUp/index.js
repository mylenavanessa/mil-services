import React, { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

import api from '../../services/api'
import style from './styles';

export default function Location({ navigation }) {

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function signUp() {
    const client = navigation.getParam('client')
    if (client) {
      const address =  {
        'zip_code': navigation.getParam('zipCode'),
        street: navigation.getParam('street'),
        district: navigation.getParam('district'),
        complement: navigation.getParam('complement'),
        number: navigation.getParam('number')
      }

      const { data } = await api.post('/clients', {
        name,
        cpf,
        phone,
        email,
        password,
        address
      })

      if (data._id)
        navigation.navigate('Profile')
      else
        Alert.alert('Erro ao registrar, tente novamente')
    } else {
      console.log('funcionario')
    }
  }

  return (
    <View style={style.container}>
      <Image resizeMode="contain" source={require('../../assets/logo.png')} style={style.image} />
      <TextInput
        style={style.textInput}
        placeholder='Nome completo'
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={style.textInput}
        placeholder='CPF'
        autoCapitalize='none'
        autoCorrect={false}
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={style.textInput}
        placeholder='Celular'
        autoCapitalize='none'
        autoCorrect={false}
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={style.textInput}
        placeholder='E-mail'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={style.textInput}
        secureTextEntry={true}
        placeholder='Senha'
        keyboardType='visible-password'
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={style.button} onPress={signUp}>
        <Text style={style.textButton}>Registrar</Text>
      </TouchableOpacity>

      <View style={style.login}>
        <Text style={style.text}>Já possui conta?</Text>
        <Text style={style.loginText} onPress={() => navigation.navigate('Login')}> Login</Text>
      </View>
    </View>
  );
}
