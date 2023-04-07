import React from 'react'
import { Text, TouchableOpacity , StyleSheet } from 'react-native'

const FormButton = (props) => {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={props.onPress()}>
            <Text style={styles.buttonText}> 
                {props.children}
            </Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: "#005B96",
        padding: 8,
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
    buttonText: {
        color: "#fff",
        justifyContent: "center",
        fontSize: 16
    }
})
export default FormButton