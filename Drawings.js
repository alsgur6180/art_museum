import {
    Pressable,
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
} from "react-native";
import React from "react";
import { Dimensions } from "react-native";

const Drawings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {
                            navigation.navigate("방구석미술관");
                        }}
                    >
                        <Image style={styles.image} source={item.img} />
                    </Pressable>
                )}
                columnWrapperStyle={styles.imageRow}
                numColumns={2}
            />
        </View>
    );
};

const data = [
    {
        id: 1,
        img: require("./arts/Mona_Lisa.jpg"),
    },
    {
        id: 2,
        img: require("./arts/The_Kiss.jpg"),
    },
    {
        id: 3,
        img: require("./arts/Sunflowers.jpg"),
    },
    {
        id: 4,
        img: require("./arts/The_Starry_Night.jpg"),
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent:'center',
        backgroundColor: "white",
    },
    image: {
        //width: 140,
        width: Dimensions.get("window").width / 2,
        height: 150,
        //resizeMode:'contain',
        resizeMode: "cover",
    },
    imageRow: {
        //flexWrap:'wrap',
        // alignContent:'space-around',
        //justifyContent: 'center',
        alignItems: "flex-start",
    },
});

export default Drawings;
