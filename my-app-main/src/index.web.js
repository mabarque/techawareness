import React, { useState } from "react";
import { View, Text, StatusBar, Platform } from "react-native";
import {
  NavigationContainer,
  SplashScreen,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import styles from "./styles/Style.js";
import Quiz from "./checklist.js";
import DeviceSafe from "./webdevicesafety.js";
import MediaSafety from "./onlinesafety.js";
import HomePage from "./home.js";
import IoT from "./iot.js";

const Stack = createStackNavigator();

const linking = {
  prefixes: ["https://mychat.com", "mychat://"],
  config: {
    screens: {
      TechAwareness: "",
      PersonalDeviceSecurity: ":id/personal-device-security",
      OnlineSafety: ":id/OnlineSafety",
      Identifytheabuse: ":id/Identifytheabuse",
      IoTAwareness: ":id/IoTAwareness",
    },
  },
};


const PurpleHeader = () => {
  const [selectedTab, setSelectedTab] = useState("TechAwareness");
  const [fontLoaded, setFontLoaded] = useState(false);


 return (

    <NavigationContainer linking={linking}>
      <StatusBar backgroundColor="#25064c" barStyle="light-content" />
      <Stack.Navigator>
        {selectedTab === "TechAwareness" && (
          <Stack.Screen name="TechAwareness" component={TechAwareness} />
        )}
        {selectedTab === "PersonalDeviceSecurity" && (
          <Stack.Screen
            name="PersonalDeviceSecurity"
            component={PersonalDeviceSecurity}
          />
        )}
        {selectedTab === "OnlineSafety" && (
          <Stack.Screen name="OnlineSafety" component={OnlineSafety} />
        )}
        {selectedTab === "Identifytheabuse" && (
          <Stack.Screen name="Identifytheabuse" component={Identifytheabuse} />
        )}
        {selectedTab === "IoTAwareness" && (
          <Stack.Screen name="IoTAwareness" component={IoTAwareness} />
        )}
      </Stack.Navigator>

      <View style={styles.header}>
        <Text
          style={styles.headerTitle}
          onPress={() => setSelectedTab("TechAwareness")}
        >
          Tech Awareness
        </Text>

        <View style={styles.headerTabs}>
          <Text
            style={styles.headerText}
            onPress={() => setSelectedTab("PersonalDeviceSecurity")}
          >
            Personal Device Security
          </Text>
        </View>

        <View style={styles.headerTabs}>
          <Text
            style={styles.headerText}
            onPress={() => setSelectedTab("OnlineSafety")}
          >
            OnlineSafety
          </Text>
        </View>

        <View style={styles.headerTabs}>
          <Text
            style={styles.headerText}
            onPress={() => setSelectedTab("Identifytheabuse")}
          >
            Identifytheabuse
          </Text>
        </View>

        <View style={styles.headerTabs}>
          <Text
            style={styles.headerText}
            onPress={() => setSelectedTab("IoTAwareness")}
          >
            IoTAwareness
          </Text>
        </View>
      </View>
    </NavigationContainer>
  );
};

const TechAwareness = () => (
  <View style={styles.container}>
    <HomePage/>
  </View>
);

const PersonalDeviceSecurity = () => (
  <View style={styles.container}>
    <DeviceSafe/>
  </View>
);

const OnlineSafety = () => (
  <View style={styles.container}>
    <MediaSafety/>
  </View>
);

const Identifytheabuse = () => (
  <View style={styles.container}>
    <Quiz/>
  </View>
);

const IoTAwareness = () => (
  <View style={styles.container}>
    <IoT/>
  </View>
);

export default PurpleHeader;