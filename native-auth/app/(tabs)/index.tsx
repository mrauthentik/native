import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function App () {
  const handlePress = () => {
    alert('Button has been Pressed!')
  };
  const handleLongPress = () => {
    alert('Button has been Long Pressed!')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App!</Text>
      <Button title="Press Me" onPress={handlePress} />
      <Text style={styles.text}>This is a simple button example.</Text>
      <Text style={styles.text}>You can customize it further.</Text>
        <Text style={{color:'teal', fontSize:18}}> Long Press this Button below</Text>
      <TouchableOpacity onLongPress={handleLongPress} style={{ marginTop: 20, padding: 10, backgroundColor: '#007BFF', borderRadius: 5 }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Custom Touchable Button</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    fontFamily: 'Arial'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})