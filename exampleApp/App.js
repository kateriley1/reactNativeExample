import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Switch } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [name, setName] = useState("");

  const changeText = (value) => (
    setName(value)
  )

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <Text>There have been {clickCount} clicks</Text>
        <Button color="#1E6738" title="Press me" onPress={() => setClickCount(clickCount + 1)}></Button>
      </View>
      <View style={styles.padding}>
        <Text>Not at all dangerous switch...</Text>
        <Switch style={styles.switch} trackColor={{ false: "#FFFFFF", true: "#EQDDED" }} thumbColor={isEnabled ? "FX33ED" : "#FDESDE" } onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={styles.padding}>
        <TextInput style={styles.input} onChangeText={newText => changeText(newText)} placeholder="Please enter your name"/>
        <Text style={isEnabled ? styles.veryJazzy: styles.jazzy}> Hi {name} </Text>
      </View>
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
  padding: {
    backgroundColor: '#fff',
    padding: '50px',
  },
  input: {
    padding: '10px'
  },
  jazzy: {
    fontSize: '10em',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'red'
  },
  veryJazzy: {
    fontSize: '10em',
    fontWeight: 'bold',
    fontFamily: "Comic Sans MS",
    color: 'white',
    backgroundColor: 'green'
  },
  switch: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
