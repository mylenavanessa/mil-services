import React, { PureComponent } from 'react';

import { View, TextInput, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import api from '../../services/api';
import styles from './styles';

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { 
      data: {
        name: this.props.navigation.getParam('name'),
        cpf: this.props.navigation.getParam('cpf'),
        email: this.props.navigation.getParam('email'),
        password: this.props.navigation.getParam('password'),
        phone: this.props.navigation.getParam('phone'),
      }
    }
  }

  static navigationOptions = {
    title: "Profile"
  };

  remove = async () => {
    const { cpf, email, password } = this.state.data;
    const { data } = await api.delete('/clients', { data: { cpf, email, password }});

    Alert.alert(data.message);
    this.props.navigation.navigate('Login');
  }

  render() {
    return (  
      <View style={styles.container}>
        <Text style={{ paddingBottom: 30, fontSize: 22 }}>{this.state.data.name}</Text>
        <View>
          <TextInput style={styles.textInput} onChangeText={(cpf) => this.setState({ cpf })} value={this.state.data.cpf} />
          <TextInput style={styles.textInput} onChangeText={(email) => this.setState({ email })} value={this.state.data.email} />
          <TextInput style={styles.textInput} onChangeText={(phone) => this.setState({ phone })} value={this.state.data.phone} />
          <TextInput style={styles.textInput} onChangeText={(password) => this.setState({ password })} value={this.state.data.password} />
        </View>

        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.textButton}>Atualizar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.removeButton} onPress={() => this.remove()}>
            <Text style={styles.textButton}>Remover Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}