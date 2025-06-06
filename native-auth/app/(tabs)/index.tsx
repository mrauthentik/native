import { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import { useRouter } from "expo-router";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator()


export default function App () {

  const [count, setCount] = useState(0);
  const router = useRouter()

  function HomeScreen () {
    return <Text>Home Screen</Text>
  }


  const countHandler = () => {
    setCount(count + 1);
    alert(`Button pressed ${count + 1} times`);
  }

  const navigate = () => {
    router.push("/(tabs)/state")
    
  }


  return (
    <View style={{ flex: 1 }}>
     

    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App!</Text>
      <Button title="Go to TO-DO APP" onPress={navigate} />
      <Text style={styles.text}>This is a simple button example.</Text>
      <Text style={styles.text}>You can customize it further.</Text>
        <Text style={{color:'teal', fontSize:18}}> Long Press this Button below</Text>
      {/* <TouchableOpacity onLongPress={handleLongPress} style={{ marginTop: 20, padding: 10, backgroundColor: '#007BFF', borderRadius: 5 }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Custom Touchable Button</Text>
      </TouchableOpacity> */}

      <Button title={`Count: ${count}`} onPress={countHandler}></Button>
    
    </View>
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