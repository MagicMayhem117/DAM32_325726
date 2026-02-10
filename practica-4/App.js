import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleCont}>
        <Text style={styles.title}>SILKSONG</Text>
      </View>
      <View style={styles.contVer}>
        <View style={styles.imgCont}>
          <Image style={styles.img} source={require("./assets/img/skong.jpg")}></Image>
        </View>
        <View style={styles.txtCont}>
          <Text style={styles.list}>- Metroidvania</Text>
          <Text style={styles.list}>- 60+ horas de contenido</Text>
          <Text style={styles.list}>- Plataformero</Text>
          <Text style={styles.list}>- Fantasía</Text>
          <Text style={styles.list}>- Combate</Text>
        </View>
      </View>
      <View style={styles.contHor}>
        <View style={styles.descCont}>
          <Text style={styles.text}>Silksong es un metroidvania desarrollado por Team Cherry, un pequeño equipo de desarrolladores Australiano. 
            Es la secuela de uno de los juegos Indie más vendidos de la historia, Hollow Knight, y como secuela le da seguimiento 
            excelente al juego original. Se esperan DLCs en el futuro próximo.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#ffeded",
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    color: "white",
    textAlign: "justify",
    fontWeight: "bold"
  },
  list: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14
  },
  container: {
    flex: 1,
    backgroundColor: '#8e0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contHor: {
    backgroundColor: "#d2281f",
    height: "30%",
    width: "85%",
    marginTop: 20,
    padding: "3%",
    justifyContent: "center",
    borderRadius: 2
  },
  contVer: {
    backgroundColor: "#d2281f",
    height: "30%",
    width: "85%",
    marginTop: 20,
    padding: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 2
  },
  titleCont: {
    backgroundColor: "#d2281f",
    height: "15%",
    width: "85%",
    justifyContent: "center",
    borderRadius: 2
  },
  imgCont: {
    height: "auto",
    backgroundColor: "#ffeded",
    width: "45%",
    borderRadius: 5,
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  }, 
  txtCont: {
    height: "auto",
    backgroundColor: "#ffffff74",
    width: "45%",
    borderRadius: 5,
    padding: "2%",
    justifyContent: "space-around"
  },
  descCont: {
    height: "80%",
    backgroundColor: "#ffffff74",
    width: "90%",
    borderRadius: 5,
    alignSelf: "center",
    padding: "5%"
  },
});
