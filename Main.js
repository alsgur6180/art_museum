import React, { useState } from "react";

import {
    StyleSheet,
    Image,
    View,
    Alert,
    TouchableOpacity,
} from "react-native";

import Modal from "react-native-modal";

import ViewPager from "@react-native-community/viewpager";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Description from "./Description";

import { FontAwesome5 } from "@expo/vector-icons";


export default function Main({ navigation, arts, onShare,
     handleClickLike, selectedArts,
     modalVisible, setModalVisible }) {
    return (
        <View style={styles.container}>
            <ViewPager
                style={styles.pager}
                orientation={"vertical"}
                pageMargin={20}
                initialPage={0}
            >
                {
                    arts.map(({id}) => (
                    <>
                        <Modal
                            animationType="slideInSide"
                            onBackdropPress={() => setModalVisible(modalVisible)}
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(modalVisible);
                            }}
                        >
                        <Description 
                            arts={arts} 
                            id={id}
                            onShare={onShare} 
                            handleClickLike={ handleClickLike }
                            selectedArts={selectedArts}
                        >
                        </Description>
                        </Modal>
                        <View style={styles.page} key={ id }>
                            <Image source={arts[id].img} style={styles.image}></Image>
                        </View>
                    </>
                    ))
                }              
            </ViewPager>

            <TouchableOpacity
                onPress={() => setModalVisible(modalVisible)}
                style={styles.info}
            >
            <FontAwesome5 name="info" size={40} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("???????????????")}
                style={styles.user}
            >
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
