import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../styles';

export default function FinalizarPedido({ route, navigation }) {
  const { produto } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Finalizar Pedido</Text>

      {produto ? (
        <View style={styles.pedidoResumo}>
          <Image source={produto.imagem} style={styles.imagem} />
          <Text style={styles.pedidoTexto}>{produto.nome}</Text>
          <Text style={styles.total}>{produto.preco}</Text>
        </View>
      ) : (
        <Text style={styles.pedidoTexto}>Nenhum produto selecionado</Text>
      )}

      <TouchableOpacity
        style={styles.botaoConfirmar}
        onPress={() => navigation.navigate('Comprar')}
      >
        <Text style={styles.botaoTextoPreto}>Confirmar Compra</Text>
      </TouchableOpacity>
    </ScrollView>
 
    )
  }