import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleBatSignalPress = () => {
    setShowForm(true);
  };

  const handleSubmit = () => {
    console.log('Nome:', name);
    console.log('Telefone:', phone);
    console.log('Mensagem:', message);
    setName('');
    setPhone('');
    setMessage('');
    setShowForm(false);
  };

  return (
    <View style={styles.container}>
      {!showForm ? (
        <>
          <Image source={require('./assets/batman-logo.png')} style={styles.logo} />
          <Button title="Bat Sinal" onPress={handleBatSignalPress} />
        </>
      ) : (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Mensagem"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonHome: {
    backgroundColor: '#fff'
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    backgroundColor: '#5e97bd',
    fontSize: 18,
    padding: 12,
    paddingRight: 25,
    paddingLeft: 25,
    borderRadius: 20
  },
});