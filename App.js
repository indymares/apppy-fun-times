import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const COLORS = ['red', 'blue', 'green', 'orange', 'yellow']
const SIZES = [15, 32, 56, 72, 99]

export default function App() {
  const [color, setColor] = useState('purple')
  const [size, setSize] = useState(28)

  const getIndex = () => Math.floor(Math.random() * 5)
  const getAnotherIndex = () => Math.floor(Math.random() * 5)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.center}> 
        <Text style={{fontSize: size, fontWeight: "bold", color: color}}>Hello!</Text>
        <Text style={{fontSize: size, fontWeight: "bold", color: color}}>THIS IS AWESOME!</Text>
      </View>
      
      <View>
        <Button
          title="Press me"
          color="black"
          onPress={() => {
            setColor(COLORS[getIndex()])
            setSize(SIZES[getAnotherIndex()])
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
