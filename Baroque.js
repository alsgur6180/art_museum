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
import monalisa from "./arts/Mona_Lisa.jpg";
import kiss from "./arts/The_Kiss.jpg";
import self_portrait from "./arts/Self_Portrait.jpg";
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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>방구석 미술관</Text>
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
                        <Description name={"monalisa"}></Description>
                    </Modal>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={monalisa} style={styles.image}></Image>
                    </Pressable>
                </View>
                <View style={styles.page} key="2">
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={kiss} style={styles.image}></Image>
                    </Pressable>
                </View>
                <View style={styles.page} key="3">
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image
                            source={self_portrait}
                            style={styles.image}
                        ></Image>
                    </Pressable>
                </View>
            </ViewPager>

            <TouchableOpacity
                onPress={() => navigation.navigate("청기사파")}
                style={styles.user}
            >
                <FontAwesome5 name="user" size={40} color="gray" />
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "center",
    },
    loading: {
        position: "absolute",
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
