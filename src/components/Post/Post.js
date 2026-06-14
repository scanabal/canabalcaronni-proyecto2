import { useState, useEffect } from 'react';
import { View , StyleSheet, Text, Pressable } from 'react-native';
import { db, auth } from '../firebase/config';
import firebase from 'firebase';

function Post(props){
    const [liked, setLiked] = useState(false);

    useEffect(()=> {
        if (props.post.data.likes.includes(auth.currentUser.email)){
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [props.post.data.likes])

    function actualizarLike(){
        if (liked){
            db.collection('posts')
            .doc(props.post.id)
            .update({
                likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
            })
            .then(()=> setLiked(false))
            .catch(e => console.log(e))
        }
        else{
            db.collection('posts')
            .doc(props.post.id)
            .update({
                likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
            })
            .then(()=> setLiked(true))
            .catch(e => console.log(e))
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.post.data.email}</Text>
            <Text style={styles.descripcion}>{props.post.data.descripcion}</Text>

            <View>
                <Text style={styles.likes}>{props.post.data.likes.length}</Text>

                <Pressable style={styles.boton} onPress={actualizarLike}>
                    {liked ?
                    <Text>Quitar Like</Text>
                    : 
                    <Text>Me gusta</Text>}
                </Pressable>

                <Pressable style={styles.boton} onPress={() => props.navigation.navigate('Comentarios', {id: props.post.id})}>
                    <Text style={styles.textBtn}>Comentar</Text>
                </Pressable>
            </View>
        </View>
)}

export default Post;