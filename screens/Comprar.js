import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';

export default function Comprar() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Compra Confirmada 🎉</Text>
      <Text style={styles.sobreTexto}>Obrigado por comprar com a QUINTO Streetwear!</Text>
      <Text style={styles.footer}>Seu pedido está a caminho.</Text>
    </View>
  );
}
