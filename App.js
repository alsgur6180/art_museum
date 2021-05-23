import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";
import Main from "./Main";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true}></StatusBar>
            <Main></Main>
            {/* {isLoading ? <Loading /> : <Main />} */}
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
});
