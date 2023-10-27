import {
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import Colors from './constants/Colors';


export default function App() {

  //Switching screen problematically/////////////////////

  const [userNumber, setuserNumber] = useState();                                //for GameScreen
  const [gameOver, setgameOver] = useState(true);                               //for GameOver Screen
  const [guessRound, setguessRound] = useState(0)

  function startGameHandler(pickedNumber) {                                      // setting number to userNumber
    setuserNumber(pickedNumber)
    setgameOver(false)
  }

  function GameOverHandler() {
    setgameOver(true);
  }

  function startNewGameHandler() {
    setuserNumber(null);
    setguessRound(0);
  }

  let Screen = <StartScreen onPick={startGameHandler} />                         //initial Screen

  if (userNumber) {
    Screen = (
      <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />       //if valid number switch screen to GameScreen
    );
  }

  if (userNumber && gameOver) {
    Screen = <GameOver onStartNewGame={startNewGameHandler} />                                                        // GameOver Screen 
  }


  /////////////////////////////////////////////////////////

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/background.jpg')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          {/* rendering screen as javascript  variable */}
          <SafeAreaView style={styles.rootScreen}>
            {Screen}
          </SafeAreaView>

        </ImageBackground>
      </LinearGradient >
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  }
});
