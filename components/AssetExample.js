import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import api from '../services/api';

export default function AssetExample() {
  const [dolar, setDolar] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('last/USD-BRL')
      setDolar(response.data.USDBRL.high)
    }
    fetchData()
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Aqui você pode acompanhar o valor das moedas mais utilizadas no mundo em tempo real, como por exemplo o valor do dólar americano hoje:
      </Text>
      <Text style={styles.moeda}>R$ {dolar}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  moeda: {
    fontWeight: 'bold',
  }
});
