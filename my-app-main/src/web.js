import React, { useState } from "react";
import { View, Text, StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import styles from "./styles/Style.js";
import Identify from "./identify.js";
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
      MediaSafety: ":id/MediaSafety",
      Identifytheabuse: ":id/Identifytheabuse",
      IoTAwareness: ":id/IoTAwareness",
    },
  },
};

const PurpleHeader = () => {
  const [selectedTab, setSelectedTab] = useState("TechAwareness");
  const [fontLoaded, setFontLoaded] = useState(false);

  React.useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Nunito: require("./assets/fonts/Nunito.ttf"),
        Exo: require("./assets/fonts/Exo.ttf"),
        Anton: require("./assets/fonts/Anton-Regular.ttf"),
        GolosBold: require("./assets/fonts/GolosText-Bold.ttf"),
        GolosRegular: require("./assets/fonts/GolosText-Regular.ttf"),
        Lemon: require("./assets/fonts/Lemon-Regular.ttf"),
        fontcooper: require("./assets/fonts/Cooper.ttf"),
        Sans: require("./assets/fonts/Sans-regular.ttf"),
        Seriff: require("./assets/fonts/Seriff.ttf"),
        genevafont: require("./assets/fonts/Geneva.ttf"),
      });
      setFontLoaded(true);
    })();
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <StatusBar backgroundColor="#25064c" barStyle="light-content" />
      <Stack.Navigator>
        {selectedTab === "TechAwareness" && (
          <Stack.Screen
            name="TechAwareness"
            component={(props) => (
              <HomePage {...props} setSelectedTab={setSelectedTab} />
            )}
          />
        )}

        {selectedTab === "PersonalDeviceSecurity" && (
          <Stack.Screen
            name="PersonalDeviceSecurity"
            component={PersonalDeviceSecurity}
          />
        )}

        {selectedTab === "MediaSafety" && (
          <Stack.Screen
            name="MediaSafety"
            component={(props) => (
              <MediaSafety {...props} setSelectedTab={setSelectedTab} />
            )}
          />
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
            onPress={() => setSelectedTab("MediaSafety")}
          >
            Digital Security
          </Text>
        </View>

        <View style={styles.headerTabs}>
          <Text
            style={styles.headerText}
            onPress={() => setSelectedTab("Identifytheabuse")}
          >
            Spot the Signs
          </Text>
        </View>

        <View style={styles.headerTabs}>
          <Text
            style={styles.headerText}
            onPress={() => setSelectedTab("IoTAwareness")}
          >
            Internet of Things Safety
          </Text>
        </View>
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
    <DeviceSafe />
  </View>
);

const OnlineSafety = () => (
  <View style={styles.container}>
    <MediaSafety />
  </View>
);

const Identifytheabuse = () => (
  <View style={styles.container}>
    <Identify />
  </View>
);

const IoTAwareness = () => (
  <View style={styles.container}>
    <IoT />
  </View>
);

export default PurpleHeader;
