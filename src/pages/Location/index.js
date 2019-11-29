import React from 'react';
import { View, Image, TextInput, Button, Text, TouchableOpacity } from 'react-native';

import style from './styles';

export default function Location({ navigation }) {
  return (
    <View style={style.container}>
     <Image resizeMode="contain" source={require('../../assets/logo.png')} style={style.image}/>
     <TextInput
        style={style.textInput}
        placeholder= '  Nome completo'
      />
      <TextInput
        style={style.textInput}
        placeholder= '  CPF'
      />
      <TextInput
        style={style.textInput}
        placeholder= '  Celular'
      />
      <TextInput
        style={style.textInput}
        placeholder= '  E-mail'
      />
      <TextInput
        style={style.textInput}
        placeholder= '  E-mail'
      />

      <TouchableOpacity style={style.button}>
        <Text style={style.textButton}>Registrar</Text>
      </TouchableOpacity>

      <View style={style.login}>
        <Text  style={style.text}>Já possui conta?</Text>
        <Text  style={style.loginText} onPress={() => navigation.navigate('Login')}> Login</Text>
      </View>
    </View>
  );
}
