import React from "react";
import { Text, StyleSheet, Image, ScrollView } from "react-native";
import monalisa from "./arts/Mona_Lisa.jpg";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function Main(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.font}>방구석 미술관</Text>
            <Image source={monalisa} style={styles.image}></Image>
            <Image source={monalisa} style={styles.image}></Image>
            <Image source={monalisa} style={styles.image}></Image>
            <Image source={monalisa} style={styles.image}></Image>
            <Image source={monalisa} style={styles.image}></Image>
            <Image source={monalisa} style={styles.image}></Image>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginBottom: 20,
    },
    font: {
        textAlign: "center",
        paddingTop: 20,
        height: 80,
        fontSize: 30,
    },
    image: {
        flex: 1,
        width: wp("90%"),
        height: hp("90%"),
        paddingTop: 20,
    },
});
