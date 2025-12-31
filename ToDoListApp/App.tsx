import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { TaskProvider } from './src/context/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </TaskProvider>
  );
}
