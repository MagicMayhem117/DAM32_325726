import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [ mood, setMood ] = useState(5);
  const [ msg, setMsg ] = useState("Ánimo regular");
  const [ img, setImg ] = useState(require("./assets/img/regular.png"));

  useEffect (() => {
     if (mood < 3) {
      setMsg("Mal ánimo");
      setImg(require("./assets/img/mal.png"));
     } else if (mood < 7) {
      setMsg("Ánimo regular");
      setImg(require("./assets/img/regular.png"));
     } else {
      setMsg("Buen ánimo");
      setImg(require("./assets/img/buen.png"));
     }
  }, [mood]);

  const increaseMood = () => {
    if (mood < 10) {
      setMood(mood + 1);
    }
  }

  const decreaseMood = () => {
    if (mood > 0) {
      setMood(mood - 1);
    }
  }

  return (
    <ImageBackground source={img} resizeMode='fill' style={styles.bkgImg}>
      <TouchableOpacity style={styles.boton} onPress={increaseMood}>
        <Text>^</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{mood}</Text>
      <Text style={styles.texto}>{msg}</Text>
      <TouchableOpacity style={styles.boton} onPress={decreaseMood}>
        <Text>v</Text>
      </TouchableOpacity>
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
  boton: {
    backgroundColor: "#425796",
    width: "30%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
  texto: {
    fontWeight: "bold",
    fontSize: 30
  }
});
