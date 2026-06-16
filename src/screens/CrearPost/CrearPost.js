import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { db, auth } from '../../firebase/config';

function CrearPost(props) {
    const [descripcion, setDescripcion] = useState('');

    function enviarPost() {
        db.collection('posts').add({
            email: auth.currentUser.email,
            descripcion: descripcion,
            createdAt: Date.now(),
            likes: [], 
        })
        .then(() => {
            setDescripcion('');
            props.navigation.navigate('Home'); 
        })
        .catch(e => console.log(e));
    }
    
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

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#000',
    },
    input: {
        height:45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginVertical: 8,
    },
    btn: {
        backgroundColor: '#2482c9ff',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15,
    },
    textBtn: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CrearPost;