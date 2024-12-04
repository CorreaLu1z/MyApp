import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from './styles';

export default function Sobre({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Tela Sobre</Text>
      <Text style={globalStyles.text}>Bem-vindo à página Sobre!</Text>

      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Icon name="arrow-back" size={24} color="#068BFF" />
        <Text style={globalStyles.buttonText}>Voltar para Início</Text>
      </TouchableOpacity>
    </View>
  );
}
