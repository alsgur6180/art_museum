import React, { useState } from "react";
import { Text, StyleSheet, Image, View, Alert, Pressable } from "react-native";
import Modal from "react-native-modal";
import monalisa from "./arts/Mona_Lisa.jpg";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Description from "./Description";

export default function Main(props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View contentContainerStyle={styles.container}>
            <Text style={styles.font}>방구석 미술관</Text>
            <Modal
                animationType="slideInSide"
                onBackdropPress={() => setModalVisible(!modalVisible)}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <Description></Description>
            </Modal>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image source={monalisa} style={styles.image}></Image>
            </Pressable>
        </View>
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
    description: {
        width: wp("10%"),
        height: hp("10%"),
    },
});
