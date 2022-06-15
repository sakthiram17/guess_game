import { Text ,View,StyleSheet,Alert} from "react-native"
import {useState,useEffect} from 'react'
import Title from "../components/Title"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/PrimaryButton"
import Card from "../components/card"
import InstructionText from "../components/instructionText"
import { Ionicons } from '@expo/vector-icons'
import {useFonts} from "expo-font"
import { FlatList } from "react-native"
import GuessLogItem from "../components/game/GuessLogItem"
import AppLoading from 'expo-app-loading'


let min = 1;
let max = 100;
function GameScreen({userNumber,onGameOver,onGuess})
{
    const initialGuess = generateRandomBetween(1,100,userNumber)
    const [currentGuess,setCurrentGuess] = useState(initialGuess);
    const [guessRounds,setGuessRounds] = useState([])
    const [fontsLoaded] = useFonts({
        'open-sans' : require('../assests/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold' : require('../assests/fonts/OpenSans-Bold.ttf'),
    })
    useEffect(()=>{
        min =1;
        max = 100;
    },[])
    useEffect(()=>{
        if(currentGuess===userNumber)
        {
            onGameOver(guessRounds.length)
        }
    },[currentGuess,userNumber,onGameOver])
    function generateRandomBetween(min, max, exclude) {
        onGuess();
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
        
        if (rndNum === exclude) {
          return generateRandomBetween(min, max, exclude);
        } else {
          return rndNum;
        }
      }
      function nextGuessHandler(direction)
      {
        if(direction === 'lower' && currentGuess < userNumber ||
        (direction)==='higher' && currentGuess >userNumber
        ){
            Alert.alert("Don't lie!",'You know its Wrong....',[
                {text : 'Sorry!',style:'cancel'}
            ])
            return 
        }
        let newRandNum;
        if(direction==='lower')
        {
            max = currentGuess;
            newRandNum = generateRandomBetween(min,max,currentGuess)
        }
        else{
            min = currentGuess+1;
         newRandNum = generateRandomBetween(min,max,currentGuess)
        
        }
        setCurrentGuess(newRandNum)
        setGuessRounds((prev)=>{
            return [currentGuess,...prev]
        })
       
      }
      if(!fontsLoaded)
      {
        return <AppLoading></AppLoading>
      }
      const guessRoundsLength = guessRounds.length;

return(
    <View style = {styles.screen}>
  
    <Title>Opponent's guess</Title>
    <Card>
    <NumberContainer>{currentGuess}</NumberContainer>
    <View>
    <InstructionText style = {styles.instructionText}>Higher or Lower?</InstructionText>
    <View style = {styles.buttonsContainer}>
    <View style = {styles.buttonView}>
        <PrimaryButton onPress = {nextGuessHandler.bind(this,'lower')}>
            <Ionicons name = 'md-remove' size = {24} color = 'white'></Ionicons>
        </PrimaryButton>
    </View>
    <View style = {styles.buttonView}>
        <PrimaryButton onPress = {nextGuessHandler.bind(this,'greater')}>
            <Ionicons name = 'md-add' size = {24} color = 'white'></Ionicons>
        </PrimaryButton>
    </View>
    </View>
    </View>
    </Card>
    <View>
    <FlatList
    data = {guessRounds}
    keyExtractor = {(item)=>{
        return item
    }}
    renderItem = {(itemData)=>{
       return (<GuessLogItem roundNumber = {guessRoundsLength-itemData.index}
       guess = {itemData.item}
       ></GuessLogItem>)                                          
    }}
    
    >
    </FlatList>    
    </View>
    </View>
)
}
export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex : 1,
        padding : 24
    },
    buttonsContainer :{
        flexDirection :'row'
    },
    buttonView : {
        flex : 1
    },
    instructionText:{
        marginBottom : 12
    },
    text:{
        color : 'white',
        fontSize : 18
    },
    listContainer:{
        flex : 1,
        padding : 16
    }
})