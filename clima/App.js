import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [ clima, setClima ] = useState(0);
  const [ msg, setMsg ] = useState("Soleado");
  const [ img, setImg ] = useState(require("./assets/img/soleado.png"));
  const [ temp, setTemp ] = useState(27);

  useEffect (() => {
     if (clima < 1) {
      setMsg("No olvides bloqueador");
      setImg(require("./assets/img/soleado.png"));
      setTemp(27);
     } else if (clima < 2) {
      setMsg("Ideal para salir a caminar");
      setImg(require("./assets/img/nublado.png"));
      setTemp(22);
     } else if (clima < 3) {
      setMsg("Trae un paraguas");
      setImg(require("./assets/img/lloviendo.png"));
      setTemp(15);
     } else {
      setMsg("No hay razón para salir");
      setImg(require("./assets/img/tormenta.png"));
      setTemp(10);
     }
  }, [clima]);

  const setSoleado = () => {
    setClima(0);
  }

  const setNublado = () => {
    setClima(1);
  }

  const setLloviendo= () => {
    setClima(2);
  }

  const setTormenta = () => {
    setClima(3);
  }

  return (
    <ImageBackground source={img} resizeMode='fill' style={styles.bkgImg}>
      <Text style={styles.texto}>{msg}</Text>

      <View style={styles.imgCont}>
        <TouchableOpacity style={styles.boton} onPress={setSoleado}>
          <Text style={styles.emoji}>☀️</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.boton} onPress={setTormenta}>
          <Text style={styles.emoji}>⛈️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imgCont}>
        <TouchableOpacity style={styles.boton} onPress={setNublado}>
          <Text style={styles.emoji}>🌥️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={setLloviendo}>
          <Text style={styles.emoji}>🌦️</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.texto}>Temperatura: {temp}°C</Text>

      <View style={styles.ciudad}>
        <Text style={styles.ciudadLabel}>Ciudad: </Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bkgImg: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%"
  },
  imgCont: {
    flexDirection: "row",
    alignItems: "center",
    height: "auto"
  },
  boton: {
    backgroundColor: "#425796",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    padding: 20,
  },
  texto: {
    fontWeight: "bold",
    fontSize: 30
  },
  emoji: {
    fontSize: 40,
  },
  ciudad: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    backgroundColor: "#d7d7d77a",
    width: "30%",
    borderRadius: 10,
    marginLeft: 7,
    color: "black"
  },
  ciudadLabel: {
    fontSize: 20
  }
});
