import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.geral}>
      <View style={styles.tipo1}>
        <Text>
            Reversão de Feitiço: Vermelho
        </Text>
      </View>

      <View style={styles.tipo2}>
        <Text>
            Juntando os dois, é possível criar a Técnica Imaginária: "Vazio Roxo"🫴
        </Text>
      </View>

      <View style={styles.tipo3}>
        <Text>
            Lapso de Feitiço: Azul
        </Text>
      </View>
    </View>
  )}

const styles= StyleSheet.create({
  geral:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#362040",
  },
  tipo1:{
    flex:0,
    width:150,
    height:150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fc0303",
    borderRadius: 100,
    margin:20
  },
  tipo2:{
    flex:0,
    width:200,
    height:200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7932a8",
    borderRadius: 100,
    margin:20
  },
  tipo3:{
    flex:0,
    width:150,
    height:150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0238fa",
    borderRadius: 100,
    margin:20
  }
})