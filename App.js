import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Puedes importar desde archivos locales
import HomeScreen from './screens/HomeScreen'
import ResultadosScreen from './screens/Resultados';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  ResultadosScreen: ResultadosScreen
});

const AppContainer = createAppContainer(AppNavigator);
