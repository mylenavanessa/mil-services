import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Screen Home</Text>

      <View style={{ marginTop: 50 }}>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={styles.textButton}>Solicitar Serviço</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}
