import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SignUp({ navigation }) {
  const [zipCode, setZipCode] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')
  const [number, setNumber] = useState('')

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={require('../../assets/logo.png')} style={styles.image}/>
      <Text  style={styles.text}>que tal você colocar sua localização?</Text>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.textInput} 
          placeholder= 'CEP'
          autoCapitalize='none'
          autoCorrect={false}
          value={zipCode}
          onChangeText={setZipCode}
        />
        <TextInput
          style={styles.textInput} 
          placeholder= 'Rua'
          autoCapitalize='none'
          autoCorrect={false}
          value={street}
          onChangeText={setStreet}
        />
        <TextInput
          style={styles.textInput} 
          placeholder= 'Bairro'
          autoCapitalize='none'
          autoCorrect={false}
          value={district}
          onChangeText={setDistrict}
        />
        <TextInput
          style={styles.textInput} 
          placeholder= 'Complemento'
          autoCapitalize='none'
          autoCorrect={false}
          value={complement}
          onChangeText={setComplement}
        />
        <TextInput 
          style={styles.numero} 
          placeholder= 'Número'
          autoCapitalize='none'
          autoCorrect={false}
          value={number}
          onChangeText={setNumber}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignUp', {
            zipCode,
            street,
            district,
            complement,
            number
          })}
        >
        <Text style={styles.textButton}>Confirmar Endereço</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
