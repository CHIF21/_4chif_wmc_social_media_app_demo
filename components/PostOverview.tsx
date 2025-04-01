import IPost from "../interfaces/post.interface";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';

interface IPostOverviewProps {
    posts: IPost[];
    handleOnLikes: (post: IPost) => void;
    handleOnDislikes: (post: IPost) => void;
}

function PostOverview({posts, handleOnLikes, handleOnDislikes} : IPostOverviewProps) {
    return (

        // FlatList ist eine optimierte Komponente zur Darstellung von Listen in React Native
        // Sie ist effizienter, da nur die sehbare "Items" gerendert wird
        <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <>
                    <Text>{item.username}</Text>
                    <Text>{item.title}</Text>
                    <Text>{item.text}</Text>
                    <View>
                        {/* TouchableOpacity ist ein Container, der auf Klick-Interaktionen reagiert */}
                        {/* Hier wird er verwendet, um das Like-Icon klickbar zu machen */}
                        <TouchableOpacity onPress={() => handleOnLikes(item)}>
                            {/* Ionicons gibt es nur im Expo Framework -> sonst auch react-icons package verwendbar */}
                            <Ionicons name="thumbs-up" />
                        </TouchableOpacity>
                        <Text>{item.likes}</Text>
                        <TouchableOpacity onPress={() => handleOnDislikes(item)}>
                            <Text>{item.dislikes}</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        />
    );
}

export default PostOverview;