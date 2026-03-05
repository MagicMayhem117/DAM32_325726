import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";

export default function App() {
  const [ time, setTime ] = useState(new Date());

  useEffect (() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);    
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clock</Text>
      <Text style={styles.clock}>México</Text>
      <Text style={styles.clock}>{time.toLocaleTimeString("en-us")}</Text>
      <Text style={styles.clock}>Londres, Inglaterra</Text>
      <Text style={styles.clock}>{time.toLocaleTimeString("en-us",{ timeZone: "Europe/London" })}</Text>
      <Text style={styles.clock}>Seoul, Corea del Sur</Text>
      <Text style={styles.clock}>{time.toLocaleTimeString("en-us",{ timeZone: "Asia/Seoul" })}</Text>
      <Text style={styles.clock}>Sydney, Australia</Text>
      <Text style={styles.clock}>{time.toLocaleTimeString("en-us",{ timeZone: "Australia/Sydney" })}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingTop: 60,
    paddingBottom: 60,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold"
  },
  clock: {
    fontSize: 30,
    fontWeight: "bold",
  }
});
