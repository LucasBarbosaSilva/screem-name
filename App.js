import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import selfie from './assets/IMG-20191229-WA0012.jpg';

export default function App() {
  var data = new Date;
  var dia = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear();
  var str_data = dia + "/" + mes +"/"+ ano;
  var hora = data.getHours();
  var min = data.getMinutes();
  var seg = data.getSeconds();
  var str_hora = hora + ":" + min + ":" + seg;
  
  return (
    <View style={styles.container}>
      <Image source={selfie} style={styles.image}></Image>
      <Text style={styles.text} >My name is: Lucas Barbosa Leite Silva</Text>
      <Text style={styles.text}>My registration: 2017312820 </Text>
      <Text style={styles.text}>Data atual: {str_data} </Text>
      <Text style={styles.text}>Hora atual: {str_hora} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginLeft: 50,
    justifyContent: 'center',
    
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50
  },
  text: {
    fontSize: 20
  }
});
