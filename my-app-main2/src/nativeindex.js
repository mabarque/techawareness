import React, { useState } from "react";
import {View, Text, Image, StatusBar, TouchableOpacity, StyleSheet, SafeAreaView,} from "react-native";
import { NavigationContainer, SplashScreen } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import Quiz from "./checklist.js";
import DeviceQuiz from "./deviceonlinesafety.js";
import HomePage from "./NativeHome.js";
import IoTNative from "./iotnative.js";
import OnlineNative from "./onlinenative.js";

const Stack = createStackNavigator();

const linking = {
  prefixes: ["https://example.com", "myapp://"],
  config: {
    screens: {
      TechAwareness: "",
      PersonalDeviceSecurity: ":id/personal-device-security",
      OnlineSafety: "id/iotnative",
      Identifytheabuse: ":id/Identifytheabuse",
      IoTAwareness: "id/iotnative",
    },
  },
};

const PurpleHeader = () => {
  const [selectedTab, setSelectedTab] = useState("TechAwareness");
  const [fontLoaded, setFontLoaded] = useState(false);

  React.useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Nunito: require("./assets/fonts/Nunito.ttf"),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    // Render a loading message or an empty view while the font is loading
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking} fallback={SplashScreen}>
      <StatusBar backgroundColor="#25064c" barStyle="light-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: "#25064c" }} />
      <Stack.Navigator>
        {selectedTab === "TechAwareness" && (
          <Stack.Screen name="Tech Awareness" component={TechAwareness} />
        )}
        {selectedTab === "PersonalDeviceSecurity" && (
          <Stack.Screen
            name="PersonalDeviceSecurity"
            component={PersonalDeviceSecurity}
          />
        )}
        {selectedTab === "OnlineSafety" && (
          <Stack.Screen name="Online Safety" component={OnlineSafety} />
        )}
        {selectedTab === "Identifytheabuse" && (
          <Stack.Screen name="Identify the Abuse" component={Identifytheabuse} />
        )}
        {selectedTab === "IoTAwareness" && (
          <Stack.Screen name="IoT Awareness" component={IoTAwareness} />
        )}
      </Stack.Navigator>

      <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setSelectedTab("PersonalDeviceSecurity")}
          >
            <Image source={require("./mainImage/PhysicalSec.png")} style={styles.headerImage} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setSelectedTab("OnlineSafety")}
          >
            <Image source={require("./mainImage/SocialMedia.png")} style={styles.headerImage} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setSelectedTab("Identifytheabuse")}
          >
            <Image
              source={require("./mainImage/IdentifyingAb.png")}
              style={styles.headerImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setSelectedTab("IoTAwareness")}
          >
            <Image source={require("./mainImage/IoT.png")} style={styles.headerImage} />
          </TouchableOpacity>
        </View>
    </NavigationContainer>
  );
};

const TechAwareness = () => (
  <View style={styles.container}>
    <HomePage />
  </View>
);

const PersonalDeviceSecurity = () => (
  <View style={styles.container}>
    <DeviceQuiz />
  </View>
);

const OnlineSafety = () => (
  <View style={styles.container}>
    <OnlineNative />
  </View>
);

const Identifytheabuse = () => (
  <View style={styles.container}>
    <Quiz />
  </View>
);

const IoTAwareness = () => (
  <View style={styles.container}>
    <IoTNative />
  </View>
);

export default PurpleHeader;

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#25064c',
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },

  headerButton: {
    padding: 10,
    marginBottom: 15,

  },

  headerImage: {
    width: 60,
    height: 80,
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
});
