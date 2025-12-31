import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Cliente } from '../types/Cliente';
import { router } from 'expo-router';
import { api } from '../api/clienteApi'; // Certifique-se que está correto

export default function ClienteCard({
  cliente,
  onDelete, // callback para atualizar a lista no componente pai
}: {
  cliente: Cliente;
  onDelete?: () => void;
}) {
  const deletarCliente = () => {
    Alert.alert(
      'Confirmação',
      `Deseja realmente deletar o cliente ${cliente.nome}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          style: 'destructive',
          onPress: async () => {
            try {
              await api.delete(`/clientes/${cliente.id}`);
              Alert.alert('Sucesso', 'Cliente deletado');
              if (onDelete) onDelete(); // Atualiza a lista
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível deletar o cliente');
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{cliente.nome}</Text>
      <Text>{cliente.email}</Text>

      <View style={styles.botoes}>
        <Button
          title="Editar"
          onPress={() => router.push({ pathname: '/form', params: cliente })}
        />
        <Button title="Deletar" color="#ff4d4d" onPress={deletarCliente} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
