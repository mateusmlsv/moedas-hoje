import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Picker } from 'react-native';
import Constants from 'expo-constants';
import api from '../services/api';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Main({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('USD');
  const [currentMoney, setCurrentMoney] = useState(0);

  useEffect(() => {
    async function getMoney() {
      const money = await api.get(`last/${selectedValue}-BRL`);
      const firstKey = Object.keys(money.data)[0];
      setCurrentMoney(money.data[firstKey].high)
    }
    getMoney()
  }, [selectedValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Selecione a moeda desejada</Text>

      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Dólar americano" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Iene Japonês" value="JPY" />
        <Picker.Item label="Yuan Chinês" value="CNY" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
        <Picker.Item label="Peso Argentino" value="ARS" />
        <Picker.Item label="Franco Suíço" value="CHF" />
      </Picker>

      <Text style={styles.paragraph}>O valor de 1 {selectedValue} é</Text>
      <Card style={styles.card}>
        <Text style={styles.money}>R$ {currentMoney}</Text>
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#282a36',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  picker: {
    width: 300,
    height: 50,
    borderRadius: 35,
    marginBottom: 50,
    backgroundColor: '#FFF'
  },
  card: {
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  money: {
    fontWeight: 'bold'
  }
});