import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles2 from "./styles/Style.js";

const IoT = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState("");

  const togglePopup = (text) => {
    setPopupText(text);
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.textContainer}>
          <Text style={styles.bannerText}>
          Exploring the World of IoT Devices
          </Text>
          <Image source={require("./assets/bulbicon.png")} style={styles.imageicon} />
          <Text style={styles.subText}>
          IoT devices offer convenience and automation in various aspects of our lives, but they also present security risks and can be misused for domestic abuse or harassment. It's crucial to be aware of these risks and learn how to protect your privacy and security with our interactive home featuring common IoT devices.</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.imageContainer}>
        <Text style={styles.title}>
          Try our interactive home!
        </Text>
        <Image source={require("./assets/home12.jpeg")} style={styles.image} />
        <TouchableOpacity
          style={[styles.popupButton, { top: "70%", left: "5%" }]}
          onPress={() =>
            togglePopup(
              "Ring Doorbell  is a smart doorbell that uses a built-in camera and motion sensors to detect activity at your front door. The device allows you to monitor and communicate with visitors via a smartphone app from anywhere, making it a popular choice for home security. However, Ring Doorbell can also be used dangerously. Hackers can exploit vulnerabilities in the device to gain access to your home network, steal personal information or even disable the security system altogether. In addition to the concerns mentioned above, an abusive partner could also use a Ring Doorbell to control and monitor your activities as a form of abuse. They could remotely access the device to watch your comings and goings, listen to your conversations, or even prevent you from leaving the house by denying access to the front door. This type of abuse can be difficult to detect and may cause significant emotional distress. \nThe device can be used for surveillance, raising concerns about privacy violations as well.\n\nHere are some ways to protect yourself from Ring Doorbell:\n\n- Change the default password and use a strong, unique password.\n- Enable two-factor authentication to add an extra layer of security to your account.\n- Keep your device's software updated with the latest security patches and firmware updates.\n- Be mindful of what you say near your Ring Doorbell, as it can record audio as well as video.\n- Consider adjusting the device's motion sensors to avoid capturing footage beyond your property.\n- Regularly check the app's activity history to ensure there are no unauthorized actions.\n- Disable features such as sharing your videos on social media, as this can compromise your privacy.\nFinally, if you suspect that your Ring Doorbell is being used to harm or control you, contact the authorities and seek help from a trusted support network.a"
            )
          }
        >
          <Image
            source={require("./assets/ring.png")}
            style={styles.popupImage}
          />
        </TouchableOpacity>
        {isPopupVisible && (
          <View style={styles.popupContainer}>
            <View style={styles.popupContent}>
              <Text style={styles.popupText}>{popupText}</Text>
              <TouchableOpacity
                onPress={() => togglePopup("")}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <TouchableOpacity
          style={[styles.popupButton, { top: "70%", left: "45%" }]}
          onPress={() =>
            togglePopup(
              "Amazon Alexa is a virtual assistant that uses voice recognition technology to perform various tasks, such as playing music, providing weather updates, and controlling smart home devices. While Alexa can be useful, it can also be used dangerously. For example, hackers can exploit vulnerabilities in the device to access personal information or control smart home devices. Additionally, Alexa can be used for tech abuse, such as monitoring conversations, tracking movements, or sending threatening messages. \n\n Here are some ways to protect yourself from Amazon Alexa: \n\n - Change the default password and use a strong, unique password. \n - Enable two-factor authentication to add an extra layer of security to your account. \n - Regularly check the activity history to ensure there are no unauthorized actions. \n - Disable features such as voice purchasing, drop-in, and calling/messaging, as these can be used to gain access to your Alexa device. \n - Keep your device's software updated with the latest security patches and firmware updates. \n - Be mindful of what you say near your Alexa device and consider turning off the microphone when not in use. \n - Consider using a physical cover for your device's camera to prevent any unauthorized access. \nFinally, if you suspect that your Alexa device is being used to harm or control you, contact the authorities and seek help from a trusted support network."
            )
          }
        >
          <Image
            source={require("./assets/alexa.png")}
            style={[styles.popupImage, { width: 100, height: 100 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.popupButton, { top: "45%", left: "40%" }]}
          onPress={() =>
            togglePopup(
              "A smart thermostat  is a device that connects to the internet and can be controlled remotely using a smartphone app or voice commands. It allows you to adjust the temperature of your home from anywhere, making it convenient and energy-efficient. However, a smart thermostat can also be used dangerously. Hackers can exploit vulnerabilities in the device's software or gain access to your home network to control your thermostat, potentially causing damage to your HVAC system, wasting energy, or even gaining access to other smart devices in your home. Additionally, some smart thermostats may collect data about your daily routine and energy usage, raising concerns about privacy violations.\n\nIn addition to these concerns, an abusive partner could use a smart thermostat to control your environment as a form of abuse. They could remotely adjust the temperature to uncomfortable levels, turn off the heat or air conditioning, or use the device's motion sensors to monitor your movements and activities. This type of abuse can be difficult to detect and may lead to physical discomfort, emotional distress, or financial burdens.\n\nHere are some ways to protect yourself from the dangers of a smart thermostat, including potential abuse:\n\n- Change the default password and use a strong, unique password.\n- Keep your device's software updated with the latest security patches and firmware updates.\n- Use a secure Wi-Fi network and enable two-factor authentication to add an extra layer of security to your account.\n- Review the privacy policy of your smart thermostat and disable any features that collect unnecessary data.\n- Be cautious when granting access to third-party apps or services that connect to your smart thermostat.\n- Monitor your energy usage and temperature settings to detect any unusual activity.\nFinally, if you suspect that your smart thermostat is being used to harm or control you, contact the authorities and seek help from a trusted support network."
            )
          }
        >
          <Image
            source={require("./assets/therm.png")}
            style={[styles.popupImage, { width: 100, height: 100 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.popupButton, { top: "71%", left: "16%" }]}
          onPress={() =>
            togglePopup(
              "A smart lock is a device that allows users to lock and unlock their doors remotely using a smartphone app or voice command. While smart locks can provide convenience and enhance home security, they can also be used dangerously. For example, hackers can exploit vulnerabilities in the device to gain access to your home network, steal personal information or even disable the lock altogether. Additionally, smart locks can be used for tech abuse, such as monitoring comings and goings, denying access to the home, or even stalking. Abusive partners can use smart locks to control and monitor their victims, causing emotional distress and fear. \n\nTo protect yourself from smart lock abuse, consider the following:\n\n- Use strong and unique passwords and change them frequently.\n- Enable two-factor authentication to add an extra layer of security.\n- Keep the lock's software up-to-date with the latest security patches and firmware updates.\n- Regularly check the app's activity history to detect any unauthorized access or changes.\n- Disable remote access or voice control features if you don't need them.\n- Consider investing in a physical backup key or manual override mechanism in case of lock failure or power outage.\n Finally, if you suspect that your smart lock is being used to harm or control you, contact the authorities and seek help from a trusted support network."
            )
          }
        >
          <Image
            source={require("./assets/lock.png")}
            style={[styles.popupImage, { width: 160, height: 160 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.popupButton, { top: "70%", left: "35%" }]}
          onPress={() =>
            togglePopup(
              "Smart TVs are internet-connected televisions that offer features such as streaming services, apps, and web browsing. While smart TVs can be convenient, they can also be used dangerously. For example, hackers can exploit vulnerabilities in the device to gain access to personal information or control the TV remotely. Additionally, smart TVs can be used for tech abuse, such as monitoring what you watch, tracking your viewing history, or even displaying threatening messages. An abusive partner could also use a smart TV to control and monitor your activities as a form of abuse. They could remotely access the device to watch your viewing habits, listen to your conversations, or even prevent you from changing the channel.\n\nHere are some ways to protect yourself from a smart TV: \n\n- Keep your TV's software updated with the latest security patches and firmware updates. \n- Change the default password and use a strong, unique password. \n- Disable features such as voice recognition, automatic content recognition, and data collection. \n- Be cautious when downloading and installing third-party apps on your TV. \n- Regularly check the TV's settings and activity history to ensure there are no unauthorized actions.\nFinally,if you suspect that your smart TV is being used to harm or control you, contact the authorities and seek help from a trusted support network. "
            )
          }
        >
          <Image
            source={require("./assets/tv.png")}
            style={[styles.popupImage, { width: 80, height: 80 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.popupButton, { top: "60%", left: "75%" }]}
          onPress={() =>
            togglePopup(
              "A smart watch is a wearable device that offers features beyond telling time, such as fitness tracking, message notifications, and phone calls. While smartwatches can be beneficial, they can also be used dangerously. For instance, hackers can exploit vulnerabilities in the device to access sensitive data, such as location or health information. Moreover, smartwatches can be used for tech abuse, such as tracking one's movements or monitoring messages and calls. If a partner has access to the smartwatch, they can use it for abusive purposes, such as controlling or monitoring the wearer. \n\nHere are some ways to protect yourself from smartwatch abuse:\n\n- Use a strong, unique passcode to lock the device.\n- Turn off unnecessary features like location tracking or message notifications.\n- Keep your device's software updated with the latest security patches and firmware updates.\n- Be cautious of granting permissions to third-party apps, as they may access sensitive information.\nFinally,if you suspect that your smartwatch is being used to harm or control you, contact the authorities and seek help from a trusted support network."
            )
          }
        >
          <Image
            source={require("./assets/watch.png")}
            style={[styles.popupImage, { width: 170, height: 170 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.popupButton, { top: "50%", left: "20%" }]}
          onPress={() =>
            togglePopup(
              "A smart plug is a device that can be inserted into a standard electrical outlet and then allows you to control the power to that outlet using an app or voice commands. While smart plugs can be useful, they can also be used dangerously. For example, hackers can exploit vulnerabilities in the device to access personal information or control connected devices. Additionally, a partner who has access to the smart plug can use it for tech abuse, such as turning off power to appliances or using it as a surveillance device. \n\nHere are some ways to protect yourself from smart plug abuse: \n\n- Use a strong, unique password for the device and the associated app. \n- Keep the firmware of the smart plug updated with the latest security patches. \n- Disable remote access to the smart plug if you don't need it. \n- Regularly check the smart plug's activity history for any unauthorized actions. \n- Consider using a separate network for your smart home devices to limit access to personal information. \nFinally if you suspect that your smart plug is being used to harm or control you, contact the authorities and seek help from a trusted support network."
            )
          }
        >
          <Image
            source={require("./assets/plug.png")}
            style={[styles.popupImage, { width: 180, height: 180 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.popupButton, { top: "75%", left: "60%" }]}
          onPress={() =>
            togglePopup(
              "A CCTV (Closed Circuit Television) camera is a surveillance device that captures and records footage of a specific area or space. While CCTV cameras can be useful for deterring crime and enhancing security, they can also be used dangerously. For example, hackers can exploit vulnerabilities in the device to access live footage or stored recordings. Moreover, in a domestic setting, a partner can use CCTV cameras for tech abuse, such as monitoring and controlling the movements of the other partner, tracking who they talk to, and when they come and go. \n\nHere are some ways to protect yourself from CCTV camera abuse:\n\n- Look for cameras: Check your home thoroughly for any hidden cameras, including in areas like the bedroom, bathroom, and dressing room. Look for small, inconspicuous objects like smoke detectors or light bulbs, which may be fitted with a camera.\n- Disable or cover the cameras: If you find any cameras, disable them by unplugging them or covering them with tape or a cloth. If you are unable to do this yourself, seek the help of a trusted friend, family member, or professional.\n- Change the default password and use a strong, unique password.\n- Regularly check the activity history and footage to ensure there are no unauthorized actions.\n- Disable remote access to the device unless absolutely necessary.\n- Keep your device's software updated with the latest security patches and firmware updates.\n- Be aware of the camera's field of view and ensure that there are no blind spots.\nFinally, if you suspect that you are being monitored or controlled through a CCTV camera, contact the authorities and seek help from a trusted support network. "
            )
          }
        >
          <Image
            source={require("./assets/cctv.png")}
            style={[styles.popupImage, { width: 180, height: 180 }]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles2.bottomHeader}>
        <Text style={styles2.bottomHeaderText}>
          Copyright © 2023 DarkSide. All rights reserved.
        </Text>
        <View style={styles2.socialMediaIcons}></View>
      </View>
    </View>
  );
};
export default IoT;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    fontSize: 20,
    lineHeight: 30,
    color: 'white',
    fontFamily: 'Exo',
    width: '60%',

  },
  banner: {
    width: "100%",
    height: 500,
    backgroundColor: "#af6af1",
  },
  bannerImage: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Change this to 'flex-start' // Change paddingRight to paddingLeft
  },
  bannerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 70,
    lineHeight: 60,
    color: 'white',
    fontFamily: 'Nunito',
    width: '70%',
  },
  
  explain: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 1200,
    height: 650,
    resizeMode: "contain",
    zIndex: 0,
    marginTop: '2%',
    marginBottom:"8%"
  },
  imageicon: {
    width: '30%', // Adjust this value to resize the icon
    height: '30%', // Adjust this value to resize the icon
    resizeMode: "contain",
    zIndex: 0,
    alignSelf: 'center', // Centers the icon horizontally
  },
  imageContainer: {
    position: "relative",
  },
  title:{
    marginTop: '10%',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'GolosBold',
},
  popupText: {
    fontSize: 16, // Adjust the font size
    color: '#333333', // Adjust the text color
    fontFamily: 'Exo', // Change the font family to your preferred font
    textAlign: 'left', // Adjust the text alignment

  },
  popupButton: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: "#c0aee0",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // add this to make the buttons render on top of the popup container
  },

  popupImage: {
    width: 180,
    height: 180,
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
    backgroundColor: '#f0f0f0',
    padding: '5%',
    zIndex: 1,
    width: '100%', // Control the width of the pop-up
    height: '70%', // Control the height of the pop-up
    borderRadius: 10, // Add rounded corners to the pop-up
    justifyContent: 'center',
    alignItems: 'center',

    
  },
  closeButton: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '10%', // adjust the width as needed
    alignSelf: "center",
  },

  closeButtonText: 
  {
    textAlign: 'center',
    color: "#fff",
    fontWeight: "bold",
  },
};

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
