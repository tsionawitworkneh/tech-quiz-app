import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';


import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import { Colors } from './theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <StatusBar style="dark" />
      
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
            elevation: 0, 
            shadowOpacity: 0, 
          },
          headerTintColor: Colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          cardStyle: { backgroundColor: Colors.background }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Tech Quizy',
            headerLeft: () => null, 
           }} 
        />
        <Stack.Screen 
          name="Quiz" 
          component={QuizScreen} 
          options={({ route }) => ({ title: route.params?.categoryName || 'Quiz' })} 
        />
        <Stack.Screen 
          name="Result" 
          component={ResultScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}