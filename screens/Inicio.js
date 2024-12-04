import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from './styles';

export default function Inicio({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Tela Inicial</Text>

      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Icon name="info" size={24} color="#068BFF" />
        <Text style={globalStyles.buttonText}>Ir para Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => navigation.navigate('Cliente')}
      >
        <Icon name="person" size={24} color="#068BFF" />
        <Text style={globalStyles.buttonText}>Ir para Cliente</Text>
      </TouchableOpacity>
    </View>
  );
}
