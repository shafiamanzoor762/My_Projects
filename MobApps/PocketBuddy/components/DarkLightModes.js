import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Appearance } from 'react-native-appearance';


const DarkLightModeToggle = () => {
    const [currentMode, setCurrentMode] = useState('light'); // Initialize with 'light' mode
  
    const toggleMode = () => {
      const newMode = currentMode === 'light' ? 'dark' : 'light';
      setCurrentMode(newMode);
    };
  
    return (
      <View
        style={[
          styles.container,
          currentMode === 'dark' ? styles.darkMode : styles.lightMode,
        ]}
      >
        <Text>Hello, Dark and Light Mode!</Text>
        <Button title="Toggle Mode" onPress={toggleMode} />
      </View>
    );
  };
  
  export default DarkLightModeToggle;

  
const styles = StyleSheet.create({
    darkMode: {
      backgroundColor: 'black',
      color: 'white',
    },
    lightMode: {
      backgroundColor: 'white',
      color: 'black',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
