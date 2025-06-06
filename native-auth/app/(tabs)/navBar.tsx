import {StyleSheet, Text} from "react-native";


export default function NavBar() {
    const styles = StyleSheet.create({
        nav: {
            backgroundColor: 'black',
            marginTop: 3,
            color:'white',
            fontSize: 20,
             fontWeight: 'bold', 
            textAlign: 'center', 
            padding: 10,
            
        }
    })
    return (
        <Text style={styles.nav}>
        Create TodoList
        </Text>
    );

}