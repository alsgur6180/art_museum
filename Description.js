import React, { useState } from "react";
import { StyleSheet, Text, View, Share, TouchableOpacity } from "react-native";
import { Octicons, FontAwesome5 } from "@expo/vector-icons";

const works = {
    monalisa: {
        title: "Mona Lisa",
        year: "1503",
        author: "레오나르도 다빈치",
        description:
            "모나리자(영어: Mona Lisa) 또는 라 조콘다(이탈리아어:La_Gioconda, 프랑스어: La_Joconde)는 16세기 르네상스 시대에 레오나르도 다 빈치가 그린 초상화로, 현재 프랑스 파리 루브르 박물관에 전시되어 있다. '모나'(mona)는 유부녀 이름 앞에 붙이는 이탈리아어 경칭이고, '리자'(Lisa)는 초상화의 모델이 된 여인의 이름이다. 즉, 한국어로 하면 '리자 여사'라는 뜻이 된다. 이탈리어로 '라 조콘다(Giocondo)'는 '조콘도의 부인'또는 '명랑한 여자', '웃고 있는 여자'라는 뜻이다.",
    },
    kiss: {
        title: "Kiss",
        year: "1908",
        author: "구스타프 클림트",
        description:
            "키스(독일어: Der Kuss)는 오스트리아 상징주의 작가 구스타프 클림트가 1907-1908년 황금시기에 그린 그림이다. 이 시기는 클림트의 전성기로 도금하는 기법으로 다수의 그림을 남겼다.",
    },
    self_portrait: {
        title: "Self-portrait",
        year: "1889",
        author: "반 고흐",
        description:
            "네덜란드 포스트 인상파 화가 빈센트 반 고흐 는 1889 년 9 월 캔버스 에 유화 로 자화상 을 그렸습니다 .이 작품은 반 고흐의 마지막 자화상 이었을지 모르지만 그가 남부의 생 레미 드 프로방스 를 떠나기 직전에 그렸습니다. 프랑스. [1] [2] [3] 이 그림은 현재 파리 오르세 미술관 에 있습니다 .",
    },
    view_of_toledo: {
        title: "View of Toledo",
        year: "1600",
        author: "엘 그레코",
        description:
            "톨레도의 전망은 Vincent van Gogh 의 The Starry Night 와 JMW Turner 와 Claude Monet 의 풍경 과 함께 서양 미술 에서 가장 잘 알려진 하늘 묘사 중 하나 입니다. 그의 에세이에서 미술사 학자 Keith Christiansen은 View of Toledo 가 El Greco의 걸작 중 하나 라고 주장합니다.",
    },
    woman_with_a_hat: {
        title: "모자를 쓴 여인",
        year: "1905",
        author: "앙리 마티스",
        description:
            "모자를 쓴 여자는 Henri Matisse 의 그림입니다. 캔버스에 그려진 유채는 Matisse의 아내 Amelie를 묘사합니다.1905 년에 그렸고같은 해 가을에 Salon d' Automne 에서 André Derain , Maurice de Vlaminck 및 'Fauves'로 알려진 여러 예술가들의작품과 함께 전시되었습니다.",
    },
};

const Description = ({ name }) => {
    const [like, setLike] = useState(false);
    const likeToggle = () => {
        setLike(!like);
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
                    <Text style={styles.title}>{works[name].title}</Text>
                    <Text style={styles.year}>({works[name].year})</Text>
                </View>
                <View>
                    <Text style={styles.author}>{works[name].author}</Text>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={onShare}>
                        <FontAwesome5
                            name="share"
                            size={32}
                            color="white"
                        ></FontAwesome5>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={likeToggle}>
                        <Octicons
                            name="heart"
                            size={32}
                            color={like ? "#ED4956" : "white"}
                        ></Octicons>
                    </TouchableOpacity>
                </View>
                <Text numberOfLines={11} style={styles.description}>
                    {works[name].description}
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
        backgroundColor: "rgba(0,0,0,1)",
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
        justifyContent: "space-around",
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
