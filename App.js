import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

var express = require('express')
var app = express()


app.get('/',(req,res) => {
  res.send('hello world')
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
