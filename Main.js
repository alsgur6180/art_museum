import React from "react";

import { Text, StyleSheet, ImageBackground, View } from "react-native";

import monalisa from "./arts/Mona_Lisa.jpg";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Swipeable from 'react-native-gesture-handler/Swipeable';

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
        width: wp("100%"),
        height: hp("90%"),
    },
});

export default function Main({ leftAction, rightAction }) {
    return (
        <View styles={ styles.container }>
            <Text style={styles.font}>방구석 미술관</Text>
            <ImageBackground  
                source={monalisa} 
                style={styles.image}
            >
                <Swipeable
                    containerStyle={{
                        width: '100%',
                        height: '100%',
                    }}
                    renderRightActions={ rightAction }
                    renderLeftActions={ leftAction }             
                >                                 
                </Swipeable>
            </ImageBackground >
        </View>
    );
}


