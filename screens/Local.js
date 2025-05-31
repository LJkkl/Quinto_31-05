import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles';

export default function Local() {
  return (
    <View style={styles.container}>

  <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.titulo}>Localização da Loja</Text>

      <MapView
        style={mapStyles.map}
        initialRegion={{
          latitude: -31.3281,      
          longitude: -54.1053,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: -31.3281, longitude: -54.1053 }}
          title="QUINTO Streetwear"
          description="Rua Rafael Cabeda, 497 - Bagé, RS"
        />
      </MapView>
    </View>
  );
}