import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import CardItem from '../components/CardItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Menu: undefined;
  Carrinho: undefined;
};

type MenuScreenProp = NativeStackNavigationProp<RootStackParamList, 'Menu'>;

export default function MenuScreen() {
  const navigation = useNavigation<MenuScreenProp>();

  // Simulando produtos do cardápio
  const produtos = [
    { id: 1, name: 'Hambúrguer', price: 20.0 },
    { id: 2, name: 'Pizza', price: 35.0 },
    { id: 3, name: 'Refrigerante', price: 7.5 },
    { id: 4, name: 'Batata Frita', price: 12.0 },
  ];

  // Estado do carrinho
  const [cart, setCart] = useState<typeof produtos>([]);

  // Função para adicionar ao carrinho
  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart([...cart, item]);
    Alert.alert('Adicionado', `${item.name} adicionado ao carrinho!`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardItem item={item} addToCart={addToCart} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});
