import React , {useState} from 'react'
import { Text, View , StyleSheet , TouchableOpacity} from 'react-native'
import CustomInput from '../../components/CustomInput'
import { useSelector } from 'react-redux'
import FormButton from '../../components/FormButton'

const SetupScreen = ({navigation}) => {
    const currentCountry = useSelector(state=> state.country.currentCountry);
    const [phoneNumber, setPhone] = useState("")
    const [error , setError] = useState("");

    const isNumberValid = (number) =>{
        if(!number){
            setError("Please type your phone number")
            return false
        }
        if(number.length !== currentCountry.phoneLength){
            setError(currentCountry.name + "'s phone number must be " + currentCountry.phoneLength + " length")
            return false
        }else{
            setError("")
            return true;
        }
        
    }

    const onSubmit = () => {
        isNumberValid(phoneNumber) && navigation.navigate("HomeScreen")
    }
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.phoneIndex} onPress={() => navigation.push("CountryScreen")}><Text>{currentCountry ? currentCountry.countrycode : "select"}</Text></TouchableOpacity>
        <View style={styles.phoneNumber}><CustomInput placeholder="Phone" numeric={true} onChange={(text) => setPhone(text)} value={phoneNumber} error={error}  /></View>
        </View>
            <FormButton onPress={() => onSubmit}> 
                Get Started
            </FormButton>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    },
    inputContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    phoneIndex:{
        padding:4
    },
    phoneNumber:{
        flex:1,
        alignItems:"stretch"
    },
})

export default SetupScreen