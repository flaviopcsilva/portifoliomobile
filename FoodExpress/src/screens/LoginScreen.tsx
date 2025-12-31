import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Definindo tipos da navegação
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenProp>();

  // Estados para controlar os inputs
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função para simular login
  const handleLogin = () => {
    if (email === 'teste@teste.com' && senha === '123456') {
      // Se login correto, navega para Home
      navigation.navigate('Home');
    } else {
      // Senão, mostra alerta
      Alert.alert('Erro', 'Email ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FoodExpress</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

// Estilo da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // centraliza vertical
    alignItems: 'center',      // centraliza horizontal
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#1e1e2f',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
});
