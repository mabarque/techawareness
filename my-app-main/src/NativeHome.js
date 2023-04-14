import React from 'react';
import { View, Text,Image, ScrollView, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const NativeHome = () => (
  <ScrollView style={styles.container} >
    <Image style={[styles.image, { width: windowWidth }]} source={require("./assets/t1.jpeg")} />
    <View style={styles.textContainer}>
      <Text style={styles.textHeader}>You are in home page from our Tech Awareness application</Text>
      <Text style={styles.text}>Our app offers a range of information on online safety, including device safety, online safety, tech-abuse, and IoT device safety. You can explore various pages to access interactive content and gain valuable knowledge about protecting yourself online. The "Identify the Abuse" page provides contact information for organizations that can offer further assistance if you or someone you know has experienced abuse. Use our app to learn and enhance your online safety. We encourage you to explore our app and make use of the resources provided to enhance your online safety.</Text>
    </View>
  </ScrollView>
);

const styles = {
  container: {
    flex: 1,
  },
  image: {
  height:300,
  },
  textContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader:{
    fontFamily:'Helvetica',
    fontWeight: 'bold',
    fontSize:20,
    padding: 15,
    marginTop:-10,
  },
  text:{
    fontFamily:'Helvetica',
    fontSize:16,
    marginTop:-40,
    padding:40
  }
};
export default NativeHome;