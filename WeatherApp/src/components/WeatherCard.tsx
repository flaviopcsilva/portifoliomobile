import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface WeatherCardProps {
  city: string;
  temp: number;
  description: string;
  icon: string;
}

export default function WeatherCard({ city, temp, description, icon }: WeatherCardProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{city}</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <Text style={styles.temp}>{temp.toFixed(1)}°C</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  city: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    width: 100,
    height: 100,
  },
  temp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007bff',
  },
  desc: {
    fontSize: 16,
    color: '#555',
    textTransform: 'capitalize',
  },
});
