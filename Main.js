import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    Image,
    View,
    Alert,
    TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import monalisa from "./arts/Mona_Lisa.jpg";
import kiss from "./arts/kiss.jpg";
import self_portrait from "./arts/self_portrait.jpg";
import ViewPager from "@react-native-community/viewpager";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Description from "./Description";
import MyPage from "./MyPage";
import Loading from "./Loading";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Main(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const toMypage = () => {
        return <Loading />;
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>방구석 미술관</Text>
            </View>
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

                    <Image source={monalisa} style={styles.image}></Image>
                </View>
                <View style={styles.page} key="2">
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
                        <Description name={"kiss"}></Description>
                    </Modal>

                    <Image source={kiss} style={styles.image}></Image>
                </View>
                <View style={styles.page} key="3">
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
                        <Description name={"self_portrait"}></Description>
                    </Modal>

                    <Image source={self_portrait} style={styles.image}></Image>
                </View>
            </ViewPager>
            <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.info}
            >
                <FontAwesome5 name="info" size={40} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toMypage} style={styles.user}>
                <FontAwesome5 name="user" size={40} color="gray" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginBottom: 20,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    title: {
        textAlign: "center",
        paddingTop: 20,
        height: 80,
        fontSize: 30,
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
    info: {
        position: "absolute",
        left: 20,
        top: 350,
    },
    user: {
        position: "absolute",
        right: 20,
        top: 350,
    },
});
