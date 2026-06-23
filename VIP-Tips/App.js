import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [check, setCheck] = useState(null);
  const [disc, setDisc] = useState(null);
  const [tip, setTip] = useState(null);
  const [tipTotal, setTipTotal] = useState(null);
  const [billTotal, setBillTotal] = useState(null);

  const billCalc = (ch, di, ti) => {
    var discount = 1-(di/100);
    var tip = ti/100;
    var billOrigin = (ch / discount);
    var tipTotal = (billOrigin * tip);
    var billTotal = (ch / 1) + tipTotal;
    setTipTotal(tipTotal.toFixed(2));
    setBillTotal(billTotal.toFixed(2));
  }

  const openMap = async () => {
    await Linking.openURL("https://vipsanmiguel.com/map/");
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image source={require("./assets/logo.png")} style={styles.img}></Image>
      </View>
      <Text style={styles.label}>Enter check amount:</Text>
      <TextInput
        style={styles.input}
        value={check}
        onChangeText={setCheck}
        placeholder='0'
      />
      <Text style={styles.label}>Enter discount:</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={[styles.option, disc === 5 && styles.selectedOption]} onPress={() => setDisc(5)}>
          <Text style={[styles.optionText, disc === 5 && styles.selectedText]}>5%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, disc === 10 && styles.selectedOption]} onPress={() => setDisc(10)}>
          <Text style={[styles.optionText, disc === 10 && styles.selectedText]}>10%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, disc === 12 && styles.selectedOption]} onPress={() => setDisc(12)}>
          <Text style={[styles.optionText, disc === 12 && styles.selectedText]}>12%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, disc === 15 && styles.selectedOption]} onPress={() => setDisc(15)}>
          <Text style={[styles.optionText, disc === 15 && styles.selectedText]}>15%</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Enter tip:</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={[styles.option, tip === 10 && styles.selectedOption]} onPress={() => setTip(10)}>
          <Text style={[styles.optionText, tip === 10 && styles.selectedText]}>10%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, tip === 15 && styles.selectedOption]} onPress={() => setTip(15)}>
          <Text style={[styles.optionText, tip === 15 && styles.selectedText]}>15%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, tip === 18 && styles.selectedOption]} onPress={() => setTip(18)}>
          <Text style={[styles.optionText, tip === 18 && styles.selectedText]}>18%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, tip === 20 && styles.selectedOption]} onPress={() => setTip(20)}>
          <Text style={[styles.optionText, tip === 20 && styles.selectedText]}>20%</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resContainer}>
        <TouchableOpacity style={styles.button} onPress={() => billCalc(check, disc, tip)}>
          <Text style={styles.btnText}>CALCULATE</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Tip total: ${tipTotal}</Text>
        <Text style={styles.label}>Bill total: ${billTotal}</Text>
      </View>

    <View style={styles.mapContainer}>
      <TouchableOpacity style={styles.map} onPress={() => openMap()}>
        <Text style={styles.btnText}>Restaurant map</Text>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  resContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  mapContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    marginTop: 10,
    marginBottom: 40
  },
  imgView: {
    width: "100%",
    height: "auto",
    marginBottom: "5%",
    alignItems: "center",
    marginTop: 30
  },
  img: {
    resizeMode: "contain",
  },
  label: {
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 16,
    fontSize: 16,
    color: '#000000',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 10,
    width: "60%",
    fontWeight: '600',
    color: '#164f1c',
    borderWidth: 2,
    borderColor: '#327435',
  },
  option: {
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    margin: 6,
    paddingHorizontal: 14,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  selectedOption: {
    backgroundColor: "#327435",
    borderColor: "#164f1c",
    shadowOpacity: 0.3,
    elevation: 4,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },
  selectedText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  button: {
    marginTop: "6%",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: "#19441c",
  },
  btnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
  },
  map: {
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: "#327435",
  },
});
