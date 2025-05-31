import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../styles'; // certifique-se do caminho

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.titulo}>Sobre a QUINTO Streetwear</Text>

      <Text style={styles.sobreTexto}>
        A QUINTO nasceu das ruas e do corre de quem não para. Criamos moda com atitude, estilo e representatividade. 
        Cada peça é desenhada para quem vive o urbano, respira a cultura de rua e valoriza o conforto sem abrir mão da originalidade.
      </Text>

      <Text style={styles.sobreTexto}>
        Nossa nova coleção 2025 chega com materiais premium, cortes oversized e uma pegada que mistura streetwear com identidade nacional.
        Produzido com respeito, vendido com verdade. Vista o corre. Vista QUINTO.
      </Text>

      <Text style={styles.footer}>
        © 2025 QUINTO Streetwear | Respeite o corre.
      </Text>
    </ScrollView>
  );
}
