import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Share,
    TouchableOpacity,
} from "react-native";
import heart_1 from "./icons/heart_1.png";
import heart_2 from "./icons/heart_2.png";
import share from "./icons/share.png";

const Description = () => {
    const [heart, setHeart] = useState(heart_1);
    const [like, setLike] = useState(false);
    const likeToggle = () => {
        setLike(!like);
        if (like == "true") {
            setHeart(heart_2);
        }
    };
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    "React Native | A framework for building native apps using React",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <Text style={styles.title}>Mona Lisa</Text>
                    <Text style={styles.year}>(1503)</Text>
                </View>
                <View>
                    <Text style={styles.author}>레오나르도 다빈치</Text>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={onShare}>
                        <Image style={styles.icon} source={share}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={likeToggle}>
                        <Image style={styles.icon} source={heart_2}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.description}>
                    모나리자(영어: Mona Lisa) 또는 라 조콘다(이탈리아어:
                    La_Gioconda, 프랑스어: La_Joconde)는 16세기 르네상스 시대에
                    레오나르도 다 빈치가 그린 초상화로, 현재 프랑스 파리 루브르
                    박물관에 전시되어 있다. "모나"(mona)는 유부녀 이름 앞에
                    붙이는 이탈리아어 경칭이고, "리자"(Lisa)는 초상화의 모델이
                    된 여인의 이름이다. 즉, 한국어로 하면 "리자 여사"라는 뜻이
                    된다. 이탈리어로 "라 조콘다(Giocondo)"는 "조콘도의 부인"
                    또는 "명랑한 여자", "웃고 있는 여자"라는 뜻이다.
                </Text>
            </View>
        </View>
    );
};

export default Description;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    modal: {
        width: "80%",
        height: "70%",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 60,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginTop: 0,
    },
    header: {
        margin: 10,
    },
    title: {
        margin: 2,
        color: "white",
        fontSize: 36,
    },
    year: {
        color: "rgb(255,255,255)",
    },
    author: {
        margin: 10,
        color: "rgb(255,255,255)",
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        margin: 10,
    },
    icon: {
        width: 40,
        height: 40,
        marginHorizontal: 50,
        color: "white",
    },
    description: {
        lineHeight: 20,
        textAlign: "justify",
        color: "white",
    },
});
