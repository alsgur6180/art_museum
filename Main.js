import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    Image,
    View,
    Alert,
    Pressable,
    Button,
    TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import monalisa from "./arts/Mona_Lisa.jpg";
import ViewPager from "@react-native-community/viewpager";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Description from "./Description";

export default function Main(props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>방구석 미술관</Text>
                <Button title={"마이페이지"}></Button>
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
                        <Description></Description>
                    </Modal>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={monalisa} style={styles.image}></Image>
                    </Pressable>
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
                        <Description></Description>
                    </Modal>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={monalisa} style={styles.image}></Image>
                    </Pressable>
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
                        <Description></Description>
                    </Modal>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={monalisa} style={styles.image}></Image>
                    </Pressable>
                </View>
            </ViewPager>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: "center",
        alignItems: "center",
    },
    description: {
        width: wp("10%"),
        height: hp("10%"),
    },
});
