import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';


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

    return (
        
    )
}