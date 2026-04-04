import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { CheckCircle2, XCircle, Home, RotateCcw } from 'lucide-react-native'; 
import { Colors } from '../theme';

export default function ResultScreen({ route, navigation }) {
  
  const { score, total } = route.params;
  const percentage = Math.round((score / total) * 100);
  const incorrect = total - score;

  
  const getFeedback = () => {
    if (percentage === 100) return "Advanced Level! 🚀";
    if (percentage >= 80) return "Great Job! You neeled it..";
    if (percentage >= 60) return "Keep Practicing! You're getting there.";
    return "Time to revise your notes! 📚";
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        
        <View style={styles.scoreCircle}>
          <Text style={styles.percentageText}>{percentage}%</Text>
          <Text style={styles.scoreText}>{score} / {total}</Text>
        </View>

        <Text style={styles.feedbackTitle}>{getFeedback()}</Text>

        
        <View style={styles.statsRow}>
          <View style={[styles.statBox, { borderColor: Colors.success }]}>
            <CheckCircle2 color={Colors.success} size={24} />
            <Text style={styles.statNumber}>{score}</Text>
            <Text style={styles.statLabel}>Correct</Text>
          </View>

          <View style={[styles.statBox, { borderColor: Colors.error }]}>
            <XCircle color={Colors.error} size={24} />
            <Text style={styles.statNumber}>{incorrect}</Text>
            <Text style={styles.statLabel}>Incorrect</Text>
          </View>
        </View>

        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.retryButton]} 
            onPress={() => navigation.goBack()} 
          >
            <RotateCcw color="#FFF" size={20} style={{marginRight: 8}} />
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.homeButton]} 
            onPress={() => navigation.navigate('Home')}
          >
            <Home color={Colors.primary} size={20} style={{marginRight: 8}} />
            <Text style={[styles.buttonText, { color: Colors.primary }]}>Go Home</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  
  scoreCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 8,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.card,
    marginBottom: 20,
    // Shadow
    elevation: 10,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  percentageText: { fontSize: 42, fontWeight: '900', color: Colors.text },
  scoreText: { fontSize: 16, color: Colors.subText, marginTop: 5 },
  
  feedbackTitle: { fontSize: 24, fontWeight: 'bold', color: Colors.text, marginBottom: 40, textAlign: 'center' },
  
  statsRow: { flexDirection: 'row', gap: 20, marginBottom: 50 },
  statBox: {
    flex: 1,
    backgroundColor: Colors.card,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    elevation: 2,
  },
  statNumber: { fontSize: 24, fontWeight: 'bold', color: Colors.text, marginTop: 8 },
  statLabel: { fontSize: 14, color: Colors.subText },

  buttonContainer: { width: '100%', gap: 15 },
  button: {
    flexDirection: 'row',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  retryButton: { backgroundColor: Colors.primary },
  homeButton: { backgroundColor: 'transparent', borderWidth: 2, borderColor: Colors.primary },
  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
});