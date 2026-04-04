import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { Colors } from '../theme';

export default function QuizScreen({ route, navigation }) {
  // 1. Get the questions passed from the Home Screen
  const { questions } = route.params;

  // 2. State Management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = (currentIndex + 1) / questions.length;

  
  const handleOptionPress = (index) => {
    if (isAnswered) return; 

    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
  };

  
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      
      navigation.navigate('Result', { 
        score: score, 
        total: questions.length 
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.progressText}>Question {currentIndex + 1} of {questions.length}</Text>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
        </View>
      </View>

      
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>

      
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => {
          
          const isSelected = selectedOption === index;
          const isCorrect = index === currentQuestion.correctIndex;
          
          let buttonStyle = styles.optionButton;
          let textStyle = styles.optionText;

          if (isAnswered) {
            if (isCorrect) {
              buttonStyle = [styles.optionButton, styles.correctOption];
              textStyle = [styles.optionText, { color: Colors.success, fontWeight: '700' }];
            } else if (isSelected && !isCorrect) {
              buttonStyle = [styles.optionButton, styles.wrongOption];
              textStyle = [styles.optionText, { color: Colors.error }];
            }
          } else if (isSelected) {
            buttonStyle = [styles.optionButton, { borderColor: Colors.primary }];
          }

          return (
            <TouchableOpacity 
              key={index}
              style={buttonStyle}
              onPress={() => handleOptionPress(index)}
              activeOpacity={0.7}
            >
              <Text style={textStyle}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      
      <View style={styles.footer}>
        {isAnswered && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>
              {currentIndex === questions.length - 1 ? "See Results" : "Next Question"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 20 },
  header: { marginBottom: 30, marginTop: 10 },
  progressText: { color: Colors.subText, fontSize: 14, marginBottom: 10, fontWeight: '600' },
  progressBarBg: { height: 8, backgroundColor: Colors.border, borderRadius: 4 },
  progressBarFill: { height: 8, backgroundColor: Colors.primary, borderRadius: 4 },
  
  questionCard: {
    backgroundColor: Colors.card,
    padding: 30,
    borderRadius: 24,
    marginBottom: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  questionText: { fontSize: 22, fontWeight: 'bold', color: Colors.text, textAlign: 'center', lineHeight: 30 },
  
  optionsContainer: { flex: 1 },
  optionButton: {
    backgroundColor: Colors.card,
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: Colors.border,
  },
  optionText: { fontSize: 16, color: Colors.text, fontWeight: '500' },
  
  
  correctOption: { borderColor: Colors.success, backgroundColor: '#ECFDF5' },
  wrongOption: { borderColor: Colors.error, backgroundColor: '#FEF2F2' },

  footer: { height: 80, justifyContent: 'center' },
  nextButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
  },
  nextButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});