import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Telas
import Loja from './screens/Loja';
import FinalizarPedido from './screens/FinalizarPedido';
import Local from './screens/Local';
import Sobre from './screens/Sobre';
import Comprar from './screens/Comprar';
import Servicos from './screens/Servicos'; // nova tela
import Config from './screens/Config';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Loja"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#aed581",
          width: "65%",
          borderWidth: 2,
          borderColor: "green",
        },
        drawerActiveTintColor: "green",
        drawerInactiveTintColor: "#689f38",
        drawerActiveBackgroundColor: "white",
        drawerItemStyle: {
          borderRightWidth: 1,
          borderRadius: 15,
          borderColor: "green",
        }
      }}
    >
      <Drawer.Screen
        name="Loja"
        component={Loja}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#689f38" },
          drawerIcon: () => <Icon name="home" size={20} color="green" />
        }}
      />
      <Drawer.Screen
        name="FinalizarPedido"
        component={FinalizarPedido}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#689f38" },
          drawerIcon: () => <Icon name="receipt" size={20} color="green" />
        }}
      />
      <Drawer.Screen
        name="Local"
        component={Local}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#689f38" },
          drawerIcon: () => <Icon name="location" size={20} color="green" />
        }}
      />
      <Drawer.Screen
        name="Servicos"
        component={Servicos}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#689f38" },
          drawerIcon: () => <Icon name="construct" size={20} color="green" />
        }}
      />
      <Drawer.Screen
        name="Config"
        component={Config}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#689f38" },
          drawerIcon: () => <Icon name="settings" size={20} color="green" />
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#689f38" },
          drawerIcon: () => <Icon name="information-circle" size={20} color="green" />
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
        <Stack.Screen name="Comprar" component={Comprar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
