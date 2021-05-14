import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import monalisa from "./arts/Mona_Lisa.jpg";

export default function Main(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>방구석 미술관</Text>
            <Image source={monalisa} style={styles.image}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    font: {
        paddingTop: 20,
        height: 80,
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 1,
    },
});
