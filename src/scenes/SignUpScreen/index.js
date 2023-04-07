import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import CustomInput from '../../components/CustomInput'
import FormButton from '../../components/FormButton';
import KeyboardAvoidingComponent from '../../components/KeyboardAvoidingComponent';
const SingupScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });


    const emailValidation = (email) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(reg.test(email) === true){
            return null
        }else{
            return "Email is not Valid"};
    }
    const passwordValidation= (password, repeatPassword) => {
        if (password.length <= 6) {
        return "Password must be longer than 6";
        }
        if (password !== repeatPassword) {
        return "Passwords are not equal";
        }
        return null;
        };

    const handleValidation = () =>{
        const isEmail= emailValidation(email);
        const isPasswordValid = passwordValidation(password,repeatPassword);
        setErrors({email:isEmail , password:isPasswordValid});

        return !isEmail && !isPasswordValid
    }
    
    const onSubmit = () => {
        handleValidation() && navigation.navigate("SetupScreen")
      }

    return (
        <KeyboardAvoidingComponent>
            <View style={styles.container}>
            <CustomInput iconName="email-outline" placeholder="email" onChange={(text) => setEmail(text)} value={email} error={errors.email} />
            <CustomInput iconName="lock-outline" password placeholder="password" onChange={(text) => setPassWord(text)} value={password} error={errors.password} />
            <CustomInput iconName="lock-outline" password placeholder="repeat password" onChange={(text) => setRepeatPassword(text)} value={repeatPassword} error={errors.password} />
            <FormButton onPress={() => onSubmit}>Submit</FormButton>
        </View>
        </KeyboardAvoidingComponent>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        padding: 16,
        backgroundColor: "#F5F5F5",
    },
})

export default SingupScreen