import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';
export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [guessRound,setGuessRounds] = useState(0);
  const [gameIsOver,setGameIsOver] = useState(true)
  function onGuess()
  {
    
  }
  function onNumberPicked(number)
  {
    setUserNumber(number)
    setGameIsOver(false)
  }
  function startNewGameHandler(){
    setUserNumber(null)
    setGuessRounds(0)
  }
  let screen = <StartGameScreen
               onPickNumber = {onNumberPicked}
               ></StartGameScreen>
  if(userNumber)
  {
    screen = <GameScreen userNumber = {userNumber}
    onGameOver = {GameOverHandler}
    onGuess = {onGuess}
    ></GameScreen>
  }
  
  if(gameIsOver&&userNumber)
  {
    screen = <GameOverScreen userNumber = {userNumber}
    rounds = {guessRound}
    onStartNewGame = {startNewGameHandler}
    ></GameOverScreen>
  }
  function GameOverHandler(numberOfRounds){
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }
  return (
      <LinearGradient 
      colors = {[Colors.primary700,Colors.accent500]}
      style = {styles.rootScreen}>
      <ImageBackground 
      style = {styles.rootScreen}
      source = {require('./assests/images/background.png')
      }
      resizeMode = "cover"
      imageStyle = {styles.backgroundImage}
      >
      <SafeAreaView style = {styles.rootScreen}>
      {screen}
      </SafeAreaView>
      </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen:{
    flex : 1
  },
  backgroundImage:{
    opacity : 0.15
  }
});
