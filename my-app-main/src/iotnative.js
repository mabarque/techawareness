import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const RoundedButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.roundedButton}>{children}</View>
    </TouchableOpacity>
  );
};
const DropdownButton = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <View style={styles.container}>
      <RoundedButton onPress={() => setShowInfo(!showInfo)} style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        <Text style={styles.title}>{title}</Text>
        <AntDesign name={showInfo ? "up" : "down"} size={20} color="#DDA0DD" />
      </RoundedButton>
      {showInfo && (
        <Text style={[styles.info, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}>
          {info}
        </Text>
      )}
    </View>
  );
};

const IoTNative = () => {
  return (
    <ScrollView style={styles.container}>
      <View >
        <Image source={require('./iotImage/iot.png')} style={styles.image}/>
      </View>
      <View style={styles.intro}>

      <Text style={styles.introText}>Learn how to protect your IoT devices.</Text>
      </View>
      <DropdownButton
        title="CCTV (Closed Circuit Television)"
        info={
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: 'bold' }}>A CCTV (Closed Circuit Television) camera</Text> is a surveillance device that captures and records footage of a specific area or space. While CCTV cameras can be useful for deterring crime and enhancing security, they can also be used dangerously. For example, hackers can exploit vulnerabilities in the device to access live footage or stored recordings. Moreover, in a domestic setting, a partner can use CCTV cameras for tech abuse, such as monitoring and controlling the movements of the other partner, tracking who they talk to, and when they come and go.{"\n\n"}
            <Text style={{ fontWeight: 'bold' }}>Here are some ways to protect yourself from CCTV camera abuse:</Text>{"\n"}
            - Look for cameras: Check your home thoroughly for any hidden cameras, including in areas like the bedroom, bathroom, and dressing room. Look for small, inconspicuous objects like smoke detectors or light bulbs, which may be fitted with a camera.{"\n"}
            - Disable or cover the cameras: If you find any cameras, disable them by unplugging them or covering them with tape or a cloth. If you are unable to do this yourself, seek the help of a trusted friend, family member, or professional.{"\n"}
            - Change the default password and use a strong, unique password.{"\n"}
            - Regularly check the activity history and footage to ensure there are no unauthorized actions.{"\n"}
            - Disable remote access to the device unless absolutely necessary.{"\n"}
            - Keep your device's software updated with the latest security patches and firmware updates.{"\n"}
            - Be aware of the camera's field of view and ensure that there are no blind spots.{"\n\n"}
            <Text style={{ fontStyle: 'italic' }}>Finally, if you suspect that you are being monitored or controlled through a CCTV camera, contact the authorities and seek help from a trusted support network.</Text>
          </Text>
        }
        />
      <DropdownButton
        title="Smart Plug"
        info={
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: 'bold' }}>A Smart Plug</Text> is a device that can be inserted into a standard electrical outlet and then allows you to control the power to that outlet using an app or voice commands. While smart plugs can be useful, they can also be used dangerously. For example, hackers can exploit vulnerabilities in the device to access personal information or control connected devices. Additionally, a partner who has access to the smart plug can use it for tech abuse, such as turning off power to appliances or using it as a surveillance device. {"\n\n"}
            <Text style={{ fontWeight: 'bold' }}>Here are some ways to protect yourself from smart plug abuse:</Text>{"\n"}
            - Use a strong, unique password for the device and the associated app.{"\n"}
            - Keep the firmware of the smart plug updated with the latest security patches.{"\n"}
            - Disable remote access to the smart plug if you don't need it.{"\n"}
            - Regularly check the smart plug's activity history for any unauthorized actions. {"\n"}
            - Consider using a separate network for your smart home devices to limit access to personal information.{"\n\n"}
            <Text style={{ fontStyle: 'italic' }}>Finally if you suspect that your smart plug is being used to harm or control you, contact the authorities and seek help from a trusted support network.</Text>
          </Text>
        }
      />
      <DropdownButton
        title="Smart Watch"
        info={
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: 'bold' }}>A smart watch </Text>is a wearable device that offers features beyond telling time, such as fitness tracking, message notifications, and phone calls. While smartwatches can be beneficial, they can also be used dangerously. For instance, hackers can exploit vulnerabilities in the device to access sensitive data, such as location or health information. Moreover, smartwatches can be used for tech abuse, such as tracking one's movements or monitoring messages and calls. If a partner has access to the smartwatch, they can use it for abusive purposes, such as controlling or monitoring the wearer. {"\n"}{"\n"}
            <Text style={{ fontWeight: 'bold' }}>Here are some ways to protect yourself from smartwatch abuse:</Text>{"\n"}
          - Use a strong, unique passcode to lock the device.{"\n"}
          - Turn off unnecessary features like location tracking or message notifications.{"\n"}
          - Keep your device's software updated with the latest security patches and firmware updates.{"\n"}
          - Be cautious of granting permissions to third-party apps, as they may access sensitive information.{"\n"}{"\n"}
          <Text style={{ fontStyle: 'italic' }}>Finally,if you suspect that your smartwatch is being used to harm or control you, contact the authorities and seek help from a trusted support network.</Text>
          </Text>
        }
      />
      <DropdownButton
        title="Smart TV"
        info={
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: 'bold' }}>Smart TVs</Text> are internet-connected televisions that offer features such as streaming services, apps, and web browsing. While smart TVs can be convenient, they can also be used dangerously. For example, hackers can exploit vulnerabilities in the device to gain access to personal information or control the TV remotely. Additionally, smart TVs can be used for tech abuse, such as monitoring what you watch, tracking your viewing history, or even displaying threatening messages. An abusive partner could also use a smart TV to control and monitor your activities as a form of abuse. They could remotely access the device to watch your viewing habits, listen to your conversations, or even prevent you from changing the channel.{"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold' }}>Here are some ways to protect yourself from a smart TV: </Text>{"\n"}
        - Keep your TV's software updated with the latest security patches and firmware updates. {"\n"}
        - Change the default password and use a strong, unique password.{"\n"}
        - Disable features such as voice recognition, automatic content recognition, and data collection. {"\n"}
        - Be cautious when downloading and installing third-party apps on your TV.{"\n"}
        - Regularly check the TV's settings and activity history to ensure there are no unauthorized actions.{"\n"}{"\n"}
        <Text style={{ fontStyle: 'italic' }}> Finally,if you suspect that your smart TV is being used to harm or control you, contact the authorities and seek help from a trusted support network.</Text>
      </Text>
        }
        />
      <DropdownButton
        title="Smart Lock"
        info={
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: 'bold' }}>A smart lock </Text>is a device that allows users to lock and unlock their doors remotely using a smartphone app or voice command. While smart locks can provide convenience and enhance home security, they can also be used dangerously. For example, hackers can exploit vulnerabilities in the device to gain access to your home network, steal personal information or even disable the lock altogether. Additionally, smart locks can be used for tech abuse, such as monitoring comings and goings, denying access to the home, or even stalking. Abusive partners can use smart locks to control and monitor their victims, causing emotional distress and fear. {"\n"}{"\n"}
            <Text style={{ fontWeight: 'bold' }}>To protect yourself from smart lock abuse, consider the following:</Text>{"\n"}
        - Use strong and unique passwords and change them frequently.{"\n"}
        - Enable two-factor authentication to add an extra layer of security.{"\n"}
        - Keep the lock's software up-to-date with the latest security patches and firmware updates.{"\n"}
        - Regularly check the app's activity history to detect any unauthorized access or changes.{"\n"}
        - Disable remote access or voice control features if you don't need them.{"\n"}
        - Consider investing in a physical backup key or manual override mechanism in case of lock failure or power outage.{"\n"}{"\n"}
        <Text style={{ fontStyle: 'italic' }}> Finally, if you suspect that your smart lock is being used to harm or control you, contact the authorities and seek help from a trusted support network.</Text>
      </Text>
        }
      />
      <DropdownButton
        title="Amazon Alexa"
        info={
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: 'bold' }}>Amazon Alexa  </Text>is a virtual assistant that uses voice recognition technology to perform various tasks, such as playing music, providing weather updates, and controlling smart home devices. While Alexa can be useful, it can also be used dangerously. For example, hackers can exploit vulnerabilities in the device to access personal information or control smart home devices. Additionally, Alexa can be used for tech abuse, such as monitoring conversations, tracking movements, or sending threatening messages. {"\n"}{"\n"}
            <Text style={{ fontWeight: 'bold' }}>Here are some ways to protect yourself from Amazon Alexa: </Text>{"\n"}
        - Change the default password and use a strong, unique password. {"\n"}
        - Enable two-factor authentication to add an extra layer of security to your account.{"\n"}
        - Regularly check the activity history to ensure there are no unauthorized actions. {"\n"}
        - Disable features such as voice purchasing, drop-in, and calling/messaging, as these can be used to gain access to your Alexa device.{"\n"}
        - Keep your device's software updated with the latest security patches and firmware updates. {"\n"}
        - Be mindful of what you say near your Alexa device and consider turning off the microphone when not in use. {"\n"}
        - Consider using a physical cover for your device's camera to prevent any unauthorized access. {"\n"}{"\n"}
        <Text style={{ fontStyle: 'italic' }}>Finally, if you suspect that your Alexa device is being used to harm or control you, contact the authorities and seek help from a trusted support network."</Text>
      </Text>
        }
      />
      <DropdownButton
        title="Smart Thermostat"
        info={
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: 'bold' }}>A smart thermostat </Text> is a device that connects to the internet and can be controlled remotely using a smartphone app or voice commands. It allows you to adjust the temperature of your home from anywhere, making it convenient and energy-efficient. However, a smart thermostat can also be used dangerously. Hackers can exploit vulnerabilities in the device's software or gain access to your home network to control your thermostat, potentially causing damage to your HVAC system, wasting energy, or even gaining access to other smart devices in your home. Additionally, some smart thermostats may collect data about your daily routine and energy usage, raising concerns about privacy violations. {"\n"}
        In addition to these concerns, an abusive partner could use a smart thermostat to control your environment as a form of abuse. They could remotely adjust the temperature to uncomfortable levels, turn off the heat or air conditioning, or use the device's motion sensors to monitor your movements and activities. This type of abuse can be difficult to detect and may lead to physical discomfort, emotional distress, or financial burdens. {"\n"}{"\n"}
        
        <Text style={{ fontWeight: 'bold' }}> Here are some ways to protect yourself from the dangers of a smart thermostat, including potential abuse:</Text> {"\n"}
        - Change the default password and use a strong, unique password. {"\n"}
        - Keep your device's software updated with the latest security patches and firmware updates. {"\n"}
        - Use a secure Wi-Fi network and enable two-factor authentication to add an extra layer of security to your account. {"\n"}
        - Review the privacy policy of your smart thermostat and disable any features that collect unnecessary data. {"\n"}
        - Be cautious when granting access to third-party apps or services that connect to your smart thermostat. {"\n"}
        - Monitor your energy usage and temperature settings to detect any unusual activity. {"\n"}{"\n"}
        <Text style={{ fontStyle: 'italic' }}>Finally, if you suspect that your smart thermostat is being used to harm or control you, contact the authorities and seek help from a trusted support network."</Text>
        </Text>
        }
      />
      <DropdownButton
        title="Ring Doorbell"
        info={
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: 'bold' }}>Ring Doorbell</Text>   is a smart doorbell that uses a built-in camera and motion sensors to detect activity at your front door. The device allows you to monitor and communicate with visitors via a smartphone app from anywhere, making it a popular choice for home security. However, Ring Doorbell can also be used dangerously. Hackers can exploit vulnerabilities in the device to gain access to your home network, steal personal information or even disable the security system altogether. In addition to the concerns mentioned above, an abusive partner could also use a Ring Doorbell to control and monitor your activities as a form of abuse. They could remotely access the device to watch your comings and goings, listen to your conversations, or even prevent you from leaving the house by denying access to the front door. This type of abuse can be difficult to detect and may cause significant emotional distress. {"\n"} 
        The device can be used for surveillance, raising concerns about privacy violations as well. {"\n"}{"\n"}
        
        <Text style={{ fontWeight: 'bold' }}> Here are some ways to protect yourself from Ring Doorbell:</Text>  {"\n"}
        - Change the default password and use a strong, unique password. {"\n"} {"\n"}
        - Enable two-factor authentication to add an extra layer of security to your account. {"\n"}
        - Keep your device's software updated with the latest security patches and firmware updates. {"\n"}
        - Be mindful of what you say near your Ring Doorbell, as it can record audio as well as video. {"\n"}
        - Consider adjusting the device's motion sensors to avoid capturing footage beyond your property. {"\n"}
        - Regularly check the app's activity history to ensure there are no unauthorized actions. {"\n"}
        - Disable features such as sharing your videos on social media, as this can compromise your privacy. {"\n"}{"\n"}
        <Text style={{ fontStyle: 'italic' }}>Finally, if you suspect that your Ring Doorbell is being used to harm or control you, contact the authorities and seek help from a trusted support network."</Text>
        </Text>
        }
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
  flex: 1,
  marginHorizontal: '1%',
  },
  roundedButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  image: {
    marginBottom: 5,
    width: 375,
    height: 50,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  intro: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  introText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
});
export default IoTNative;