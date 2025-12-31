import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TaskItemProps {
  task: { id: string; title: string; completed: boolean };
  toggleComplete: (id: string) => void;
  removeTask: (id: string) => void;
}

export default function TaskItem({ task, toggleComplete, removeTask }: TaskItemProps) {
  return (
    <View style={[styles.container, task.completed && styles.completedContainer]}>
      <TouchableOpacity onPress={() => toggleComplete(task.id)} style={{ flex: 1 }}>
        <Text style={[styles.title, task.completed && styles.completed]}>{task.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeTask(task.id)} style={styles.removeButton}>
        <Text style={styles.removeText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  completedContainer: {
    backgroundColor: '#d3f9d8',
  },
  title: {
    fontSize: 16,
    color: '#1e1e2f',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  removeButton: {
    marginLeft: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 6,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
