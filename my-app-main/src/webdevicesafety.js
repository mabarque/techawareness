import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Alert
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"; // Make sure to import this
import styles2 from "./styles/Style.js";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const DeviceSafe = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentPopupText, setCurrentPopupText] = useState("");

  const togglePopup = (text) => {
    setCurrentPopupText(text);
    setIsPopupVisible(!isPopupVisible);
  };

  const infoText = {
    Iphone: [
      "iPhone Safety Settings",
      "Passcode/Touch ID/Face ID: Go to Settings > Face ID & Passcode (or Touch ID & Passcode, depending on your device). Here you can set up a strong passcode and enable Touch ID or Face ID.",
      "Location Services: Go to Settings > Privacy > Location Services. Here you can see a list of apps that have requested access to your location information. You can choose to enable or disable location services for each app individually.",
      "App Permissions: When downloading/installing an app, grant permissions. Check granted permissions by going to Settings > Privacy. See which apps access contacts, camera, microphone, and sensitive info. Revoke permissions for individual apps.",
      "iCloud Settings: Go to Settings > [Your Name] > iCloud. Here you can enable two-factor authentication and manage which apps and data are backed up to iCloud by going to iCloud > Manage Storage.",
      'Siri Settings: Go to Settings > Siri & Search. Here you can adjust settings related to Siri, including whether "Hey Siri" is enabled, whether Siri can be accessed from the lock screen, and whether Siri can suggest app actions.',
      "Automatic Downloads: Go to Settings > App Store. Here you can disable automatic downloads of apps, music, and books.",
    ],
    Android: [
      "Android Safety Settings",
      "Passcode/Touch ID/Face ID: Go to Settings > Security > Screen lock. Here you can set up a strong passcode and enable Fingerprint or Face recognition.",
      "Location Services: Go to Settings > Location > App permission. Here you can see a list of apps that have requested access to your location information. You can choose to enable or disable location services for each app individually.",
      "App Permissions: When you download or install an app, you will be prompted to grant certain permissions. You can also check the permissions that have already been granted by going to Settings > Apps > App permissions. Here you can see which apps have access to your contacts, camera, microphone, and other sensitive information. You can choose to revoke permissions for individual apps.",
      "Google Settings: Go to Settings > Google. Here you can enable two-factor authentication and manage which apps and data are backed up to Google Drive by going to Backup & Restore.",
      'Google Assistant Settings: Go to Settings > Google > Account services > Search, Assistant & Voice > Google Assistant. Here you can adjust settings related to Google Assistant, including whether "Hey Google" is enabled, whether Google Assistant can be accessed from the lock screen, and whether Google Assistant can suggest app actions.',
      "Automatic Downloads: Go to Play Store > Settings. Here you can disable automatic downloads of apps, music, and books.",
    ],
    Windows: [
      "Windows Safety Settings",
      "Password protection: Go to Start menu > Settings > Accounts > Sign-in options. Here you can set up a strong password and enable Windows Hello (if available) for added security.",
      "Windows Firewall: Start > Settings > Update & Security > Windows Security > Firewall & network protection. Enable firewall to prevent unauthorized access.",
      "BitLocker: Go to Start menu > Settings > Update & Security > Windows Security > Device encryption. Here you can enable BitLocker to encrypt your data and prevent unauthorized access to your files.",
      "App permissions: When you download or install an app, you will be prompted to grant certain permissions. You can also check the permissions that have already been granted by going to Start menu > Settings > Privacy. Here you can see which apps have access to your contacts, camera, microphone, and other sensitive information. You can choose to revoke permissions for individual apps.",
      "Windows Update: Keep your system up-to-date with the latest security patches by going to Start menu > Settings > Update & Security > Windows Update. Make sure to regularly check for updates and install them.",
      "Antivirus: Windows Defender comes pre-installed on your device. To ensure it is running and up-to-date, go to Start menu > Settings > Update & Security > Windows Security > Virus & threat protection. You can also use third-party antivirus software for added protection.",
      "User Account Control: Go to Start menu > Settings > Privacy > User Account Control. Adjust the slider to choose the level of notification you want to receive when apps make changes to your computer.",
    ],
    MacOS: [
      "MacOS Safety Settings",
      "Password protection: Go to Apple menu > System Preferences > Users & Groups > Login Options. Here you can set up a strong password and enable Touch ID (if available) for added security.",
      "Firewall: Go to Apple menu > System Preferences > Security & Privacy > Firewall. Enable firewall to prevent unauthorized access.",
      "FileVault: Go to Apple menu > System Preferences > Security & Privacy > FileVault. Here you can enable FileVault to encrypt your data and prevent unauthorized access to your files.",
      "App permissions: When you download or install an app, you will be prompted to grant certain permissions. You can also check the permissions that have already been granted by going to Apple menu > System Preferences > Security & Privacy > Privacy. Here you can see which apps have access to your contacts, camera, microphone, and other sensitive information. You can choose to revoke permissions for individual apps.",
      "Software Update: Keep your system up-to-date with the latest security patches by going to Apple menu > System Preferences > Software Update. Make sure to regularly check for updates and install them.",
      "Antivirus: MacOS comes with built-in security features, but you can also use third-party antivirus software for added protection.",
      'Siri Settings: Go to Apple menu > System Preferences > Siri. Here you can adjust settings related to Siri, including whether "Hey Siri" is enabled, and whether Siri can suggest app actions.',
    ],
  };
  
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.bannerImageContainer}>
          <Image
            style={styles.bannerImage}
            source={require("./assets/ladyonphone.png")}
          />
          <Text style={styles.bannerTitle}>Device Safety</Text>
        </View>
  
        <View style={styles.blueBannerContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Why Device Safety is Important</Text>
            <Text style={styles.infoText}>
              Protecting your personal information and data is critical in
              today's digital age. With the increased use of smartphones,
              tablets, and other mobile devices, it is important to take steps
              to ensure the safety and security of your devices. From setting
              strong passwords to regularly updating your software, there are
              many ways to enhance your device safety and protect your personal
              information from cyber threats.
              {"\n"}
              {"\n"}Click on the icons below to learn more about securing your
              device based on its operating system.
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => togglePopup(infoText.Iphone.join('\n\n'))}>
              <Text style={styles.iconLabel}>IPHONES</Text>
              <Image
                style={styles.iconImage}
                source={require("./assets/appleicon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => togglePopup(infoText.Android.join('\n\n'))}>
              <Text style={styles.iconLabel}>ANDROIDS</Text>
              <Image
                style={styles.iconImage}
                source={require("./assets/androidicon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => togglePopup(infoText.Windows.join('\n\n'))}>
              <Text style={styles.iconLabel}>WINDOWS</Text>
              <Image
                style={styles.iconImage}
                source={require("./assets/windowsicon2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => togglePopup(infoText.MacOS.join('\n\n'))}>
              <Text style={styles.iconLabel}>MACBOOKS</Text>
              <Image
                style={styles.iconImage}
                source={require("./assets/macbook1.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
  
      {/* Popups */}
      {isPopupVisible && (
    <View style={styles.popupContainer}>
      <View style={styles.popupContent}>
        <Text style={styles.popupText}>{currentPopupText}</Text>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={togglePopup}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
  
      <View style={styles2.bottomHeader}>
        <Text style={styles2.bottomHeaderText}>
          Copyright © 2023 DarkSide. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
  
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bannerImageContainer: {
    width: "100%",
    alignItems: "center",
  },
  bannerImage: {
    width: screenWidth - 0.1,
    maxWidth: screenWidth,
    height: 400, // set the aspect ratio of the image
    resizeMode: "cover",
  },
  bannerTitle: {
    fontSize: 70,
    color: "white",
    fontWeight: "bold",
    position: "absolute", // position the text over the image
    top: "35%",
    left: "50%",
    position: "absolute",
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 75,
    marginVertical: 10,
    alignItems: "center",
  },

  iconImage: {
    marginTop: "-7%",
    width: 275,
    height: 275,
  },

  iconLabel: {
    textAlign: "center",
    marginTop: "1%",
    color: "white",
    marginLeft: "1%",
    fontSize: 25,
    fontFamily: "GolosBold",
  },

  blueBannerContainer: {
    zIndex: 1,
    backgroundColor: "#000033",
    height: "50%",
    marginTop: "5%",
    marginBottom: "8%",
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    overflow: "hidden",
  },
  infoContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  infoTitle: {
    fontSize: 35,
    marginTop: "5%",
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "GolosBold",
    marginLeft: "10%",
  },
  infoText: {
    fontSize: 25,
    color: "white",
    fontFamily: "Exo",
    marginTop: "2%",
    marginBottom: "3.5  %",
    width: "80%",
    marginLeft: "10%",
  },
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 2,
  },
  popupContent: {
    backgroundColor: "#f0f0f0",
    padding: "5%",
    zIndex: 1,
    width: "80%",
    height: "40%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
    width: "10%",
    alignSelf: "center",
    marginTop:"2.5%",
  },
  closeButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    
  },
  popupText: {
    fontSize: 16, // Adjust the font size
    color: '#333333', // Adjust the text color
    fontFamily: 'Exo', // Change the font family to your preferred font
    textAlign: 'left', // Adjust the text alignment

  },
  boldText: {
    fontWeight: "bold",
  },
});

export default DeviceSafe;

/*
        Nunito: require("../assets/fonts/Nunito.ttf"),
        Exo: require("../assets/fonts/Exo.ttf"),
        Anton: require("../assets/fonts/Anton-Regular.ttf"),
        GolosBold: require("../assets/fonts/GolosText-Bold.ttf"),
        GolosRegular: require("../assets/fonts/GolosText-Regular.ttf"),
        Lemon: require("../assets/fonts/Lemon-Regular.ttf"),
        fontcooper: require("../assets/fonts/Cooper.ttf"),
        Sans: require("../assets/fonts/Sans-regular.ttf"),
        Seriff: require("../assets/fonts/Seriff.ttf"),
        genevafont: require("../assets/fonts/Geneva.ttf")


*/
