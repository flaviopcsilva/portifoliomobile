import { useEffect, useState } from 'react';
import { View, FlatList, Button, Alert, StyleSheet, Text } from 'react-native';
import { api } from '../src/api/clienteApi';
import { Cliente } from '../src/types/Cliente';
import ClienteCard from '../src/components/ClienteCard';
import { router } from 'expo-router';

export default function Home() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  // Carregar clientes do backend
  const carregarClientes = async () => {
    try {
      const response = await api.get('/clientes');
      setClientes(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os clientes');
    }
  };

  // Chama ao montar o componente
  useEffect(() => {
    carregarClientes();
  }, []);

  // Callback para deletar cliente da lista
  const handleDelete = (id: number) => {
    setClientes(prev => prev.filter(c => c.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Clientes</Text>

      <Button
        title="Novo Cliente"
        onPress={() => router.push('/form')}
      />

      {clientes.length === 0 ? (
        <Text style={styles.semClientes}>Nenhum cliente cadastrado</Text>
      ) : (
        <FlatList
          data={clientes}
          keyExtractor={(item) => item.id!.toString()}
          renderItem={({ item }) => (
            <ClienteCard
              cliente={item}
              onDelete={() => handleDelete(item.id!)}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  semClientes: { textAlign: 'center', marginTop: 20, fontSize: 16, color: '#555' },
});
