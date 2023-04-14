import React, { useState } from 'react';
import { Pressable, Text, View, TouchableOpacity, Linking, ScrollView, } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Questions } from './questionIos';
import { QuestionsA } from './questionAndroid';

const bioUrl = "https://support.apple.com/en-ca/HT208109";
const passUrl = "https://support.apple.com/en-ca/HT204060";
const safeChkUrl="https://support.apple.com/en-ca/guide/personal-safety/ips2aad835e1/web"

const DeviceQuiz = () => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [iOSset, setiOSset] = useState(false);
    const [androidSet, setAndroidSet] = useState(false);
    const [chosenAnswer, setChosenAnswer] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(0);
  
    const handleExit = () => {
      setShowQuiz(false);
      setCurrentQuestion(0);
      setChosenAnswer(null);
      setSelectedAnswer(0);
      setAndroidSet(false);
      setiOSset(false);
    };
  
    const handleAnswer = (answer) => {
      setChosenAnswer(answer);
      setSelectedAnswer(answer);
    };
  
    const handleNextQuestion = () => {
      setCurrentQuestion(currentQuestion + 1);
      setChosenAnswer(null);
      setSelectedAnswer(-1);
    };
    const handleNextQuestionA = () => {
        setCurrentQuestion(currentQuestion + 1);
        setChosenAnswer(null);
        setSelectedAnswer(-1);
      };

    const question = iOSset ? Questions[currentQuestion] : QuestionsA[currentQuestion];
    const { id, question: questionText, answers, feedbacks } = question;
    const showFeedback = selectedAnswer !==-1;
    


    if (!showQuiz) {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Device Safety Features</Text>
                    <Text style={styles.text}>Below is a guide on how to set your device to a maximum security level. Please click on the link that applies to the device you are using or wanting to secure</Text>
                </View>
                <TouchableOpacity style={styles.startButton} onPress={() => {setShowQuiz(true); setiOSset(true)}}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>iOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.startButton} onPress={() => {setShowQuiz(true); setAndroidSet(true)}}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Android</Text>
                </TouchableOpacity>
            </View>
        ); };
    
    if (iOSset) {    
        return(
            <View style={styles.containerInside}>
               <View>
                    <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.header, {marginTop: -40, marginLeft: 40}]}>iOS</Text>
                
                <View style={{ width: '100%', height: '100%', overflow: 'scroll' }} >
                    <Text style={styles.question}>{Questions[currentQuestion].question}</Text>
                    {question.answers.map((answer) => (
                    <TouchableOpacity
                        key={answer.id}
                        style={[styles.answerButton, chosenAnswer === answer.id && styles.chosenAnswer]}
                        onPress={() => {
                        handleAnswer(answer);
                        setSelectedAnswer(answer);
                        }}
                    >
                        <Text style={styles.answerText}>
                        {answer.id} - {answer.text}
                        </Text>
                    </TouchableOpacity>
                    ))}
                    {showFeedback && (
                    <View style={styles.feedbackContainer}>
                        <Text style={styles.feedbackText}>{selectedAnswer.feedback}</Text>
                    </View>
                    )}
                      {currentQuestion !== Questions.length - 1 && (
                        <TouchableOpacity style={styles.nextButton} onPress={() => handleNextQuestionA()}>
                        <Text style={styles.answerText}>Next Question</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        );
    };
    if (androidSet) {    
        return(
            <View style={styles.containerInside}>
              <View>
                 <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
                     <AntDesign name="arrowleft" size={24} color="black" />
                 </TouchableOpacity>
             </View>
             <Text style={[styles.header, {marginTop: -40, marginLeft: 40}]}>Android</Text>
             
             <ScrollView >
                 <Text style={styles.question}>{Questions[currentQuestion].question}</Text>
                 {question.answers.map((answer) => (
                 <TouchableOpacity
                     key={answer.id}
                     style={[styles.answerButton, chosenAnswer === answer.id && styles.chosenAnswer]}
                     onPress={() => {
                     handleAnswer(answer);
                     setSelectedAnswer(answer);
                     }}
                 >
                     <Text style={styles.answerText}>
                     {answer.id} - {answer.text}
                     </Text>
                 </TouchableOpacity>
                 ))}
                 {showFeedback && (
                 <View style={styles.feedbackContainer}>
                     <Text style={styles.feedbackText}>{selectedAnswer.feedback}</Text>
                 </View>
                 )}
                   {currentQuestion !== QuestionsA.length - 1 && (
                     <TouchableOpacity style={styles.nextButton} onPress={() => handleNextQuestion()}>
                     <Text style={styles.answerText}>Next Question</Text>
                     </TouchableOpacity>
                 )}
             </ScrollView>
         </View>
        );
    };
};
export default DeviceQuiz;
const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    containerInside: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 40,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', 
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    text: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    startButton: {
      backgroundColor: '#C3B1E1',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginBottom: 20,
    },
    nextButton: {
        backgroundColor: '#C3B1E1',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        width:160
    },
    exitButton: {
        padding: 10,
        marginRight:20,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    answerButton: {
    backgroundColor: '#E6E6FA',
    padding: 10,
    marginBottom: 10,
    borderRadius:10,
    },
    chosenAnswer: {
    backgroundColor: '#C3B1E1',
    },
    answerText: {
    fontSize: 16,
    },
    feedbackContainer: {
    backgroundColor: 'lightgrey',
    padding:5
    },
    feedbackText: {
    fontSize: 14,
    },
  };