import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image} from "react-native";
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const OnlineNative = () => {
  const [isSafePost, setIsSafePost] = useState(true);
  const [password, setPassword] = useState('');
  const [lengthCheck, setLengthCheck] = useState(false);
  const [capitalCheck, setCapitalCheck] = useState(false);
  const [numberCheck, setNumberCheck] = useState(false);
  const [specialCheck, setSpecialCheck] = useState(false);
  const [cookieCheck, setCookieCheck] = useState(false);
  const [imageSource, setImageSource] = useState(require('./onlineImage/kitten.png'));
  const togglePostSafety = () => {
    setIsSafePost(!isSafePost);
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
      alert('Congrats, your password is safe!');
    } else {
      alert('Please try again with a stronger password.');
    }
  };
  const handlePress = () => {
    setImageSource(require('./onlineImage/kitten2.jpeg'));
    alert('This link could have been dangerous, please be aware of bad links and consider downloading an antivirus.');
  };
  const cookies = () => {
    setCookieCheck(true);    
  };

  return (
    <ScrollView horizontal={false} bounces={false}   alwaysBounceHorizontal={false}>
      <View style={styles.containerIntro}>
      <Text style={[styles.title, { marginBottom: 10 }]}>Digital Self-Defense: Stay Safe Online</Text>
        <Text style={styles.paragraph}>Staying safe online is important due to the increasing risk of cyberbullying, online harassment, and stalking. To protect our online identity and mental health, we need to prioritize social media safety by being aware of the risks and implementing safe practices. By following some simple tips, we can enjoy the benefits of social media without compromising our privacy and security.</Text>
        <Image source={require('./assets/triangle.jpg')} style={styles.imageIntro} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>This is an example of what not to post online</Text>
        <Text style={{marginTop: 10}}>If you click on the post you will see what change we made to pretect you online</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}></View>
          <View>
            <Text style={styles.name}>Jane Doe</Text>
            <Text style={styles.time}>{isSafePost? "2 hrs · Public": "2 hrs · Private"}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={togglePostSafety} style={styles.content}>
          <Text style={styles.text}>
            {isSafePost? 
            "I am in an amazing vacation in Hawaii! I rented at the Hilton  Waikiki Beach resort it is so beautiful here. I Had such a great time at the beach today, ate lots of delicious food, and even went parasailing! Also, my house is empty right now because I'm away on vacation, so if anyone wants to come rob me, now's your chance! 😜 #vacation"
            : "Just got back from a wonderful vacation in Hawaii! The beaches were beautiful and the food was amazing. I even tried parasailing for the first time! #vacation"}
          </Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.likes}>12 Likes</Text>
          <Text style={styles.comments}>2 Comments</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Example of a secure password that adheres to industry-standard best practices.</Text>
        <Text style={{marginTop: 10}}>Please enter your desired password in the designated field below. Our system will perform a security analysis on the password you provide and notify you whether it meets the necessary criteria for a secure password.{"\n\n"}* We do not store password in our application * </Text>
        <Text>
          {"\n"}Additionally we would suggest: {"\n"}
          <Text style={{ fontWeight: 'bold' }}>-Unpredictability:</Text> Do not use predictable words or phrases.{"\n"}
          <Text style={{ fontWeight: 'bold' }}>-Variation:</Text> Use different passwords for different accounts.{"\n"}
          <Text style={{ fontWeight: 'bold' }}>-Avoid personal information:</Text> Do not use personal information such as your name, birthdate, or address in your password.{"\n"}
          <Text style={{ fontWeight: 'bold' }}>-Change regularly: </Text>Change your passwords regularly to prevent them from being compromised.
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.passwordTitle}>Password Checker</Text>
        </View>
        <View style={styles.row}>
          <Text style={lengthCheck ? styles.check : styles.cross}>✔️</Text>
          <Text style={styles.rule}>More than 8 characters</Text>
        </View>
        <View style={styles.row}>
          <Text style={capitalCheck ? styles.check : styles.cross}>✔️</Text>
          <Text style={styles.rule}>At least one capital letter: A-Z</Text>
        </View>
        <View style={styles.row}>
          <Text style={numberCheck ? styles.check : styles.cross}>✔️</Text>
          <Text style={styles.rule}>At least one number: 0-9</Text>
        </View>
        <View style={styles.row}>
          <Text style={specialCheck ? styles.check : styles.cross}>✔️</Text>
          <Text style={styles.rule}>At least one special character: !@#$%^&*~()_+-=[]{};':|,.\/?</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter password"
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Suspicious Link</Text>
        <Text style={{marginTop: 10}}>
          Be cautious about clicking on links or downloading attachments in emails or messages, or even online in website especially from unknown or suspicious sources.{"\n"}{"\n"}
          *Click on the link bellow to see more image of cute kitten*
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.imageContainer}>
              <Image source={imageSource}  style={styles.image}/>
            </View>
            <Text style={styles.link}>Click here to see a cute kitten image</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Clearing our your Cookies</Text>
        <Text style={{marginTop: 10}}>
          Cookies sounds delicious but what is it? Cookies are small blocks of data created by a web server while you are browsing a website. Cookies are placed on the device used to access a website, and they are used to remember users' information on the same device so it is easier to visit the same website again.{"\n"}{"\n"}
          *Clearing your cookies will allow you to prevent websites and third-parties from following you around the web across multiple sites. Marketing cookies can perform user profiling oe tracking of website preferences. Cookies can also be used by cybercriminals to impersonate the user, collect financial data, access their accounts or to steal passwords that are stored in the browser.*
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          {!cookieCheck ?(
            <TouchableOpacity style={styles.cookieButton} onPress={cookies}>
              <Text style={styles.buttonText}>Clear your cookies</Text>
            </TouchableOpacity>
          ):(
          <View>
            <View style={styles.firstCircle}>
              <Text style={styles.buttonText}>{"\n"}{"\n"}{"\n"}FOR iOS: Open your {"\n"}           settings</Text>
            </View>
            <View >
              <Image source={require('./arrow/purplearrow.png')} style={styles.arrow}/>
            </View>
            <View style={styles.secondCircle}>
              <Text style={styles.buttonText}>{"\n"}{"\n"}{"\n"}Go to Safari</Text>
            </View>
            <View>
              <Image source={require('./arrow/purplearrow.png')} style={styles.arrow}/>
            </View>
            <View style={styles.thirdCircle}>
              <Text style={styles.buttonText}>{"\n"}{"\n"}{"\n"}Click Clear History{"\n"}               and{"\n"}    Website Data</Text>
            </View>
            <View>
              <Image source={require('./arrow/purplearrow.png')} style={styles.arrow}/>
            </View>
            <View style={styles.fourthCircle}>
              <Text style={styles.buttonText}>{"\n"}{"\n"}{"\n"} FOR Android: In your{"\n"} Chrome app click {"\n"}      on    '...'</Text>
            </View>
            <View>
              <Image source={require('./arrow/purplearrow.png')} style={styles.arrow}/>
            </View>
            <View style={styles.fifthCircle}>
              <Text style={styles.buttonText}>{"\n"}{"\n"}{"\n"}Select Privacy and {"\n"}            Security</Text>
            </View>
            <View>
              <Image source={require('./arrow/purplearrow.png')} style={styles.arrow}/>
            </View>
            <View style={styles.sixCircle}>
              <Text style={styles.buttonText}>{"\n"}{"\n"}{"\n"} Tap Clear Browsing {"\n"}               Data</Text>
            </View>
            <View >
              <Image source={require('./arrow/purplearrow.png')} style={styles.arrow}/>
            </View>
            <View style={styles.sevenCircle}>
              <Text style={styles.buttonText}>{"\n"}{"\n"}{"\n"} Insure Cookies and Site Data is Selected {"\n"}  and Tap Clear Data</Text>
            </View>
          </View>
          )}
        </View>
      </View> 
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Incognito Mode</Text>
        <Text style={{marginTop: 10}}>
        Incognito mode is a browsing feature that allows you to surf the web without a record of your search history, cookies, or other temporary data saved on your device, making your session invisible to other device users.{"\n"}{"\n"}
          *Keep in mind that incognito mode doesn't make you invisible online or fully protect your privacy. Websites can track your IP address, and your ISP can see your browsing activity. It mainly helps to protect your privacy on the device you're using, not online anonymity.*
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.passwordTitle}>Surfing the Web Privately</Text>
        </View>
        <View >
          <Image source={require('./incognito/incognito.jpeg')} style={styles.image}  onPress={handleSubmit}/>
          <Text>
          <Text style={styles.passwordTitle}>Android:</Text>
          {"\n"}On your Android phone or tablet, open Chrome .
          {"\n"}To the right of the address bar, tap More. New Incognito tab.
          {"\n"}A new window appears. In the top left, check for the Incognito icon .
          <Text style={styles.passwordTitle}>{"\n"}iOS:</Text>
          {"\n"}Open Safari on your iPhone.
          {"\n"}Tap the Tabs button .
          {"\n"}Tap [number] Tabs or Start Page to show the Tab Groups list.
          {"\n"}Tap Private , then tap Done.
        </Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>Multi-Factor Authentification</Text>
          <Text style={{marginTop: 10}}>
          Many social media platforms offer multi-factor authentication
                (MFA), which requires you to enter a code sent to your phone or
                email in addition to your password. This provides an extra layer
                of security and makes it harder for hackers to gain access to your
                account.
          </Text>
      </View>
      <Image source={require('./assets/multi.png')} style={styles.imageMulti} />
    </ScrollView>
    );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    margin: 10,
  },
  containerIntro: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginTop:20,
  },
  imageIntro: {
    width: 300,
    height:300, 
    marginLeft: -10,
    marginTop:80,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: '#f4f2fe',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  passwordTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    color: '#999',
  },
  content: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  likes: {
    color: '#999',
  },
  comments: {
    color: '#999',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  check: {
    marginRight: 10,
    color: 'green',
  },
  cross: {
    marginRight: 10,
    color: 'red',
  },
  rule: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    height: 50,
  },
  input: {
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
    width: '40%',
    alignItems: 'center',
    backgroundColor: 'purple',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  imageContainer: {
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 10,
  },
  image: {
  width: 150,
  height: 250,
  resizeMode: 'contain',
  },
  imageMulti: {
    width: 350,
    height: 250,
    resizeMode: 'contain',
    marginLeft:10,
  },
  link: {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'blue',
  textDecorationLine: 'underline',
  },
  cookieButton: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
    width: '60%',
    height: '90%',
    alignItems: 'center',
    backgroundColor: 'purple',
    marginTop: 10,
  },
  firstCircle: {
    borderColor: 'white',
    shadowOpacity: '#9400D3',
    height:200,
    width:200,
    borderRadius: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#9400D3',
  },
  secondCircle: {
    borderColor: '#DDA0DD',
    height:200,
    width:200,
    borderRadius: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#DDA0DD',
  },
  thirdCircle: {
    borderColor: '#FC8EAC',
    height:200,
    width:200,
    borderRadius: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FC8EAC',
  },
  fourthCircle: {
    borderColor: '#4B0082',
    height:200,
    width:200,
    borderRadius: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#4B0082',
  },
  fifthCircle: {
    borderColor: '#0099cc',
    height:200,
    width:200,
    borderRadius: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#0099cc',
  },
  sixCircle: {
    borderColor: '#F3D265',
    height:200,
    width:200,
    borderRadius: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#F3D265',
  },
  sevenCircle: {
    borderColor: '#8A2BE2',
    height:200,
    width:200,
    borderRadius: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#8A2BE2',
  },
  arrow: {
    width: 50,
    height: 50,
    marginTop: -20,
    borderRadius: '100%',
    borderColor: "white",
    borderWidth:5, 
    marginLeft: 75,
  },
};

export default OnlineNative;