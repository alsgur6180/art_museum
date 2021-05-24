import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Loading from "./Loading";
import Main from "./Main";

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
