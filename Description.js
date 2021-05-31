import React from "react";
import { StyleSheet, Text, View, Share, TouchableOpacity } from "react-native";
import { Octicons, FontAwesome5 } from "@expo/vector-icons";

const Description = ({ arts, id, onShare,
    handleClickLike, selectedArts }) => {

    function checkLike(selectedArts) {
        if (selectedArts === undefined) {
            return "white";
        }
        const targetId = selectedArts.find((artId) => artId === id);
        return targetId !== undefined  ? "#ED4956" : "white";
    }

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <Text style={styles.title}>{arts[id].title}</Text>
                    <Text style={styles.year}>({arts[id].year})</Text>
                </View>
                <View>
                    <Text style={styles.author}>{arts[id].author}</Text>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={onShare}>
                        <FontAwesome5
                            name="share"
                            size={32}
                            color="white"
                        ></FontAwesome5>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClickLike(id)}>
                        <Octicons
                            name="heart"
                            size={32}
                            color={checkLike(selectedArts)}
                        ></Octicons>
                    </TouchableOpacity>
                </View>
                <Text numberOfLines={11} style={styles.description}>
                    {arts[id].description}
                </Text>
            </View>
        </View>
    );
};

export default Description;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    modal: {
        width: "80%",
        height: "70%",
        backgroundColor: "rgba(0,0,0,0.2)",
        paddingVertical: 60,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginTop: 0,
    },
    header: {
        margin: 10,
    },
    title: {
        margin: 2,
        color: "white",
        fontSize: 36,
    },
    year: {
        color: "rgb(255,255,255)",
    },
    author: {
        margin: 10,
        color: "rgb(255,255,255)",
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    icon: {
        width: 40,
        height: 40,
        marginHorizontal: 50,
        color: "white",
    },
    description: {
        lineHeight: 20,
        textAlign: "justify",
        color: "white",
    },
});
