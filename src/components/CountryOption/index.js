import React from 'react'
import { TextInput, View , StyleSheet, Text , TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { setCurrentCountry } from '../../store/countryReducer'
import { useNavigation } from '@react-navigation/native'


const CountryOption = ({country}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleClick = (countryCode) =>{
        console.log(countryCode)
        dispatch(setCurrentCountry(countryCode))
        navigation.navigate("SetupScreen");
    }
  return (
    <TouchableOpacity style={styles.countryOption} onPress={() => handleClick(country)}>
        <Text style={styles.countryCode}>{country.countrycode}</Text>
        <Text style={styles.countryName}>{country.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    countryOption:{
        padding:8,
        flexDirection:"row",
        backgroundColor:"#005B96",
        alignSelf:"stretch",
        alignItems:"center",
        marginBottom:8
    },
    countryCode:{
        color:"#fff",
        fontWeight:"bold",
        fontSize: 12
    },
    countryName:{
        color:"#fff",
        marginLeft:10,
        fontSize: 16
    
    }
})
export default CountryOption