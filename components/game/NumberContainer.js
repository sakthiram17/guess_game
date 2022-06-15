import {Text,View,StyleSheet} from 'react-native'
import Colors from '../../constants/colors'
function NumberContainer({children})
{
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{children}</Text>
        </View>
        )

}
const styles = StyleSheet.create({
    container: {
        borderWidth  : 4,
        borderColor : Colors.accent500,
        padding : 24,
        margin : 24,
        alignItems :'center',
        justifyContent : 'center',
        fontFamily:'open-sans-bold'
    },
    text :{
        color : Colors.accent500
    }
})
export default NumberContainer