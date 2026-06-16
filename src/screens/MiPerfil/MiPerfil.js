import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { db, auth } from '../../firebase/config';
import Post from './../../components/Post/Post'; 

function MiPerfil(props) {
    const [userPosts, setUserPosts] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        db.collection('users')
            .where('email', '==', auth.currentUser.email)
            .onSnapshot(docs => {
                docs.forEach(doc => {
                    setUserInfo(doc.data());
                });
            });

        db.collection('posts')
            .where('email', '==', auth.currentUser.email)
            .onSnapshot(docs => {
                let posts = [];
                docs.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    });});
                setUserPosts(posts);
            });
    }, []);

    function logout() {
        auth.signOut()
            .then(() => {
                props.navigation.navigate('Login');})
            .catch(e => console.log(e));}

    return (
        <View style={styles.container}>
            <View style={styles.datos}>
                <Text style={styles.info}>Nombre de usuario: {userInfo.username} </Text>
                <Text style={styles.info}>Email: {auth.currentUser.email}</Text>
                <Text style={styles.titulo}>Ultimos posteos</Text>
            </View>

            <FlatList
                data={userPosts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Post post={item} navigation={props.navigation} />)}
            />

            <Pressable style={styles.logoutBtn} onPress={logout}>
                <Text style={styles.logoutText}>Cerrar sesion</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 20,
    },
    datos: {
        marginBottom: 10,
    },
    info: {
        fontSize: 16
    },
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    logoutBtn: {
        backgroundColor: '#2482c9ff',
        paddingVertical: 6,
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center',
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default MiPerfil;
