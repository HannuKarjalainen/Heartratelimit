import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculateHeartRateLimits = () => {
    const ageNumber = parseInt(age);
    if (!isNaN(ageNumber)) {
      const lower = (220 - ageNumber) * 0.65;
      const upper = (220 - ageNumber) * 0.85;
      setLowerLimit(lower.toFixed(0));
      setUpperLimit(upper.toFixed(0));
    } else {
      setLowerLimit(null);
      setUpperLimit(null);
      alert('Please enter a valid age');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        style={styles.field} 
        placeholder="0"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="decimal-pad"
      />
      <Text>Limits</Text>
      <Text style={styles.field} >{lowerLimit}-{upperLimit}</Text>
      <Button title="Calculate" onPress={calculateHeartRateLimits} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 30,
    margin: 8,
  },
  field:{
    marginTop: 8,
    marginBottom: 8,
  }
});
