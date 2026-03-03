import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [ email, setEmail ] = useState(" ");
  const [ password, setPassword ] = useState(" ");
  const [ aprovado, setAprovado ] = useState(false);

  const checkInputs = () => {
    if ((String(email).includes('@'))) {
      setAprovado(true);
    } else {
      setAprovado(true);
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput style={styles.input} placeholder='Correo' onChange={setEmail}></TextInput>
        <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry onChange={setPassword}></TextInput>
        <TouchableOpacity style={styles.boton} onPress={checkInputs}>
          <Text>Login</Text>
        </TouchableOpacity>

      {aprovado && (
        <View>
          <Text>{password.length}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "30",
  },
  input: {
    width: "40%",
    height: "auto",
    marginBottom: "20",
  },
  boton: {
    backgroundColor: "blue",
    padding: "20",
  }
});
