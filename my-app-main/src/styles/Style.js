import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get("window").width;


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
  headerTitle: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Exo",
    color: '#fff',
    marginRight: 'auto',
  },
  headerText: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#fff',
    marginRight: 'auto',
  },
  headerMiddle: {
    fontFamily: "GolosRegular",
    fontSize: 20,
    color: '#7D38C9',
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 500,
    marginBottom: 80,
  },
  headerLow: {
    fontFamily: "GolosRegular",
    fontSize: 20,
    color: '#7D38C9',
    flex: 1,
    marginTop: -25,
    paddingHorizontal: 500,
    marginBottom: 80,
  },
  headerupMiddle: {
    marginTop: 100, // adjust this value as needed
    fontFamily: "Sans",
    fontSize: 40,
    color: '#7D38C9',
    marginRight: 'auto',
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 400
  },
  
  headerTabs: {
    right: 20,
    fontFamily: "Nunito",
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 11,  // adds margin between tabs
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  lowerView: {
    height: screenHeight - 225,
    width: screenWidth - 0.1,
    position: "relative",
    backgroundColor: '#000033',
    left: 0,
    right: 0,
    marginBottom: 200,

  },

  headerButton: {
    padding: 10,
    marginBottom: 15,

  },
  headerImage: {
    width: 60,
    height: 80,
  },
  backgroundImage: {
    width: screenWidth - 0.1,
    height: screenHeight * 0.75,
    resizeMode: 'contain'

  },
  imageTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Add this line
    marginVertical: 20,
    },

  imageTextWrapper: {
    alignItems: "center",
    marginHorizontal: 20,
  },
    smallImage: {
      width: screenWidth *  (2.5 / 10), // 80% of screen width
      height: screenHeight * 0.4, // 30% of screen height
      alignItems: 'center',
      marginVertical: 20,
      marginTop: 20,
      borderRadius: 10,
      marginHorizontal: 50,
    },
  imageText: {
    fontSize: 25,
    marginTop: 10,
    color: '#C7E543',
    fontFamily: "Exo",
    fontWeight: "bold",
    textAlign: 'center',
  },
  imageTextBelow: {
    fontSize: 20,
    marginTop: 10,
    color: '#ffffff',
    fontFamily: "Exo",
    fontWeight: "bold",
    textAlign: 'center',
  },

  bottomHeader: {
    backgroundColor: '#25064c',
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  bottomHeaderText: {
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: "1%"
  
  },
  socialMediaIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  bottomLinks: {
    flexDirection: 'row',
  },
  bottomLink: {
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#fff',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFBC6B',
    borderRadius: 50,
    paddingHorizontal: 35,
    paddingVertical: 15,
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  button2: {
    backgroundColor: "#FFBC6B",
    borderRadius: 50,
    paddingHorizontal: 35,
    paddingVertical: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom:"5%"
  },
  buttonText: {
    color: 'white',
    fontFamily: "Lemon",
    fontSize: 16,
    textAlign: 'center',
  },
  icon1: {
    width: 100, 
    height: 100, 
    position: 'absolute', 
    left: 400, 
    top: 35,

  },
  icon2: {
    width: 100, 
    height: 100, 
    position: 'absolute', 
    left: 400, 
    top: -50,

  },


});

export default styles;
