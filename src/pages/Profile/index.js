import React, { PureComponent, useState } from 'react';

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import api from '../../services/api';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

export function navigationOptions({ navigation }) {
  return {
    title: "Perfil",
  };
}

export default function Profile({ navigation }) {

  const [_id, setId] = useState(navigation.getParam('_id'))
  const [name, setName] = useState(navigation.getParam('name'));
  const [cpf, setCpf] = useState(navigation.getParam('cpf'));
  const [email, setEmail] = useState(navigation.getParam('email'));
  const [password, setPassword] = useState(navigation.getParam('password'));
  const [phone, setPhone] = useState(navigation.getParam('phone'));

  remove = async () => {
    const { data } = await api.delete('/clients', { data: { cpf, email, password } });

    if (data) {
      Alert.alert(data.message);
      navigation.navigate('Login');
    }
  }

  update = async (_id) => {
    const { data } = await api.put(`/clients/${_id}`, { data: { email, phone, password } });

    if (data) {
      Alert.alert(data.message);
      navigation.navigate('Home');
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={'padding'} enabled>
      <View style={styles.iconUser}>
        <Icon name="user" size={60} color="#FFFFFF" style={{ marginTop: 7 }} />
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={{ paddingBottom: 30, fontSize: 22 }}>{name}</Text>
      </View>
      <View style={{ marginTop: 1 }}>
        <Text>CPF</Text>
        <TextInput style={styles.textInputDisabled} value={cpf} editable={false} />
        <Text>E-mail</Text>
        <TextInput style={styles.textInput} onChangeText={setEmail} value={email} />
        <Text>Celular</Text>
        <TextInput style={styles.textInput} onChangeText={setPhone} value={phone} />
        <Text>Senha</Text>
        <TextInput style={styles.textInput} onChangeText={setPassword} value={password} />
      </View>

      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity style={styles.updateButton} onPress={() => update(_id)}>
          <Text style={styles.textButton}>Atualizar Conta</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.removeButton} onPress={remove}>
          <Text style={styles.textButton}>Remover Conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
