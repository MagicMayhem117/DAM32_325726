import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
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
    var tipTotal = (ch * tip);
    var discTotal = (ch * discount);
    setTipTotal(tipTotal);
    setBillTotal(tipTotal + discTotal);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter check amount:</Text>
      <TextInput
        style={styles.input}
        value={check}
        onChangeText={setCheck}
        placeholder='0'
      />
      <Text style={styles.label}>Enter discount:</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => setDisc(5)}>
          <Text>5%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => setDisc(10)}>
          <Text>10%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => setDisc(12)}>
          <Text>12%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => setDisc(13)}>
          <Text>13%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => setDisc(15)}>
          <Text>15%</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Enter tip:</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => setTip(10)}>
          <Text>10%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => setTip(15)}>
          <Text>15%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => setTip(18)}>
          <Text>18%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => setTip(20)}>
          <Text>20%</Text>
        </TouchableOpacity>
      </View>
      <Button
        style={styles.button}
        title="Calculate"
        onPress={() => billCalc(check, disc, tip)}
      />
      <Text style={styles.label}>Tip total: {tipTotal}</Text>
      <Text style={styles.label}>Bill total: {billTotal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e7427',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f8f9fd78',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    width: "40%"
  },
  option: {
    borderRadius: 5,
    backgroundColor: "#efefef",
    margin: 5,
    width: "10%",
    height: "80%",
    alignItems: "center"
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10%"
  },
  button: {
    marginTop: "6%",
    borderRadius: 5
  }
});
