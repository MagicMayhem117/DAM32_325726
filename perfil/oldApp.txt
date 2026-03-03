import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons"

export default function App() {
  const [seguidores, setSeguidores] = useState(793);
  const [seguido, setSeguido] = useState("Seguir");

  const handleSeguidores = () => {
    if (seguido == "Seguir") {
      setSeguidores(seguidores + 1);
      setSeguido("Seguido");
    } else {
      setSeguidores(seguidores - 1);
      setSeguido("Seguir");
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.header}>
        <View style={styles.nombreImg}>
          <View style={styles.contImg}>
            <Image style={styles.img} source={require("./assets/img/usuario.jpg")}></Image>
          </View>
          <View style={styles.contNom}>
            <Text style={styles.nombre}>Nombre</Text>
            <View style={styles.numSeguidores}>
              <Text style={styles.seguidoresNum}>{seguidores}</Text>
              <Text style={styles.seguidores}>Seguidores</Text>
            </View>
          </View>
        </View>
        <View style={styles.seguir}>
          <TouchableOpacity style={styles.seguirBtn} onPress={handleSeguidores}>
            <Text style={styles.verMasTxt}>{seguido}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={styles.playlists}>
        <Text style={styles.title}>Playlists</Text>

        <View style={styles.playlist}>
          <View style={styles.playlistImg}>
            <Image style={styles.pimg} source={require("./assets/img/ow.png")}></Image>
          </View>
          <View style={styles.playlistNom}>
            <Text style={styles.nombrePlaylist}>Outer Wilds</Text>
          </View>
        </View>

        <View style={styles.playlist}>
          <View style={styles.playlistImg}>
            <Image style={styles.pimg} source={require("./assets/img/mc.png")}></Image>
          </View>
          <View style={styles.playlistNom}>
            <Text style={styles.nombrePlaylist}>Minecraft</Text>
          </View>
        </View>

        <View style={styles.playlist}>
          <View style={styles.playlistImg}>
            <Image style={styles.pimg} source={require("./assets/img/mg.png")}></Image>
          </View>
          <View style={styles.playlistNom}>
            <Text style={styles.nombrePlaylist}>Me Gusta</Text>
          </View>
        </View>

      </View>
      <View style={styles.verMas}>
        <TouchableOpacity style={styles.verMasBoton}><Text style={styles.verMasTxt}>Ver todas las playlists</Text></TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Ionicons name="home" size={30} color="white"></Ionicons>
        <Ionicons name="search" size={30} color="white"></Ionicons>
        <Ionicons name="library" size={30} color="white"></Ionicons>
        <Ionicons name="person" size={30} color="white"></Ionicons>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#0a2811"
  },
  header: {
    height: "35%",
    flex: 1,
  },
  nombre: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    margin: 12,
    marginTop: 30
  },
  seguidores: {
    fontSize: 15,
    color: "gray",
    margin: 12
  },
  seguidoresNum: {
    fontSize: 15,
    color: "white",
    margin: 12,
    fontWeight: "bold"
  },
  numSeguidores: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  nombreImg: {
    flex: 1,
    flexDirection: "row",
    height: "60%",
  },
  contImg: {
    borderRadius: 80,
    height: "50%",
    width: "35%",
    marginTop: 70,
    marginLeft: 20
  },
  img: {
    height: "100%",
    width: "auto",
    borderRadius: 80,
    resizeMode: "cover"
  },
  pimg: {
    height: "100%",
    width: "auto",
    resizeMode: "contain"
  },
  contNom: {
    height: "55%",
    width: "45%",
    marginTop: 70,
    marginLeft: 30,
  },
  seguir: {
    width: "25%",
    height: "15%",
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  seguirBtn: {
    borderColor: "gray",
    padding: 5,
    borderRadius: 25,
    borderStyle: "solid",
    borderWidth: 2
  },
  playlists: {
    height: "35%",
  },
  playlistImg: {
    width: "30%",
    height: "100%",
  },
  playlistNom: {
    width: "70%",
    height: "100%",
  },
  nombrePlaylist: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    margin: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    margin: 12
  },
  playlist: {
    width: "80%",
    marginLeft: 20,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
  },
  verMas: {
    height: "10%",
    justifyContent: "top",
    alignItems: "center"
  },
  verMasBoton: {
    marginTop: 20,
    borderColor: "gray",
    padding: 10,
    borderRadius: 25,
    borderStyle: "solid",
    borderWidth: 2
  },
  verMasTxt: {
    color: "white",
    fontSize: 16
  },
  footer: {
    height: "15%",
    backgroundColor: "black",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "top",
    paddingTop: 20
  }
});
