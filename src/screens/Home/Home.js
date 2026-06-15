// import { useState, useEffect } from 'react';
// import { View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
// import { db, auth } from '../../firebase/config';
// import Post from './../../components/Post/Post'

// function Home(props) {

//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         auth.onAuthStateChanged(user => {
//             if (!user) {
//                 props.navigation.navigate('Login');
//             }
//         });}, [])

//     useEffect(() => {
//         db.collection('posts').orderBy('createdAt', 'desc').onSnapshot(docs => {
//             let postsArray = [];
//             docs.forEach(doc => {
//                 postsArray.push({
//                     id: doc.id,
//                     data: doc.data() 
//                 });
//             });
//             setPosts(postsArray)
//             setLoading(false);
//             }
//         );}
//         , []);

//     return (
//         <View>
//             <Text>Home</Text>
//             {loading 
//             ? <ActivityIndicator/> 
//             : <FlatList
//                 data={posts}
//                 keyExtractor={item => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <Post post={item} navigation={props.navigation} />
//                 )}
//             />}
//         </View>
//     );
// }

// // // //styles
// // // //styles.container

// export default Home;