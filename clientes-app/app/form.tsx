import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet, TextInput } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { useLocalSearchParams, router } from 'expo-router';
import { api } from '../src/api/clienteApi';

export default function Form() {
  const params = useLocalSearchParams();

  const [nome, setNome] = useState(params.nome?.toString() || '');
  const [email, setEmail] = useState(params.email?.toString() || '');
  const [telefone, setTelefone] = useState(params.telefone?.toString() || '');
  const [dataNascimento, setDataNascimento] =
    useState(params.data_nascimento?.toString() || '');

  const validarCampos = () => {
    if (!nome.trim() || !email.trim()) {
      Alert.alert('Erro', 'Nome e Email são obrigatórios');
      return false;
    }
    return true;
  };

  const formatarDataISO = (data: string) => {
    const partes = data.split('/');
    if (partes.length !== 3) return '';
    const [dia, mes, ano] = partes;
    return `${ano}-${mes}-${dia}`;
  };

  const salvar = async () => {
    if (!validarCampos()) return;

    const payload = {
      nome,
      email,
      telefone,
      data_nascimento: formatarDataISO(dataNascimento),
    };

    try {
      if (params.id) {
        await api.put(`/clientes/${params.id}`, payload);
      } else {
        await api.post('/clientes', payload);
      }
      router.back();
    } catch (error: any) {
      Alert.alert('Erro', error.response?.data?.message || 'Erro ao salvar cliente');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <MaskedTextInput
        mask="99/99/9999"
        placeholder="Data de Nascimento (DD/MM/YYYY)"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        keyboardType="number-pad"
        style={styles.input}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
  },
});
