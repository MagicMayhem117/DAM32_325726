import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ aprobado, setAprobado ] = useState(false);
  const [ mensaje, setMensaje ] = useState("");

  const checkInputs = () => {

    if (email.includes('@') && !(password.length < 6)) {
      setAprobado(true);
      if (email === "admin@test.com" && password === "123456") {
        setMensaje("¡Bienvenido!");
      } else {
        setMensaje("Credenciales incorrectas");
      }
    } else {
      setMensaje("Correo debe incluir '@', contraseña debe de tener 6+ caracteres");
      return;
    }

    setTimeout(() => {
      setAprobado(false);
      setEmail("");
      setPassword("");
      setMensaje("");
    }, 2000);
  }

  return (
    <View style={styles.container}>
      {!aprobado && (
        <View style={styles.mainCont}>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <TextInput style={styles.input} placeholder='Correo' value={email} onChangeText={setEmail}></TextInput>
          <TextInput style={styles.input} placeholder='Contraseña' value={password} secureTextEntry onChangeText={setPassword}></TextInput>
          <TouchableOpacity style={styles.boton} onPress={checkInputs}>
            <Text style={styles.botonText}>Login</Text>
          </TouchableOpacity>
          {mensaje && !aprobado && (
            <Text style={styles.error}>{mensaje}</Text>
          )}
        </View>
      )}
      {aprobado && (
        <View style={styles.successCont}>
          <Text style={styles.success}>{mensaje}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainCont: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "50",
  },
  input: {
    width: "70%",
    height: "auto",
    marginBottom: "30",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  boton: {
    backgroundColor: "blue",
    padding: "20",
    alignItems: "center",
    borderRadius: 5,
  },
  botonText: {
    color: "white",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: 15,
    fontSize: 14,
    textAlign: "center",
  },
  success: {
    fontSize: 18,
    fontWeight: "bold",
  },
  successCont: {
    alignItems: "center",
    justifyContent: "center",
  },
});
