import { auth } from "../../firebase/config";
import { useState, useEffect } from 'react';
import { Pressable } from "react-native";
import { Text, View, TextInput} from "react-native";
import { ActivityIndicator, FlatList } from "react-native-web";

function ComentarPost(props){
const [comentario, setComentario] = useState("")
const [comentarios, setComentarios] = useState([])
const [post, setPost] = useStete("")
}
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
                    console.log(doc.data());
                    if (doc.id == props.route.params.id) {
                        post = { id: doc.id, data: doc.data () }
                    }
                })
                setPost(post)
                setComentarios(post.data.comentarios)
            }
        )
    },
    []
)
// return(
// <View> {/* style={styles.container} */}
// <Text> {/* style={styles.title} */} Comentar Post</Text>
// {post.data ? <View> <Text {/* style={styles.texto} */} >{post.data.owner}</Text>
// <Text {/* style={styles.texto} */}>{post.data.texto}</Text></View> : <ActivityIndicator></ActivityIndicator>
// <TextInput
// // style={styles.input}
// placeholder="agregar un comentario"
// onChange={text => setComentario(text)}
// value={comentario}
// />

// <Pressable onPress={() => onSubmit()}>
//     {/* <Text style={styles.buton}>Comentar</Text> */}
// </Pressable>
// <FlatList
// data={comentarios}
// keyExtractor={(item,index) => index.toString()}
// renderItem={({item}) => (
//     <View style={}
// )
// }

export default ComentarPost

