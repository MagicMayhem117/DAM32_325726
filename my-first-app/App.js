import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground style={styles.bgImage} source={require("./assets/img/owss.jpg")}>
      <Text style={styles.textTitle}>OUTER WILDS OST</Text>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/img/prahlow.jpg")}></Image>
                  <Text style={styles.textDescription}>Este album, creado por Andrew Prahlow, es mi OST favorito de todos los tiempos. 
          El juego por el cual fue creado, Outer Wilds, es un juego de exploración que te provoca contemplar la existencia, 
          nuestro lugar en el universo, y cuándo las cosas llegan a su fin. Es una obra de arte, y la música que lo acompaña 
          me sigue provocando los mismos sentimientos.
        </Text>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d12e2e',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: "white",
    padding: 35,
    height: "auto",
    width: "100%",
    marginTop: "20%",
  },
  textTitle: {
    marginTop: "20%",
    fontSize: 35,
    fontWeight: "bold",
    color: "#d05e12",
    textAlign: "center",
  },
  contentContainer: {
    paddingHorizontal: 15,
    marginTop: "10%"
  },
  imageContainer: {
    height: "auto",
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
  bgImage: {
    height: "100%",
    width: "100%"
  },
  textDescription: {
    fontSize: 16,
    color: "#414271",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "10%"
  }
});
