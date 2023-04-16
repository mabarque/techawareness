import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import styles from "./styles/Style.js";

const HomePage = ({ setSelectedTab }) => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('./assets/homepic.jpeg')}
        />
        <Text style={styles.headerupMiddle}>
          Rising Technology-Facilitated Abuse and the Alarming Statistics of
          Violence Against Women
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={styles.icon1}
            source={require('./assets/icon1.png')}
          />
          <Text style={styles.headerMiddle}>
          97% of domestic violence victim advocates report that their clients have experienced harassment, monitoring, and/or threats using technology (source: 2018 NNEDV Technology Summit Report)
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={styles.icon2}
            source={require('./assets/icon1.png')}
          />
          <Text style={styles.headerLow}>
          1 in 7 women have reported being threatened with physical harm via technology (source: 2019 Norton LifeLock Cyber Safety Insights Report)
          </Text> 
        </View>
        <TouchableOpacity style={styles.button2} onPress={() => Linking.openURL('https://nnedv.org/content/internet-computer-safety/')}>
           <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>      
      </View>
      <View style={styles.lowerView}>
        <View style={styles.imageTextContainer}>
          <View style={styles.imageTextWrapper}>
            <Image
              style={styles.smallImage}
              source={require("./assets/fourthimage.jpeg")}
            />
            <Text style={styles.imageText}>Protecting Yourself Online:</Text>
            <Text style={styles.imageTextBelow}>
              Tips and Strategies for a Safe Online Presence
            </Text>
            <TouchableOpacity
    style={styles.button}
    onPress={() => setSelectedTab("MediaSafety")}
  >
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>

          </View>
          <View style={styles.imageTextWrapper}>
            <Image
              style={styles.smallImage}
              source={require("./assets/second.jpeg")}
            />
            <Text style={styles.imageText}>
              Recognizing the Signs of Abuse:
            </Text>
            <Text style={styles.imageTextBelow}>
              A Guide for Women and Those Close to Them
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => setSelectedTab("Identifytheabuse")}>
              <Text style={styles.buttonText}>Learn More</Text>
              
            </TouchableOpacity>
          </View>
          <View style={styles.imageTextWrapper}>
            <Image
              style={styles.smallImage}
              source={require("./assets/thirdimage.jpeg")}
            />
            <Text style={styles.imageText}>Introduction to IoT Devices:</Text>
            <Text style={styles.imageTextBelow}>
              Understanding and Identifying Connected Devices
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => setSelectedTab("IoTAwareness")}>
              <Text style={styles.buttonText}>Learn More</Text>
              
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomHeader}>
        <Text style={styles.bottomHeaderText}>
          Copyright © 2023 DarkSide. All rights reserved.
        </Text>
        <View style={styles.socialMediaIcons}></View>
      </View>
    </ScrollView>
  </View>
);

export default HomePage;
