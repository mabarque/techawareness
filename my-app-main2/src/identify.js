import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import { Dimensions } from "react-native";
import styles2 from "./styles/Style.js";

const { width, height } = Dimensions.get("window");

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const shelterURL = "https://fearisnotlove.ca/";
  const sagessURL = "https://www.sagesse.org/";
  const shelterSafe = "https://sheltersafe.ca/";
  const pdfURL =
    "https://www.calgarywomensshelter.com/images/pdf/Forms_of_Abuse.pdf";

  const questions = [
    {
      id: 1,
      text: "Technology has become an integral part of our daily lives, but unfortunately, it can also be used as a tool for abuse. \n\nAccording to a recent study conducted in Canada by the non-profit organization, the Canadian Women's Foundation, over 40% of women have experienced some form of online harassment or abuseIt can be difficult to recognize tech abuse, as it often takes place behind closed doors and is disguised as normal behavior. \n\nThat is why we have created this quiz to help you identify the most common signs of tech abuse. By taking this quiz, you will gain a better understanding of what constitutes tech abuse and be better equipped to protect yourself and those around you.",
      options: [],
      selectedCount: 0,
    },
    {
      id: 2,
      text: " Have you or your loved one experienced any of the following:",
      options: [
        { id: 1, text: "Were forbidden from having a phone." },
        {
          id: 2,
          text: "Received continuous controlling or threatening phone calls.",
        },
        { id: 3, text: "Had limitations on whom to contact via phone." },
        {
          id: 4,
          text: "Spyware or other monitoring software were used to track your online activity without your knowledge or consent.",
        },
      ],
      selectedCount: 0,
    },
    {
      id: 3,
      text: " Have you or your loved one experienced any of the following:",
      options: [
        {
          id: 1,
          text: "Sent abusive texts, emails or messages via social media.",
        },
        {
          id: 2,
          text: "Sent insulting or threatening texts or social media messages.",
        },
        {
          id: 3,
          text: "Forcing you to engage in sexual acts online or using technology to coerce or pressure you into sexual activity.",
        },
        {
          id: 4,
          text: "Posted embarrassing photos of you or non-consensual images or videos online.",
        },
      ],
      selectedCount: 0,
    },
    {
      id: 4,
      text: " Have you or your loved one experienced any of the following:",
      options: [
        {
          id: 1,
          text: "Requiring access to your passwords, social media accounts, or email accounts.",
        },
        {
          id: 2,
          text: "Constantly monitoring your online activity, including your browsing history and social media activity.",
        },
        {
          id: 3,
          text: "Forcing you to share your location through your phone or other devices as a condition.",
        },
        {
          id: 4,
          text: "Someone made online decisions for yourself or your loved one without consent or agreement.",
        },
      ],
      selectedCount: 0,
    },
    {
      id: 5,
      text: " Have you or your loved one experienced any of the following:",
      options: [
        {
          id: 1,
          text: "Online threats such as the use of control in a situation of power or threatening to do something if the person does not comply.",
        },
        {
          id: 2,
          text: "Using technology to limit who you can talk to online.",
        },
        {
          id: 3,
          text: "Manipulating the public view to portray a bad character of yourself or a loved one.",
        },
        {
          id: 4,
          text: "Making you do something humiliating or degrading online.",
        },
      ],
      selectedCount: 0,
    },
    {
      id: 6,
      text: " Have you or your loved one experienced any of the following:",
      options: [
        { id: 1, text: "Checked your phone logs and activity." },
        {
          id: 2,
          text: "Using technology to stalk or harass you, such as repeatedly sending unwanted messages or using a GPS tracker to monitor your location.",
        },
        {
          id: 3,
          text: "Someone using apps to track your or a loved ones spending and control their money.",
        },
        {
          id: 4,
          text: "Someone setting up false accounts online to gain access to information.",
        },
      ],
      selectedCount: 0,
    },
    {
      id: 7,
      text: " Have you or your loved one experienced any of the following:",
      options: [
        {
          id: 1,
          text: "Using technology to control or manipulate you, such as threatening to release embarrassing photos or messages.",
        },
        { id: 2, text: "Tagged in hurtful posts or photos." },
        {
          id: 3,
          text: "Using technology to spread false information about you or damage your reputation online.",
        },
        {
          id: 4,
          text: "Forcing you to participate in online scams or illegal activities.",
        },
      ],
      selectedCount: 0,
    },
  ];

  const handleAnswerPress = (optionId) => {
    const updatedAnswers = [...answers];
    const currentQuestionAnswer = updatedAnswers[currentQuestion] || [];

    if (currentQuestionAnswer.includes(optionId)) {
      updatedAnswers[currentQuestion] = currentQuestionAnswer.filter(
        (id) => id !== optionId
      );
      setSelectedCount(selectedCount - 1);
    } else {
      updatedAnswers[currentQuestion] = [...currentQuestionAnswer, optionId];
      setSelectedCount(selectedCount + 1);
    }

    setAnswers(updatedAnswers);
  };
  const handleGoBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNextQuestionPress = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const handleRestartPress = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedCount(0);
    setShowResult(false);
  };

  const handleQuizSubmit = () => {
    // Show the quiz result page if at least one option was selected, otherwise show a "no" page
    setShowResult(true);
  };

  const renderOption = (option) => {
    const isSelected =
      answers[currentQuestion] && answers[currentQuestion].includes(option.id);

    return (
      <TouchableOpacity
        key={option.id}
        style={[
          styles.optionContainer,
          { backgroundColor: isSelected ? "#3498db" : "#b5b8b9" },
        ]}
        onPress={() => handleAnswerPress(option.id)}
      >
        <Text style={styles.optionText}>{option.text}</Text>
      </TouchableOpacity>
    );
  };

  const currentQuizQuestion = questions[currentQuestion];

  if (showResult) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <ImageBackground
            source={require("./assets/cloud.jpg")}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.resultContainer}>
                <View
                  style={{
                    backgroundColor: "#C3B1E1",
                    borderRadius: 10,
                    padding: 10,
                    height: "130%",
                    width: "50%",
                  }}
                >
                  <Text style={styles.resultText}>
                    {selectedCount === 0
                      ? "It appears that none of the scenarios of tech abuse listed apply to you. However, if you suspect that you are experiencing tech abuse but none of these examples apply to your situation, please consider reaching out to one of the organizations on the contact page that specialize in helping people in abusive situations. Please remain vigilant and aware of these signs of tech abuse in the future."
                      : "It is possible that you or someone you know has experienced tech abuse. After leaving this page, we encourage you to use the contact information provided for two organizations that may be able to offer further assistance."}
                  </Text>
                  <Text style={styles.titlebutton}>Resources</Text>
                  <View style={styles.resourcesbuttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL(pdfURL)}
                  >
                    <Text style={styles.buttonText}>Types of Abuse PDF</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL(shelterURL)}
                  >
                    <Text style={styles.buttonText}>FearisnotLove.ca</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL(sagessURL)}
                  >
                    <Text style={styles.buttonText}>Sagesse.org</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL(shelterSafe)}
                  >
                    <Text style={styles.buttonText}>Sheltersafe.ca</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.restartButton}
                onPress={handleRestartPress}
              >
                <Text style={styles.restartText}>Restart Quiz</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }

  const isLastQuestion = currentQuestion === questions.length - 1;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={require("./assets/cloud.jpg")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={[styles.quizContainer]}>
              <View style={styles.questionContainer}>
                <Text
                  style={[
                    styles.questionText,
                    { color: "#468ba5", textAlign: "center" },
                  ]}
                >
                  {currentQuizQuestion.text}
                </Text>
                <View style={styles.optionsContainer}>
                  {currentQuizQuestion.options.map(renderOption)}
                </View>
              </View>
              {isLastQuestion ? (
                <TouchableOpacity
                  onPress={handleQuizSubmit}
                  style={[
                    styles.buttonContainer,
                    { backgroundColor: "#a4b37e" },
                  ]}
                >
                  <Text style={styles.buttonText}>Submit quiz</Text>
                </TouchableOpacity>
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {currentQuestion !== 0 && (
                    <TouchableOpacity
                      onPress={handleGoBack}
                      style={[
                        styles.buttonContainer,
                        {
                          backgroundColor: "#64a0ba",
                          marginHorizontal: 150,
                        },
                      ]}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    onPress={handleNextQuestionPress}
                    style={[
                      styles.buttonContainer,
                      {
                        backgroundColor:
                          !answers[currentQuestion] && currentQuestion !== 0
                            ? "#cc7eba"
                            : "#cc7eba",
                        marginHorizontal: 150,
                      },
                    ]}
                  >
                    <Text style={styles.buttonText}>Next</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {showResult && (
              <View style={[styles.resultContainer, styles.resultbox]}>
                <Text style={[styles.resultText, { color: "white" }]}></Text>
              </View>
            )}
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = {
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 50, // adjust as needed
    paddingHorizontal: "55%"
  },
  quizContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    paddingBottom: 50,
    
  },
  questionContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal:450,
    width: "90%",
  },
  questionText: {
    fontSize: 22,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
   

  },
  optionsContainer: {
    padding: 16,
    
    
  },
  optionContainer: {
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    backgroundColor: "black",
  },
  optionText: {
    color: "white",
    fontSize: 20,


  },
  titlebutton:{
    color: "#5163a6",
    fontSize: 30,
    fontFamily: "fontcooper",
    textAlign: "center",
    marginTop: "-15%"

  },
  buttonContainer: {
    borderRadius: 8,
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: "white",
  },

  restartText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    borderRadius: 10,
  },
  resultContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3%",
  },

  resultText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    zIndex: 3,
    textAlign: "center",
    alignSelf: "center",
    flex: 1,
    marginTop: "2%",
    fontFamily: "Nunito",

  
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontFamily: "Nunito",
    fontWeight: "bold",

  },

  restartButton: {
    width: 150,
    height: 40,
    backgroundColor: "#64a0ba",
    borderColor:"white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    borderWidth: 1
  },
  resourcesbuttonContainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
    marginBottom: "3%"
},
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#64a0ba",
    borderColor: "#64a0ba",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: "1%",
    marginRight: 20, 
    width: 170, // Add a fixed width
    height: 50, // Add a fixed height
  },
  
};

export default Quiz;

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