import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { db, auth } from '../firebase/config';

function CrearPost(props) {
    const [descripcion, setDescripcion] = useState('');

    const enviarPost = () => {
        db.collection('posts').add({
            email: auth.currentUser.email,
            descripcion: descripcion,
            fecha: Date.now(),
            likes: [], 
        })
        .then(() => {
            setDescripcion('');
            props.navigation.navigate('Home'); 
        })
        .catch(e => console.log(e));
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear Posteo</Text>
            <TextInput 
                style={styles.input} 
                keyboardType="default" 
                placeholder="Escribe una descripción..." 
                onChangeText={text => setDescripcion(text)} 
                value={descripcion} />
                
            <Pressable style={styles.btn} onPress={enviarPost}>
                <Text style={styles.textBtn}>Publicar</Text> 
            </Pressable>
        </View>
    );
}
export default CrearPost;