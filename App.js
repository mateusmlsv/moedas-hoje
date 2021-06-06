import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import AssetExample from './components/AssetExample';
import Main from './pages/Main';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/transferencia-internacional.svg")} />
      <Text style={styles.paragraph}>Moedas Hoje</Text>
      <Card style={styles.card}>
        <AssetExample />        
      </Card>
      <View style={styles.button}>
        <Button 
          color="#FFF"
          title={<Icon name="arrow-right" size={30} color='red'/>}
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home" headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#FFF',
    borderRadius: '50%',
    padding: 10
  },
  card: {
    borderRadius: '35px'
  }
});

export default App;