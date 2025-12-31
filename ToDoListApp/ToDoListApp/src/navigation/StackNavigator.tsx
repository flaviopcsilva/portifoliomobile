import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TaskFormScreen from '../screens/TaskFormScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ToDo List' }} />
      <Stack.Screen name="TaskForm" component={TaskFormScreen} options={{ title: 'Nova Tarefa' }} />
    </Stack.Navigator>
  );
}
