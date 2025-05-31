import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // ícone do carrinho
import styles from '../styles';

const produtos = [
  {
    id: '1',
    nome: 'Camiseta OverSize - Quinto',
    preco: 'R$99,90',
    imagem: require('../assets/camisa-quinto.jpg'),
  },
  {
    id: '2',
    nome: 'Boné 5 Five Panel - Quinto',
    preco: 'R$69,90',
    imagem: require('./assets/5five-quinto.jpg'),
  },
  {
    id: '3',
    nome: 'Calça Moletom - Quinto',
    preco: 'R$99,90',
    imagem: require('./assets/calca-quinto.jpg'),
  },
  {
    id: '4',
    nome: 'Jaqueta Street - Quinto',
    preco: 'R$199,90',
    imagem: require('./assets/jaqueta-quinto.jpg'),
  },
  {
    id: '5',
    nome: 'Tênis Urban - Quinto',
    preco: 'R$159,90',
    imagem: require('./assets/sapato-quinto.jpg'),
  },    
  // outros produtos...
];

export default function Loja({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Nova Coleção QUINTO 2025</Text>
        <Text style={styles.subtitulo}>Estilo urbano, atitude pesada.</Text>

        <FlatList
          data={produtos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.lista}
        />

        <Text style={styles.footer}>© 2025 QUINTO Streetwear | Respeite o corre.</Text>
      </ScrollView>

      {/* Botão do carrinho fixo */}
      <TouchableOpacity
        style={styles.carrinhoBotao}
        onPress={() => navigation.navigate('FinalizarPedido')}
      >
        <MaterialIcons name="shopping-cart" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
}


 