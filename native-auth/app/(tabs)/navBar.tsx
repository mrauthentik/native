import {StyleSheet, Text} from "react-native";


export default function NavBar() {
    const styles = StyleSheet.create({
        nav: {
            backgroundColor: 'brown',
            marginTop: 20,
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