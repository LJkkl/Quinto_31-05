import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../styles';

export default function Config() {
  return (
    
    
    <ScrollView contentContainerStyle={styles.container}>

    <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.titulo}>Configurações</Text>

      <TouchableOpacity style={styles.configItem}>
        <Text style={styles.configTexto}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem}>
        <Text style={styles.configTexto}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem}>
        <Text style={styles.configTexto}>Preferências de Tema</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem}>
        <Text style={styles.configTexto}>Idioma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem}>
        <Text style={styles.configTexto}>Sair da Conta</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Versão 1.0.0 - QUINTO App</Text>
    </ScrollView>
  );
}
