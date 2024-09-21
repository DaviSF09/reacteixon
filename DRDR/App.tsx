import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.pai}>
      <View style={[styles.geral,styles.vermelho]}>
        <Text>
            Reversão de Feitiço: Vermelho
        </Text>
      </View>

      <View style={[styles.geral,styles.roxo]}>
        <Text>
            Juntando os dois, é possível criar a Técnica Imaginária: "Vazio Roxo"🫴
        </Text>
      </View>

      <View style={[styles.geral,styles.azul]}>
        <Text>
            Lapso de Feitiço: Azul
        </Text>
      </View>
    </View>
  )}

const styles= StyleSheet.create({
  pai:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#362040",
  },
  geral:{
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    margin:20,
  },
  vermelho:{backgroundColor: "red"},
  roxo:{backgroundColor: "#7932a8"},
  azul:{backgroundColor: "#0238fa"}
})