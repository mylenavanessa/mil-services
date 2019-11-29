import React from 'react';
import { View, Image, Text, TextInput, Button } from 'react-native';

import styles from './styles';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
   <Image resizeMode="contain" source={require('../../assets/logo.png')} style={styles.image}/>
   <Text  style={styles.text}>que tal você colocar sua localização?</Text>
   <View style={styles.viewInput}>
      <TextInput
        style={styles.textInput} placeholder= '  CEP'
      />
      <TextInput
        style={styles.textInput} placeholder= '  Rua'
      />
      <TextInput
        style={styles.textInput} placeholder= '  Bairro'
      />
      <TextInput
        style={styles.textInput} placeholder= '  Complemento'
      />
      <TextInput style={styles.numero} placeholder= '  Número'
      />
      </View>
      <Button style={styles.button} title= 'Confirmar Endereço' onPress={() => navigation.navigate('SignUp')}/>
    </View>
  );
}
