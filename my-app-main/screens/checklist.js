import React, { useState } from 'react';
import { Pressable, Text, View, TouchableOpacity, Linking, Platform, Dimensions, Image } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');
const shelterURL = 'https://fearisnotlove.ca/';
const sagessURL = 'https://www.sagesse.org/';
const shelterSafe ='https://sheltersafe.ca/';
const pdfURL ='https://www.calgarywomensshelter.com/images/pdf/Forms_of_Abuse.pdf';
const questions = [  {    
  id: 1,
  text: ' Have you or your loved one experienced any of the following:',   
  options: [      
    {id: 1, text: 'Were forbidden from having a phone.'},
    {id: 2, text: 'Received continuous controlling or threatening phone calls.'},
    {id: 3, text: 'Had limitations on whom to contact via phone.'},
    {id: 4, text: 'Spyware or other monitoring software were used to track your online activity without your knowledge or consent.'},
        
  ],
  selectedCount: 0
  },
  {
    id: 2,
    text: ' Have you or your loved one experienced any of the following:',
    options: [
      {id: 1, text: 'Sent abusive texts, emails or messages via social media.'},
      {id: 2, text: 'Sent insulting or threatening texts or social media messages.'},
      {id: 3, text: 'Forcing you to engage in sexual acts online or using technology to coerce or pressure you into sexual activity.'},
      {id: 4, text: 'Posted embarrassing photos of you or non-consensual images or videos online.'},
      
    ],
    selectedCount: 0
  },
  {
    id: 3,
    text: ' Have you or your loved one experienced any of the following:',
    options: [
      {id: 1, text: 'Requiring access to your passwords, social media accounts, or email accounts.'},
      {id: 2, text: 'Constantly monitoring your online activity, including your browsing history and social media activity.'},
      {id: 3, text: 'Forcing you to share your location through your phone or other devices as a condition.'},
      {id: 4, text: 'Someone made online decisions for yourself or your loved one without consent or agreement.'},
      
    ],
    selectedCount: 0
  },
  {
    id: 4,
    text: ' Have you or your loved one experienced any of the following:',
    options: [
      {id: 1, text: 'Online threats such as the use of control in a situation of power or threatening to do something if the person does not comply.'},
      {id: 2, text: 'Using technology to limit who you can talk to online.'},
      {id: 3, text: 'Manipulating the public view to portray a bad character of yourself or a loved one.'},
      {id: 4, text: 'Making you do something humiliating or degrading online.'},
      
    ],
    selectedCount: 0
  },
  {
    id: 5,
    text: ' Have you or your loved one experienced any of the following:',
    options: [
      {id: 1, text: 'Checked your phone logs and activity.'},
      {id: 2, text: 'Using technology to stalk or harass you, such as repeatedly sending unwanted messages or using a GPS tracker to monitor your location.'},
      {id: 3, text: 'Someone using apps to track your or a loved ones spending and control their money.'},
      {id: 4, text: 'Someone setting up false accounts online to gain access to information.'}
      
    ],
    selectedCount: 0
  },
  {
    id: 6,
    text: ' Have you or your loved one experienced any of the following:',
    options: [
      {id: 1, text: 'Using technology to control or manipulate you, such as threatening to release embarrassing photos or messages.'},
      {id: 2, text: 'Tagged in hurtful posts or photos.'},
      {id: 3, text: 'Using technology to spread false information about you or damage your reputation online.'},
      {id: 4, text: 'Forcing you to participate in online scams or illegal activities.'}
      ],
      selectedCount: 0
  },
];

const Quiz = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  
  
  const handleOptionSelect = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter(a => a !== optionId))
    }else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };
  
  const handlePreviousQuestion = () => {
    storePageCount();
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    resetAnswers();
  };
  
  const handleNextQuestion = () => {
    storePageCount();
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    resetAnswers();
  };

  const storePageCount = () => {
    questions[currentQuestionIndex].selectedCount = selectedOptions.length;
  };

  const resetAnswers = () => {
    setSelectedOptions([]);
    };

  const handleExit = () => {
    setCurrentQuestionIndex(0);
    setShowQuiz(false);
    resetAnswers();
    setQuizSubmitted(false);
    console.log('Quiz exited');
  };

  const handleSubmit = () => {
    let totalCount = questions.reduce(function(c, q) {
      c += q.selectedCount;
      return c;
    }, 0);
    const hasSelection = totalCount > 0;
  
    // Update state to show appropriate message
    if (hasSelection) {
      setResultMessage("It is possible that you or someone you know has experienced tech abuse. After leaving this page, we encourage you to use the contact information provided for two organizations that may be able to offer further assistance.");
    } else {
      setResultMessage("It appears that none of the scenarios of tech abuse listed apply to you. However, if you suspect that you are experiencing tech abuse but none of these examples apply to your situation, please consider reaching out to one of the organizations on the contact page that specialize in helping people in abusive situations. Additionally, there are other resources available for non-tech-related abuse in a PDF (once you exit this page) that you can use as a reference. Please remain vigilant and aware of these signs of tech abuse in the future.");
    }
    setQuizSubmitted(true);
    console.log('Quiz submitted');
  };
  
  // Define a variable to store the button style based on the platform
  const buttonStyle = Platform.select({
    web: { backgroundColor: 'transparent', borderWidth: 0 },
    default: {}
  });

  // Define a variable to store the button text color based on the platform
  const buttonTextColor = Platform.select({
    web: { color: 'blue' },
    default: {}
  });

  // Define a function to handle button press based on the platform
  const handleButtonPress = Platform.select({
    web: (url) => null,
    default: (url) => Linking.openURL(url)
  });
  if (!showQuiz) {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' , alignItems: 'center', justifyContent: 'space-between', padding: 15}}>
          <Text style={styles.text}>The link below is a self assessment questionnaire to help with you or a loved one with recognizing signs of tech-abuse </Text>
        </View>
        <TouchableOpacity style={styles.startButton} onPress={() => setShowQuiz(true)}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Assessment</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' , padding: 20}}>
          <Text style={styles.text}>There is many other types of abuse please open this pdf link from the Calgary Women Shelter for reference</Text>
          <View style={{ flexDirection: 'row' , alignItems: 'center', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.pdfButton} onPress={() => Linking.openURL(pdfURL)}>
            <Text style={styles.pdfButtonText}>PDF</Text>
          </TouchableOpacity>
          </View>
         </View>
          <View style={styles.colouredContainer}>
          <View style={{ padding: 10}}>
            <Text style={{ fontWeight: 'bold',  fontSize: 20}}>Contact Information:</Text>
          </View>
          <View style={{ flexDirection: 'row' , padding: 10}}>
            <Image source={require("./screenImage/website.png")}style={styles.images} />
            <Text><TouchableOpacity onPress={() => Linking.openURL(shelterURL)} >
              <Text style={{ padding: 8, color: 'black'}}>Fear Is Not Love Website</Text> 
            </TouchableOpacity>{"\n"}
            <TouchableOpacity onPress={() => Linking.openURL(sagessURL)} >
              <Text style={{padding: 8, color: 'black'}}>Sagesse Website</Text>
            </TouchableOpacity>{"\n"}
            <TouchableOpacity onPress={() => Linking.openURL(shelterSafe)} >
              <Text style={{padding: 8, color: 'black'}}>Shelter Safe Website</Text>
            </TouchableOpacity>
            </Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image source={require("./screenImage/email.png")}style={styles.images} />
            {Platform.OS === 'web' ? (
            <Text style={{ fontWeight: 'bold' }}>  help@fearisnotlove.ca</Text>
            ) :
            <TouchableOpacity onPress={() => handleButtonPress('mailto:help@fearisnotlove.ca')} style={buttonStyle}>
              <Text style={buttonTextColor}>  help@fearisnotlove.ca</Text>
            </TouchableOpacity>}
          </View>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image source={require("./screenImage/sms1.png")}style={styles.images} />
            {Platform.OS === 'web' ? (
            <Text style={{ fontWeight: 'bold' }}>  Text: 403.604.6689</Text>
            ) :
            <TouchableOpacity onPress={() => handleButtonPress('sms:+14036046689')} style={buttonStyle}>
              <Text style={buttonTextColor}>  Text: 403.604.6689</Text>
            </TouchableOpacity>}
          </View>
          <View style={{ flexDirection: 'row',  padding: 10}}>
            <Image source={require("./screenImage/phone.png")}style={styles.images} />
            {Platform.OS === 'web' ? (
            <Text style={{ fontWeight: 'bold' }}>  Domestic Violence and Abuse Helpline: 403.234.SAFE (7233)</Text>
            ) :
            <TouchableOpacity onPress={() => handleButtonPress('tel:+14032347233')} style={buttonStyle}>
              <Text style={buttonTextColor}>  Helpline: 403.234.SAFE (7233)</Text>
            </TouchableOpacity>}
          </View>
          <View style={{ flexDirection: 'row',  padding: 10 }}>
            <Image source={require("./screenImage/phone.png")}style={styles.images} />
            {Platform.OS === 'web' ? (
            <Text style={{ fontWeight: 'bold' }}>  Toll-free: 1-866-606.SAFE (7233)</Text>
            ) :
            <TouchableOpacity onPress={() => handleButtonPress('tel:+18666067233')} style={buttonStyle}>
              <Text style={buttonTextColor}>  Toll-free: 1-866-606.SAFE (7233)</Text>
            </TouchableOpacity>}
          </View>
        </View>
      </View>
    );
  };
  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / questions.length;
  return (
    <View style={styles.container}>
      { !quizSubmitted ?
      <Pressable style={{marginTop:12}}>
          <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        <View style={{ flexDirection: 'row' , alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5}}>
          <Text style={styles.text}>Your progress</Text>
          <Text style={styles.text}>({currentQuestionIndex + 1}/{questions.length}) questions answered</Text>
        </View>
        <Text style={[styles.text,{fontSize: 18, fontWeight: 'bold', marginBottom:20, marginTop:20,}]}>{currentQuestion.text}</Text>
        {currentQuestion.options.map((option) => (
        <TouchableOpacity key={option.id} style={styles.optionButton} onPress={() => handleOptionSelect(option.id)}>
          <Text style={[styles.text, {fontWeight: selectedOptions.includes(option.id) ? 'bold' : 'normal', color: selectedOptions.includes(option.id) ? '#3492eb' : '#0e0f0f' }]}>{option.text}</Text>
        </TouchableOpacity>
        ))}
        {currentQuestionIndex > 0 && (
        <TouchableOpacity style={styles.prevButton} onPress={handlePreviousQuestion}>
          <Text>Previous</Text>
        </TouchableOpacity>
        )}
        {currentQuestionIndex < questions.length - 1 ? (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text>Next</Text>
        </TouchableOpacity>
        ): (
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
        )}
      </Pressable>
      : (
      <Pressable style={{marginTop:12}}>
        <View style={styles.container}>
         <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={[styles.textResult, {alignItems: "center", fontSize: 18, fontWeight: 'bold' }]}>Quiz Result:</Text>
          <Text style={styles.textResult}>{resultMessage}</Text>
        </View>
      </Pressable>)
      }
    </View>
  );
};
export default Quiz;

const styles = {
  container: {
    width,
    height,
    justifyContent: "center",
    maxWidth: 800
  },
  colouredContainer: {
    backgroundColor: '#E6E6FA'
  },
  images: {
    width: 35,
    height: 35,
    borderRadius: 5,
    marginRight: 10,
  }, 
  text: {
    fontSize: 15,
    color: "#333",
    paddingHorizontal: "5%",
  }, 
  textResult: {
    fontSize: 15,
    color: "#333",
    paddingHorizontal: "20%",
  }, 
  pdfButton: {
    backgroundColor: '#C3B1E1',
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end', 
    marginRight: 25, 
    marginLeft: -10,
    marginBottom: 10,
  },
  pdfButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  optionButton: {
    backgroundColor: '#E6E6FA',
    padding: 5,
    marginVertical: 5,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,

  },
  prevButton: {
    backgroundColor: '#C3B1E1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
    marginRight: 145,
    marginLeft: 145,
    marginTop: 10,
  },
  nextButton: {
    backgroundColor: '#C3B1E1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
    marginRight: 150,
    marginLeft: 150,
    marginTop: 10,
  },  
  exitButton: {
    padding: 10,
  },
  submitButton: {
    backgroundColor: '#C3B1E1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
    marginRight: 150,
    marginLeft: 150,
    marginTop: 10,
  }, 
  startButton: {
    backgroundColor: '#C3B1E1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    marginRight: 100,
    marginLeft: 100,
  }, 
};
