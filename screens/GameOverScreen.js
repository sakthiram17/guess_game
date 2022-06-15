import { Text ,View,Image,StyleSheet} from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton";
function GameOverScreen({rounds,userNumber,onStartNewGame})
{
    return(
        <View style = {styles.rootContainer}>
            <Title>Game Over</Title>
            <View style = {styles.imageContainer}>
            <Image source = {require('../assests/images/success.png')}></Image>
            </View>
            <Text style = {styles.summaryText}>Your Phone needs <Text style = {styles.highlight}>{rounds}</Text> rounds to guess the Number <Text style = {styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress = {onStartNewGame}>Start new Game</PrimaryButton>
       </View>
    
          )
}
export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex : 1,
        padding: 24,
        justifyContent : 'center'
    },
    imageContainer:{
        width : 300,
        height : 300,
        borderRadius : 150,
        borderWidth : 3,
        borderColor:Colors.primary800,
        overflow : 'hidden',
        margin : 36
        },
    image:{
        height : '100%',
        width : '100%'
    },
    summaryText:{
        fontFamily : 'open-sans',
        fontSize : 24,
        color: 'white',
        textAlign : 'center',
        marginBottom : 24
    },
    highlight:{
        fontFamily : 'open-sans-bold',
        color : Colors.primary500

    }

})