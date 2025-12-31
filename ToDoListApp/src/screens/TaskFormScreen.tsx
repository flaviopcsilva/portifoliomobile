import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TaskContext } from '../context/TaskContext';

type RootStackParamList = {
  Home: undefined;
  TaskForm: undefined;
};

type TaskFormScreenProp = NativeStackNavigationProp<RootStackParamList, 'TaskForm'>;

export default function TaskFormScreen() {
  const navigation = useNavigation<TaskFormScreenProp>();
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Erro', 'Digite o título da tarefa');
      return;
    }
    addTask(title);
    setTitle('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite a tarefa"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6f4fe',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
