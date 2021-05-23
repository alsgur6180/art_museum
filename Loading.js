import { StatusBar } from "expo-status-bar";

import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

import logo from "./icons/museum_icon.png";

export default function Loading() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>
            <Text style={styles.font}>방구석 미술관</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    font: {
        fontSize: 40,
    },
    logo: {
        width: 60,
        height: 60,
    },
});
