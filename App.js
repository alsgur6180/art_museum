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
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}></StatusBar>
            <Modal
                style={styles.tutorial}
                animationType="slideInSide"
                onBackdropPress={() => setModalVisible(!modalVisible)}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                        resizeMode="stretch"
                        resizeMethod="resize"
                        source={tutorial}
                    ></Image>
                </Pressable>
            </Modal>
            {isLoading ? <Loading /> : <Main />}
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
    tutorial: {
        width: widthPercentageToDP("100%"),
        height: heightPercentageToDP("100%"),
    },
});
