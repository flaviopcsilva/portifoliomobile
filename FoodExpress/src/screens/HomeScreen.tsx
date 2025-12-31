import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Tipos da navegação
type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  Carrinho: undefined;
};

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao FoodExpress!</Text>
      <Text style={styles.subtitle}>Escolha uma opção abaixo:</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Cardápio"
          onPress={() => navigation.navigate('Menu')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Carrinho"
          onPress={() => navigation.navigate('Carrinho')}
        />
      </View>
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   // centraliza vertical
    alignItems: 'center',       // centraliza horizontal
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e1e2f',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#555',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
});
