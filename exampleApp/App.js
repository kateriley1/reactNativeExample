import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Modal from "react-native-modal";

export default function App() {
  const [clickCount, updateClickCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const buttonClicked = () => {
    updateClickCount(clickCount + 1);
  };
  const resetClicked = () => {
    updateClickCount(0);
    setIsModalVisible(() => !isModalVisible)
  };

{/* <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={handleModal} /> */}

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Click me!" onPress={buttonClicked} />
      <Text>Button has been clicked {clickCount} times</Text>
      <Button title="Reset" onPress={resetClicked} />
      <Modal isVisible={isModalVisible}>
        <View style={styles.container}>
        {/* title="Count will be reset" */}
        <Text>Count has been reset!</Text>
          <Button title="Hide modal" onPress={resetClicked} />
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
