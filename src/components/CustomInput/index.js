import React, { useState } from 'react'
import { TextInput, View , StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const icons = {
    email:"email-outline",
    password: "lock-outline",

}
const  CustomInput = ({iconName, placeholder, onChange , value, error , numeric , password }) => {
    const [hasFocus , setFocus ] = useState(false)
    const keyboardType = numeric ? 'numeric' : 'default';

  return (
    <View>
        <View style={[styles.container , error && { borderColor:"red"} , hasFocus && {borderColor:"#005B96"}]}>
        <Icon 
        name={iconName}  
        size={20} 
        color="#005B96"/>

        <TextInput 
        style={styles.input} 
        secureTextEntry={password} 
        keyboardType={keyboardType}
        onChangeText={onChange} 
        value={value} 
        placeholder={placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        />
    </View>
    
     {error !== "" ? <Text style={styles.errorText}>{error}</Text> : false}
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:1,
        paddingHorizontal:8,
        backgroundColor:"#fff",
        marginTop:12,
        borderRadius:4,
        flexDirection:"row",
        alignItems:"center",
        shadowColor: '#000',
        shadowOffset: {width: 2, height:2},
        shadowOpacity: 1,
        shadowRadius: 1,
        borderWidth: 1,
        borderColor: "transparent",
    },
    input:{
        flex:1
    },
    errorText:{
        color:"red"
    }
})

export default  CustomInput