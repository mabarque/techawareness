import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  Modal,
  TouchableHighlight
} from "react-native";
import CustomTab from "./customtab.js";
import styles2 from "./styles/Style.js";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const MediaSafety = ({ setSelectedTab }) => {
  const [password, setPassword] = useState("");
  const [lengthCheck, setLengthCheck] = useState(false);
  const [capitalCheck, setCapitalCheck] = useState(false);
  const [numberCheck, setNumberCheck] = useState(false);
  const [specialCheck, setSpecialCheck] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [postText, setPostText] = useState(
    "Hey everyone, just wanted to update you on what's been going on in my life lately. I just moved into my new house on 1234 Main St, which is super close to my kids' school, so it's super convenient for us!Speaking of my kids, they're all really excited about starting their new school year at Lincoln Elementary. My oldest, Katie, is going to be in 9th grade this year, and she's such a great student! My middle child, Michaela, is going to be in 6th grade, and she's always been so curious about everything. And my youngest, Michael, is going to be starting Kindergarten this year! He's a little nervous but so excited to be going to the same school as her big brother and sister."
  );

  const deleteInfo = () => {
    setPostText(
      "Hey everyone, just wanted to update you on what's been going on in my life lately. I just moved into my new house, which is super close to my kids' school, so it's super convenient for us! Speaking of my kids, they're all really excited about starting their new school year. My oldest is going to be in high school this year, and she's such a great student! My middle child is always curious about everything. And my youngest is going to be starting Kindergarten this year! He's a little nervous but so excited to be going to the same school as her big brother and sister."
    );
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setLengthCheck(value.length >= 8);
    setCapitalCheck(/[A-Z]/.test(value));
    setNumberCheck(/\d/.test(value));
    setSpecialCheck(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value));
  };

  const handleSubmit = () => {
    if (lengthCheck && capitalCheck && numberCheck && specialCheck) {
      setModalMessage("Congrats, your password is safe!");
    } else {
      setModalMessage("Please try again with a stronger password.");
    }
    setModalVisible(true);
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={[styles.container]}>
        <View style={styles.topHalfStyle}>
          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Protecting Personal Information:</Text>
              <Text style={styles.text2}>
                The Importance of Social Media Safety
              </Text>
            </View>
            <View style={styles.ParentImageContainer}>
              <Image
                style={styles.rightImage}
                source={require("./assets/onlinemedia.jpeg")}
              />
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            Digital Self-Defense: Stay Safe Online
          </Text>
          {/* your component content */}
          <View style={styles.title2Container}>
            <Text style={styles.title2}>
              Social media has become an essential part of our lives, but it
              also comes with its share of risks. With the increasing cases of
              tech abuse like cyberbullying, online harassment, and stalking,
              it's crucial to prioritize social media safety to safeguard our
              online identity and protect our mental and emotional well-being.
              By being aware of these risks and implementing safe practices, we
              can enjoy the benefits of social media without compromising our
              privacy and security. Social media can be a fun and valuable tool,
              but it's important to use it safely and responsibly. Here are some
              tips to help protect your privacy and security:
            </Text>
          </View>
          {/* add more components with additional content here */}

          <CustomTab title="How to delete cookies" index={0}>
            <Text style={styles.title3}>
              Technology can be a double-edged sword, and while it offers many
              advantages, it can also be exploited for nefarious purposes. In
              the context of cookies, these small text files can be used by
              cybercriminals to monitor your online activities, gather sensitive
              information, and even facilitate identity theft. As a
              precautionary measure, regularly deleting cookies in your browser
              settings can help minimize your vulnerability to such threats,
              enhancing your privacy and security online. To delete cookies, go
              to your browser settings and clear your browsing data.
            </Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.Cookiesimage}
                source={require("./assets/cookiespic.png")}
              />
            </View>
            <Text style={styles.title4}>
              For more information on how to delete cookies in specific
              browsers, please visit the following links:{"\n"}
            </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://support.google.com/chrome/answer/95647"
                )
              }
            >
              <Text style={styles.link}>Google Chrome</Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                )
              }
            >
              <Text style={styles.link}>Mozilla Firefox</Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://support.microsoft.com/en-us/topic/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                )
              }
            >
              <Text style={styles.link}>Microsoft Edge</Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                )
              }
            >
              <Text style={styles.link}>Apple Safari</Text>
            </TouchableOpacity>
            <Text>{"\n\n"}</Text>
            <Text style={styles.title3}>
              These resources provide step-by-step instructions on managing
              cookies for each respective browser.
            </Text>
          </CustomTab>

          <CustomTab title="How to use incognito mode" isLast={true}>
            <Text style={styles.title3}>
              Incognito mode, also known as private browsing, is a feature
              available in most web browsers that allows users to browse the
              internet without leaving traces of their activity on their device.
              When using incognito mode, the browser does not store your
              browsing history, cookies, or any site data. This can be helpful
              for maintaining privacy, especially when using a shared or public
              computer.
              {"\n"}
              {"\n"}Keep in mind that incognito mode does not make you invisible
              online or provide complete privacy. Websites can still track your
              IP address, and your internet service provider (ISP) can still see
              your browsing activity. Incognito mode mainly helps to protect
              your privacy on the device you are using, rather than providing
              complete anonymity on the internet.
            </Text>
            
            <View style={styles.imageContainer}>
              <Image
                style={styles.Incognitoimage}
                source={require("./assets/incognitoreasons.png")}
              />
            </View>
            <Text style={styles.title4}>
              For more information on how to use incognito mode in specific
              browsers, please visit the following links:{"\n"}
            </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://support.google.com/chrome/answer/95464"
                )
              }
            >
              <Text style={styles.link}>Google Chrome</Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history"
                )
              }
            >
              <Text style={styles.link}>Mozilla Firefox</Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://support.microsoft.com/en-us/topic/browse-inprivate-in-microsoft-edge-e6f47704-340c-7d4f-b00d-d0cf35aa1fcc"
                )
              }
            >
              <Text style={styles.link}>Microsoft Edge</Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://support.apple.com/guide/safari/browse-privately-ibrw1069/mac"
                )
              }
            >
              <Text style={styles.link}>Apple Safari</Text>
            </TouchableOpacity>
            <Text>{"\n\n"}</Text>
            <Text style={styles.title3}>
              These resources provide step-by-step instructions on using
              incognito mode for each respective browser.
            </Text>
          </CustomTab>

          <CustomTab title="Don't share personal information" isLast={true}>
            <Text style={styles.title3}>
              Be cautious about what information you share on social media.
              Avoid posting your full name, home address, phone number, or other
              sensitive information that could be used to identify you or locate
              you offline. Here's a recommended list of what not to post on
              social media in order to maintain online safety:{"\n"}
            </Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.safetipsimage}
                source={require("./assets/onlinetips.png")}
              />
            </View>

            <Text style={styles.title3}>
              By being mindful of the information you share on social media, you
              can better protect yourself and your loved ones from potential
              online threats.The following is an example of a Facebook post
              illustrating what information not to share on social media:
            </Text>
            <View style={styles.container}>
              <View style={styles.headerface}>
                <Text style={styles.headerTextface}>facebook</Text>
              </View>
              <View style={styles.square}>
                <View style={styles.profilePictureContainer}>
                  <Image
                    source={require("./assets/family.jpeg")}
                    style={styles.profilePicture}
                  />
                </View>
                <View style={styles.profileInfoContainer}>
                  <Text style={styles.profileText}>Jasmine Washington</Text>
                  <Text style={styles.locationText}>March 23 at 7:51 PM</Text>
                  <Text style={styles.postText}>{postText}</Text>
                </View>
                <TouchableOpacity
                  style={styles.privButton}
                  onPress={deleteInfo}
                >
                  <Text style={styles.privText}>Delete Private Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          </CustomTab>

          <CustomTab title="Use a strong password" isLast={true}>
            <Text style={styles.title3}>
              Create a strong and unique password for each of your social media
              accounts. Use a combination of uppercase and lowercase letters,
              numbers, and symbols. Avoid using common words or phrases that can
              be easily guessed.
              {"\n"}
            </Text>
            <Text style={styles.title3}>
              Please enter your desired password in the designated field below.
              Our system will perform a security analysis on the password you
              provide and notify you whether it meets the necessary criteria for
              a secure password.{"\n"}
            </Text>
            <View style={styles.outerContainer}>
              <View style={styles.container}>
                <View style={styles.header}>
                  <Text style={styles.passwordTitle}>Password Checker</Text>
                </View>
                {[
                  { condition: lengthCheck, text: "More than 8 characters" },
                  {
                    condition: capitalCheck,
                    text: "At least one capital letter: A-Z",
                  },
                  { condition: numberCheck, text: "At least one number: 0-9" },
                  {
                    condition: specialCheck,
                    text: "At least one special character: !@#$%^&*~()_+-=[]{};':|,.\\/?",
                  },
                ].map(({ condition, text }) => (
                  <View style={styles.row} key={text}>
                    <Text
                      style={[
                        condition ? styles.check : styles.cross,
                        { marginLeft: "5%" },
                      ]}
                    >
                      ✔️
                    </Text>

                    <Text style={styles.rule}>{text}</Text>
                  </View>
                ))}
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Enter password"
                    value={password}
                    onChangeText={handlePasswordChange}
                  />
                </View>
                <TouchableOpacity
                  style={styles.buttonpass}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonTextpass}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ fontWeight: "bold" }}>
              Disclaimer: We will not store the password you enter for this
              security analysis.{"\n"}
            </Text>

            {/* End of the provided code snippet */}
          </CustomTab>
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableHighlight
              style={{ ...styles.closeButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>





      <CustomTab title="Enable multi-factor authentication" isLast={false}>
        <Text style={styles.title3}>
          Many social media platforms offer multi-factor authentication (MFA),
          which requires you to enter a code sent to your phone or email in
          addition to your password. This provides an extra layer of security
          and makes it harder for hackers to gain access to your account.
        </Text>
        <Text style={styles.title3}>
          {'\n'}Here are some resources on how to enable MFA on popular social media
          platforms:{'\n'}{'\n'}
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.facebook.com/help/148233965247823")}
        >
          <Text style={styles.link}>
            Facebook: How to turn on two-factor authentication
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://help.instagram.com/566810106808145")}
        >
          <Text style={styles.link}>
            Instagram: Two-Factor Authentication (2FA)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://support.google.com/accounts/answer/185839")}
        >
          <Text style={styles.link}>
            Google: Add 2-Step Verification to your Google Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://support.microsoft.com/en-us/account-billing/set-up-two-step-verification-for-microsoft-account-c296e630-9a4d-0cdb-ef92-0dcb9289a5f5")}
        >
          <Text style={styles.link}>
            Microsoft: Set up two-step verification for Microsoft account
          </Text>
        </TouchableOpacity>
        {/* End of the provided code snippet */}
      </CustomTab>

        <View style={styles.rectangleContainer}>
        <View style={styles.rectangle}>
          <View style={styles.parentContainer}>
            <View style={styles.leftContainer}>
              <Text style={styles.leftText}>Unmasking Digital Abuse</Text>
              <Text style={styles.leftText2}>
                  Learn essential insights into the various forms of abusive
                  tech behavior
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => setSelectedTab("Identifytheabuse")}>
                <Text style={styles.buttonText}>Learn More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
            <View style={styles.rightContainer}>
              <Text style={styles.rightText}>Secure Your Smart World</Text>
              <Text style={styles.rightText2}>
                  Learn the risks associated with IoT devices and how to
                  safeguard against them.
                </Text>
              <TouchableOpacity style={styles.buttontwo}onPress={() => setSelectedTab("IoTAwareness")}>
                <Text style={styles.buttonText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </View>
        </View>
        </View>
      <View style={styles2.bottomHeader}>
        <Text style={styles2.bottomHeaderText}>
          Copyright © 2023 DarkSide. All rights reserved.
        </Text>
        <View style={styles2.socialMediaIcons}></View>
      </View>
    </ScrollView>
  );
};
export default MediaSafety;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
  },

  topHalfStyle: {
    backgroundColor: "#947dfc",
    justifyContent: "flex-start",
    padding: 20,
    zIndex: 1,
    height: hp("61%"), // 60% of screen height
    overflow: "hidden",
  },
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 47,
    fontWeight: "bold",
    marginTop: "-18%",
    marginLeft: "5%",
    zIndex: 2,
    fontFamily: "Nunito",
  },
  text2: {
    fontSize: 40,
    lineHeight: 40,
    color: "#d4ccfd",
    fontFamily: "Nunito",
    width: "60%",
    marginTop: "1%",
    marginLeft: "5%",
  },
  ParentImageContainer: {
    position: 'relative',
    flex: 1,
    height: hp('60%'), // add fixed height
    width: wp('100%'), // add fixed width
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: '-6%', // 5% of screen width
  },
  
  rightImage: {
    position: 'absolute',
    height: hp('60%'), // add fixed height
    width: wp('100%'), // add fixed width
    resizeMode: 'contain',
    zIndex: 3,
    objectFit: 'contain',
    top: hp('-15%'),
    right: wp('-30%'),
    flex: 1, // add flex 1
  },
  

  textContainer: {
    flex: 1,
    justifyContent: "center",
    marginRight: 20,
  },
  ImageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: wp("-6%"), // 5% of screen width
  },
  contentContainer: {
    marginTop: "2.5%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    zIndex: 4,
    flex: 1,
  },

  title: {
    fontSize: 60,
    color: "#b691d2",
    fontFamily: "Seriff",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  passtitle: {
    fontSize: 30,
    color: "#b691d2",
    fontFamily: "Seriff",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  bulletItem: {
    marginBottom: 5,
    fontSize: 16,
    lineHeight: 20,
  },

  title2: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333",
    fontFamily: "Nunito",
    width: "60%",
    fontWeight: "bold",
  },
  title3: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333",
    fontFamily: "Nunito",
    fontWeight: "bold",
  },
  title4: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333",
    fontFamily: "Nunito",
    fontWeight: "bold",
    marginTop: "-50%",
  },
  list: {
    padding: 10,
  },
  listItem: {
    marginBottom: 8,
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 18,
    fontFamily: "Nunito",
    fontWeight: "bold",
    lineHeight: 30,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 40,
  },

  title2Container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: "2.5%",
    position: "relative",
  },
  rectangleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5%",
    marginBottom: "5%",

  },
  rectangle: {
    backgroundColor: '#3ba1c5',
    width: '60%',
    height: 300,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '1%',
    fontFamily: "Nunito",
    marginTop:'-10%',
    color: "white",
  },
  leftText2: {
    fontSize: 20,
    color: "white",
    fontFamily: "Nunito",
    marginTop: "2.5%",
    textAlign: "center",
    width: "60%"
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '1%',
    fontFamily: "Nunito",
    marginTop:'-10%',
    color: "white",
  },
  rightText2: {
    fontSize: 20,
    color: "white",
    fontFamily: "Nunito",
    marginTop: "2.5%",
    textAlign: "center",
    width: "60%"
  },
  line: {
    height: '100%',
    width: 2,
    backgroundColor: 'white',

  },
  buttonTextpass: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  Cookiesimage: {
    width: "100%", // Adjust this value according to your desired size
    top: "-25%",
    aspectRatio: 1, // Change this value based on the aspect ratio of your image
    resizeMode: "contain", // or "cover" depending on your requirements
    "@media (max-width: 768px)": {
      // Example of a media query for smaller screens
      width: "100%",
    },
  },
  Incognitoimage: {
    width: "100%", // Adjust this value according to your desired size
    top: "-20%",
    aspectRatio: 1, // Change this value based on the aspect ratio of your image
    marginBottom: "10%", // Add this line to create space at the bottom; adjust the value as needed
    resizeMode: "contain", // or "cover" depending on your requirements
    "@media (max-width: 768px)": {
      // Example of a media query for smaller screens
      width: "100%",
    },
  },
  safetipsimage: {
    width: "100%", // Adjust this value according to your desired size
    marginTop: "-15%",
    aspectRatio: 1, // Change this value based on the aspect ratio of your image
    marginBottom: "-10%", // Add this line to create space at the bottom; adjust the value as needed
    resizeMode: "contain", // or "cover" depending on your requirements
    "@media (max-width: 768px)": {
      // Example of a media query for smaller screens
      width: "100%",
    },
  },

  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "18%",
    paddingHorizontal: "5%",
    zIndex: 2,
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: "-300%",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    marginLeft: "37%",
    marginBottom: "-10%",
  },
  buttontwo: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    marginLeft: "37%",
    marginBottom: "-10%",
  },
  buttonText: {
    color: "#3ba1c5",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Nunito",
  },
  privacyText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    alignItems: "center",
    marginTop: 60,
  },
  headerface: {
    backgroundColor: "#3b5998",
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordTitle: {
    marginTop: "2.5%",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "2.5% ",
    marginLeft: "5%",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  square: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D3D3D3",
    marginBottom: "5%",
    flex: 1,
  },
  check: {
    marginRight: 10,
    color: "green",
  },
  cross: {
    marginRight: 10,
    color: "red",
  },
  rule: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profilePictureContainer: {
    position: "absolute",
    top: "8%",
    left: "5%",
    width: 90,
    height: 90,
    backgroundColor: "#D3D3D3",
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileInfoContainer: {
    flex: 1,
    marginLeft: 120,
    top: "5%",
    marginTop: 30,
  },
  profilePicture: {
    width: "100%",
    height: "100%",
  },
  profileText: {
    fontSize: 18,
    marginLeft: "5%",
    fontFamily: "genevafont",
    lineHeight: 30,
    fontWeight: "bold",
    color: "#3b5998",
  },
  locationText: {
    fontSize: 15,
    marginLeft: "5%",
    fontFamily: "genevafont",
    lineHeight: 30,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.5)",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "80%",
    marginLeft: "5%",
    height: 50,
    marginTop: "5%",
  },
  input: {
    fontSize: 16,
  },
  buttonpass: {
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 20,
    padding: 10,
    alignSelf: "center",
    width: "40%",
    alignItems: "center",
    backgroundColor: "purple",
    marginBottom: "5%",
  },

  postText: {
    marginTop: 50,
    lineHeight: 30,
    marginLeft: -50,
    marginRight: 30,
    fontSize: 18,
    color: "black",
    fontFamily: "genevafont",
  },
  headerTextface: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  privButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    alignSelf: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
  privText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
  },
  outerContainer: {
    backgroundColor: "#f0f0f0", // Change this to your desired grey color
    borderRadius: 8,
    padding: 20,
    marginTop: "5%",
    marginBottom: "5%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  // Your other styles here
});



/*
Nunito: require("../assets/fonts/Nunito.ttf"),
Exo: require("../assets/fonts/Exo.ttf"),
Anton: require("../assets/fonts/Anton-Regular.ttf"),
GolosBold: require("../assets/fonts/GolosText-Bold.ttf"),
GolosRegular: require("../assets/fonts/GolosText-Regular.ttf"),
Lemon: require("../assets/fonts/Lemon-Regular.ttf"),
BLackHanSans: require("../assets/fonts/BLackHanSans-Regular.ttf"),
Cooper: require("../assets/fonts/cooper.ttf"),
*/
