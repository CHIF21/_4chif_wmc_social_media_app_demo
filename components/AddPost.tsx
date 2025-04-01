import {Button, TextInput, View, Text} from "react-native";
import {useState} from "react";
import IPost from "../interfaces/post.interface";

interface IAddPostProps {
    posts: IPost[];
    setPosts: (posts: IPost[]) => void;
}

function AddPost({posts, setPosts} : IAddPostProps) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function handleSubmit() {
        if(title.trim() === "" || text.trim() === "") return;

        const newPost : IPost = {
            id: new Date(),
            username: "Adrian",
            title,
            text,
            likes: 0,
            dislikes: 0,
            comments: []
        }

        setPosts([...posts, newPost]);
        setTitle("");
        setText("");
    }

    return (
        <View>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder={"Title"}
            />
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder={"Beitrag schreiben..."}
            />
            <Button title={"Post hinzufügen"} onPress={handleSubmit} />
        </View>
    );
}

export default AddPost;