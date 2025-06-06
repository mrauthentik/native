import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import NavBar from './navBar';

export default function State(){
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);

    const handleAddTask = () =>{
        if(task.trim()){
            setTasks([...tasks, {id: Date.now().toString(), text: task}]);
            setTask('');
        }
    }

    const handleDeleteTask = (id:string) => {
        setTasks (tasks.filter((task)=> task.id !== id))
    }

    const styles = StyleSheet.create({
  container: {
    // flex: 0,
    width: '100%',
    flexDirection: 'column',
    padding: 50,
    backgroundColor: '#f5f5f5',
    minHeight:1000,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  deleteText: {
    color: 'red',
    fontSize: 18,
  },
});

    return (
        <View style={styles.container}> 
         <NavBar/>
            <Text style = {styles.title}> To-Do-List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder='Add a new task...'
                value={task}
                onChangeText={setTask}
                />
                    <Button title='Add Task' onPress={handleAddTask} />

            </View>
                 <FlatList
                  data={tasks}
                  keyExtractor={(item)=> item.id}
                  renderItem={({item})=> (
                    <View style={styles.taskItem}>
                        <Text> {item.text}</Text>
                        <TouchableOpacity onPress={()=> handleDeleteTask(item.id)}>
                            <Text style={styles.deleteText}>Delete🗑️</Text>
                        </TouchableOpacity>
                    </View>
                  )}
                 >
                    
                    </FlatList>   
        </View>
    )

}