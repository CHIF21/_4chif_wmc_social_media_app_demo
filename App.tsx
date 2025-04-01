import { StatusBar } from 'expo-status-bar';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import IPost from "./interfaces/post.interface";
import AddPost from "./components/AddPost";
import PostOverview from "./components/PostOverview";
import ScrollView = Animated.ScrollView;

export default function App() {

  const [posts, setPosts] = useState<IPost[]>([]);

  function handleLikes(post : IPost) {
      const updatePost = posts.map((p: IPost) => {return p.id === post.id ? { ...post, likes: post.likes+1} : post});
      setPosts(updatePost);
  }

    function handleDislikes(post : IPost) {
        const updatePost = posts.map((p: IPost) => {return p.id === post.id ? { ...post, dislikes: post.dislikes+1} : post});
        setPosts(updatePost);
    }

  return (
    <ScrollView style={{height: 2000}}>
        <StatusBar />
        <AddPost posts={posts} setPosts={setPosts} />
        <PostOverview posts={posts} handleOnLikes={handleLikes} handleOnDislikes={handleDislikes} />
    </ScrollView>
  );
}
