import React from "react";

import { Text, View, StyleSheet, Image } from "react-native";

import BlankStyle from "./BlankStyle";
import Drawings from "./Drawings";

export default function MyPage({ navigation }) {
    return (
        <View style={BlankStyle.container}>
            <View style={styles1.UserView}>
                <Image
                    style={{
                        height: "40%",
                        width: "40%",
                        resizeMode: "contain",
                    }}
                    source={require("./icons/img.png")}
                />
                <Text style={styles1.space}></Text>
                <Text style={styles1.font}>홍길동</Text>
            </View>
            <View style={styles1.favoriteView}>
                <Text>♥</Text>
                <Text>즐겨찾기</Text>
            </View>
            <View style={styles1.drawingView}>
                <Drawings navigation={navigation} />
            </View>
        </View>
    );
}

const styles1 = StyleSheet.create({
    UserView: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    favoriteView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
    },
    drawingView: {
        flex: 6,
        //backgroundColor: 'white',
    },
    space: {
        fontSize: 15,
    },
    font: {
        fontSize: 40,
    },
});
