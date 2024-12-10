import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from './styles';

export default function Cliente({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Tela Cliente</Text>
      <Text style={globalStyles.text}>Área destinada ao cliente.</Text>

      <TouchableOpacity
         style={globalStyles.buttonContainer}
         onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'Inicio' }],
       })
    }
>
        <Icon name="arrow-back" size={24} color="#068BFF" />
        <Text style={globalStyles.buttonText}>Voltar para Início</Text>
      </TouchableOpacity>
    </View>
  );
}
