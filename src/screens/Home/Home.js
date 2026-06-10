import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { db, auth } from '../firebase/config';
import Post from '../Post/Post'; 

function Home(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                props.navigation.navigate('Login');
            }
        });}, []);

    useEffect(() => {
    db.collection('posts').orderBy('fecha', 'desc').onSnapshot(docs => {
        let postsArray = [];
        docs.forEach(doc => {
            postsArray.push({
                id: doc.id,
                data: doc.data() 
            });
        });
        setPosts(postsArray);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Post post={item} navigation={props.navigation} />
                )}
            />
        </View>
    );
}

//styles
//styles.container

export default Home;
