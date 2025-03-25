import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";
import IPost from "./interfaces/post.interface";
import AddPost from "./components/AddPost";

export default function App() {

  const [posts, setPosts] = useState<IPost[]>([]);

  return (
    <View>
      <StatusBar />
      <AddPost posts={posts} setPosts={setPosts} />
    </View>
  );
}
