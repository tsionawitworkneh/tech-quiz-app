import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import * as Icons from 'lucide-react-native'; 
import { CATEGORIES, QUESTIONS } from '../data';
import { Colors } from '../theme';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 60) / 2; 
export default function HomeScreen({ navigation }) {

  const renderCategory = ({ item }) => {
    
    const IconComponent = Icons[item.icon] || Icons.Code;

    return (
      <TouchableOpacity 
        style={[styles.card, { backgroundColor: Colors.card }]}
        onPress={() => navigation.navigate('Quiz', { 
          categoryName: item.name,
          questions: QUESTIONS[item.name] 
        })}
      >
        <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
          <IconComponent color={Colors.primary} size={32} />
        </View>
        <Text style={styles.categoryName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Master whatever you're learning with TechQuizy.</Text>
      <Text style={styles.welcomeText}>What subject do you want to take a quiz on today?</Text>
      
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listPadding}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  welcomeText: {
    fontSize: 18,
    color: Colors.subText,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: '500',
  },
  listPadding: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: COLUMN_WIDTH,
    height: 160,
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  iconContainer: {
    width: 65,
    height: 65,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
});