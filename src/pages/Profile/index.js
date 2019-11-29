import React from 'react';

import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import styles from './styles';

export default function Profile({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={{ paddingBottom: 20 }}>Lucas Ferreira</Text>
      <View>
        <TextInput style={styles.textInput} value={"81 99999-9999"} />
        <TextInput style={styles.textInput} value={"lucas@gmail.com"} />
        <TextInput style={styles.textInput} value={"999.999.999-99"} />
        <TextInput style={styles.textInput} value={"**********"} />
      </View>

      <View>
        <TouchableOpacity style={styles.removeButton}>
          <Text style={styles.textButton}>Remover Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}