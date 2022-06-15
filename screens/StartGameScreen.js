import {TextInput,Pressable,View,StyleSheet,Alert,
     ProgressViewIOSComponent,Text} from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/card';
import InstructionText from '../components/instructionText';
function StartGameScreen(props){
    const [enteredNumber, setEnteredNumber ] = useState('')
    function numberInputHandler(enteredText)
    {  
        setEnteredNumber(enteredText)
    }
    function resentInputHandler ()
    {
        setEnteredNumber('')
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber)
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber>=99)
        {
            Alert.alert('Invalid number!','The number has to be between 1 and 99',
            [{text:'OKAY',style :'destructive', onPress : resentInputHandler}])
            return;
        }
        props.onPickNumber(chosenNumber)
    }
    return(
        <View style = {styles.rootContainer}>
            <Title>Guess My Number</Title>
        <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput style = {styles.numberInput} 
        maxLength = {2}
        keyboardType = 'number-pad'
        autoCapitalize='none'
        autoCorrect = {false}
        value = {enteredNumber}
        onChangeText = {numberInputHandler}
        ></TextInput>
        <View style = {styles.buttonsContainer}>
        <View style = {styles.buttonView}>
            <PrimaryButton onPress = {confirmInputHandler}>CONFIRM</PrimaryButton></View>
        <View style = {styles.buttonView}>
            <PrimaryButton onPress = {resentInputHandler}>RESET</PrimaryButton></View>
        </View>
        </Card>
        </View>
        
        )

}
const styles = StyleSheet.create({
    rootContainer:{
        flex : 1,
        marginTop : 100,
        alignItems : 'center'
    },
    inputContainer:{
        padding : 16,
        marginTop : 36,
        marginHorizontal : 24,
        backgroundColor : Colors.primary800,
        borderRadius : 8,
        elevation : 4,
        shadowColor : 'black',
        shadowOffset : {width : 0,height: 2},
        shadowRadius : 6,
        shadowOpacity : 0.25,
        display : 'flex',
        alignItems : 'center'
    },
    numberInput : {
        height : 50,
        width : 50,
        fontSize  :32,
        borderBottomColor : Colors.accent500,
        borderBottomWidth : 2,
        color : Colors.accent500,
        marginVertical : 8,
        fontWeight : 'bold',
        textAlign : 'center',

    },
    buttonsContainer :{
        flexDirection :'row'
    },
    buttonView : {
        flex : 1
    },
   
})

export default StartGameScreen;