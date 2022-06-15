import { Text,StyleSheet } from "react-native";
import Colors from "../constants/colors";
function Title(props)
{
    return(
        <Text style = {styles.title}>
            {props.children}
        </Text>
    )
}
const styles = StyleSheet.create({
   
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 20,
        color : 'white',
        textAlign : 'center',
        borderWidth : 2,
        padding : 12,
        borderColor :'white',
        marginTop: 150
    }
    })

    export default Title;