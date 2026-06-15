import { auth } from "../../firebase/config";
import { useState, useEffect } from 'react';
import { Pressable } from "react-native";
import { Text, View, TextInput} from "react-native";

function Comentario(props)
const [comentario, setComentario] = useState("")
const [comentarios, setComentarios] = useState([])
const [post, setPost] = useStete("")

function onSubmit(){
    db.collection("posts").doc(props.route.params.id).update({
        comentarios: firebase.firestore.FieldValue.arrayUnion({
            owner: auth.currentUser.email,
            texto: comentario
        })
    })
    .then(() => {
        setComentario("")
    })
    .catch(e => {
        console.log(e);
    })
}

useEffect(
    () => {
        db.collection("posts").onSnapshot(
            docs => {
                let post
                docs.forEach(doc => {
                    console.log(doc.da)
                })
            }
        )
    }
)