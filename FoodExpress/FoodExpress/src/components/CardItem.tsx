import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Tipos das props do componente
interface CardItemProps {
  item: {
    id: number;
    name: string;
    price: number;
  };
  addToCart: (item: { id: number; name: string; price: number }) => void;
}

export default function CardItem({ item, addToCart }: CardItemProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      <Button title="Adicionar" onPress={() => addToCart(item)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '100%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    marginBottom: 10,
    color: '#555',
  },
});
