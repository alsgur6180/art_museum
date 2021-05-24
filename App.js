import React, { useState } from "react";

import { StyleSheet, View } from "react-native";

import Loading from "./Loading";

import Main from "./Main";

import MyPage from './MyPage';

import DetailsPage from './DetailsPage';

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

export default function App() {
    const [ state, setState ] = useState({
        isLoading: true,
    });

    const startMain = () => {
        setTimeout(() => {
            setState({
                isLoading: false,
            })
        }, 3000);
    }
    
    const leftAction = () => {
        return (
            <DetailsPage styles={styles} />
        )
        
    }

    const rightAction = () => {
        return (
            <MyPage styles={styles} />
        )
        
    }

    startMain();

    const { isLoading } = state;

    return (
        <View style={styles.container}>
            { isLoading ? <Loading />
                : <Main 
                    leftAction={ leftAction }
                    rightAction={ rightAction }
                  /> 
            }
        </View>
    );
}


