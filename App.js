import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Loading from "./Loading";
import Modal from "react-native-modal";
import Main from "./Main";
import tutorial from "./assets/tutorial.png";
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from "react-native-responsive-screen";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const startMain = () => {
        setTimeout(() => setIsLoading(false), 3000);
    };
    startMain();
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}></StatusBar>
            <View>{isLoading ? <Loading /> : <Main />}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    font: {
        fontSize: 40,
    },
});
