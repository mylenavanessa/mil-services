import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
   <Image resizeMode="contain" source={require('../../assets/logo.png')} style={styles.image}/>
   <Text  style={styles.text}>o que você é?</Text>
   <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Location')}>
        <Text style={styles.textButton}>Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.textButton}>Funcionario</Text>
      </TouchableOpacity>
    </View>
  );
}
