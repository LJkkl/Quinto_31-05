import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import styles from '../styles';

const produtos = [
  {
    id: '1',
    nome: 'Camiseta OverSize - Quinto',
    preco: 'R$99,90',
    imagem: require('../assets/camisa-quinto.jpg'),
    descricao: 'Camiseta oversized com tecido premium, estilo urbano para o dia a dia.',
  },
  {
    id: '2',
    nome: 'Boné 5 Five Panel - Quinto',
    preco: 'R$69,90',
    imagem: require('../assets/5five-quinto.jpg'),
    descricao: 'Boné cinco painéis com logo bordado, confortável e estiloso.',
  },
  {
    id: '3',
    nome: 'Calça Moletom - Quinto',
    preco: 'R$99,90',
    imagem: require('../assets/calca-quinto.jpg'),
    descricao: 'Calça de moletom macia, perfeita para o conforto urbano.',
  },
  {
    id: '4',
    nome: 'Jaqueta Street - Quinto',
    preco: 'R$199,90',
    imagem: require('../assets/jaqueta-quinto.jpg'),
    descricao: 'Jaqueta streetwear com design moderno e tecido resistente.',
  },
  {
    id: '5',
    nome: 'Tênis Urban - Quinto',
    preco: 'R$159,90',
    imagem: require('../assets/sapato-quinto.jpg'),
    descricao: 'Tênis urbano com solado confortável e visual descolado.',
  },
];

export default function Loja({ navigation }) {
  const falarProduto = (nome, descricao) => {
    const texto = `${nome}. ${descricao}`;
    Speech.speak(texto, { language: 'pt-BR' });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('FinalizarPedido', { produto: item })}
        >
          <Text style={styles.botaoTexto}>Comprar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#555' }]}
          onPress={() => falarProduto(item.nome, item.descricao)}
        >
          <Text style={styles.botaoTexto}>Ouvir</Text>
        </TouchableOpacity>
      </View>
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

      <TouchableOpacity
        style={styles.carrinhoBotao}
        onPress={() => navigation.navigate('FinalizarPedido')}
      >
        <MaterialIcons name="shopping-cart" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
