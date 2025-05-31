// styles.js
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    color: '#bbb',
    marginBottom: 20,
    textAlign: 'center',
  },
  lista: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  imagem: {
    width: 260,
    height: 260,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  nome: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  preco: {
    fontSize: 18,
    color: '#bbb',
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#f90',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 5,
  },
  botaoTexto: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  footer: {
    marginTop: 30,
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
  },
    pedidoResumo: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginBottom: 20,
  },
  pedidoTexto: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botaoConfirmar: {
    backgroundColor: '#f90',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  botaoTextoPreto: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
   map: {
    width: Dimensions.get('window').width - 40,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
  },
logo: {
  width: 150,
  height: 150,
  resizeMode: 'contain',
  alignSelf: 'center',
  marginVertical: 20,
},
carrinhoBotao: {
  position: 'absolute',
  bottom: 30,
  right: 30,
  backgroundColor: '#f90',
  padding: 16,
  borderRadius: 50,
  elevation: 5,
},
configItem: {
  backgroundColor: '#222',
  padding: 15,
  borderRadius: 8,
  marginBottom: 15,
  width: '100%',
  alignItems: 'center',
},

configTexto: {
  color: '#fff',
  fontSize: 18,
},


});

export default styles;
