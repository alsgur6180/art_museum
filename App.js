import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import Loading from "./Loading";

import Main from "./Main";

export default function App() {
    const [ state, setState ] = useState({
        isLoading: true,
    });

    function startMain(){
        setTimeout(() => {
            setState({
                isLoading: false,
            })
        }, 3000);
    }
    
    startMain();

    const { isLoading } = state;

    return (
        <View style={ styles.container }>
            { isLoading ? <Loading /> : <Main /> }
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
