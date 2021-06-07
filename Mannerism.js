import React, { useState } from "react";
import {
    StyleSheet,
    Image,
    View,
    Alert,
    TouchableOpacity,
    Text,
    Pressable,
} from "react-native";
import Modal from "react-native-modal";
import viewOfToledo from "./arts/mannerism/View_of_Toledo.jpg";
import nobleman from "./arts/mannerism/The_Nobleman.jpg";
import carmignano from "./arts/mannerism/Carmignano.jpg";
import tutorialImage from "./assets/tutorial.jpg";
import ViewPager from "@react-native-community/viewpager";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Description from "./Description";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function Main({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [tutorial, setTutorial] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>방구석 미술관</Text>
            <Modal
                animationType="slideInSide"
                onBackdropPress={() => setTutorial(!tutorial)}
                transparent={true}
                visible={tutorial}
            >
                <Pressable onPress={() => setTutorial(!tutorial)}>
                    <Image
                        source={tutorialImage}
                        style={styles.tutorial}
                    ></Image>
                </Pressable>
            </Modal>
            <ViewPager
                style={styles.pager}
                orientation={"vertical"}
                pageMargin={20}
                initialPage={0}
            >
                <View style={styles.page} key="1">
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
                        <Description name={"view_of_toledo"}></Description>
                    </Modal>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image
                            source={viewOfToledo}
                            style={styles.image}
                        ></Image>
                    </Pressable>
                </View>
                <View style={styles.page} key="2">
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={nobleman} style={styles.image}></Image>
                    </Pressable>
                </View>
                <View style={styles.page} key="3">
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={carmignano} style={styles.image}></Image>
                    </Pressable>
                </View>
            </ViewPager>

            <TouchableOpacity
                onPress={() => navigation.navigate("페미니즘미술")}
                style={styles.user}
            >
                <FontAwesome5 name="user" size={40} color="gray" />
            </TouchableOpacity>
            <StatusBar hidden={true} visible={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "center",
    },
    tutorial: {
        position: "absolute",
        resizeMode: "cover",
        top: -400,
        left: -25,
        opacity: 0.6,
    },
    title: {
        textAlign: "center",
        paddingTop: 10,
        height: 60,
        fontSize: 30,
        backgroundColor: "#F0F0F0",
    },
    pager: {
        flex: 1,
        width: wp("100%"),
    },
    page: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    description: {
        width: wp("10%"),
        height: hp("10%"),
    },

    user: {
        position: "absolute",
        right: 20,
        top: 10,
    },
    image: {
        resizeMode: "contain",
        backgroundColor: "black",
    },
});
