import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity , StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <Modal visible={showWelcome} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>You have successfully registered</Text>
            <TouchableOpacity onPress={handleCloseWelcome}>
              <Text style={styles.modalButton}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    marginBottom: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  modalButton: {
    color: 'blue',
    marginTop: 16,
  },
});

export default HomeScreen;