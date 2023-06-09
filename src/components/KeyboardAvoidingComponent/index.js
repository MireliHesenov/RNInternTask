import React from 'react'
import {KeyboardAvoidingView , TouchableWithoutFeedback , StyleSheet , Keyboard} from "react-native"

const KeyboardAvoidingComponent = (props) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {props.children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });
  
  export default KeyboardAvoidingComponent;