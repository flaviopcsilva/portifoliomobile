import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';

// Tipos da navegação
type RootStackParamList = {
  Carrinho: undefined;
  Home: undefined;
};

type CarrinhoScreenProp = NativeStackNavigationProp<RootStackParamList, 'Carrinho'>;

// Tipo dos itens do carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
}

export default function CarrinhoScreen() {
  const navigation = useNavigation<CarrinhoScreenProp>();

  // Estado do carrinho (simulando itens já adicionados)
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: 'Hambúrguer', price: 20.0 },
    { id: 2, name: 'Pizza', price: 35.0 },
  ]);

  // Remover item do carrinho
  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
    Alert.alert('Removido', 'Item removido do carrinho!');
  };

  // Finalizar pedido
  const finalizarPedido = () => {
    if (cart.length === 0) {
      Alert.alert('Carrinho vazio', 'Adicione algum produto antes de finalizar.');
      return;
    }
    Alert.alert('Pedido realizado!', `Total: R$ ${total.toFixed(2)}`);
    setCart([]);
    navigation.navigate('Home');
  };

  // Calculando total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>O carrinho está vazio.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name} - R$ {item.price.toFixed(2)}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
                <Text style={styles.removeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

      <Button title="Finalizar Pedido" onPress={finalizarPedido} />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e1e2f',
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    color: '#555',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#1e1e2f',
  },
});
