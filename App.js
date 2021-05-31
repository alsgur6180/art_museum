import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Loading from "./Loading";
import Main from "./Main";
import MyPage from "./MyPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { myArts } from './arts/arts';

const Stack = createStackNavigator();

export default function App() {
    const [state, setState] = useState({
        isLoading: true,
        id: 0,
        arts: [
            ...myArts,
        ],
        selectedArts: [],
        modalVisible: false,
    });

    const { arts, id, selectedArts, modalVisible } = state;

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

    const setModalVisible = (modalVisible) => {
        setState({
            ...state,
            modalVisible: !modalVisible,
        });
    }

    const handleSwipeBottom = (id) => {
        setState({
            ...state,
            id,
        });
    }

    const handleClickLike = (id) => {
        if(selectedArts === undefined){
            setState({
                ...state,
                selectedArts: [
                    ...selectedArts,
                    id,
                ]
            }); 
            return;
        }

        const targetId = selectedArts.find((artId) => artId === id);
        
        if (targetId === undefined) {
            setState({
                ...state,
                selectedArts: [
                    ...selectedArts,
                    id,
                ]
            }); 
        } else {
            setState({
                ...state,
                selectedArts: [
                    ...selectedArts.filter((artId) => artId !== id),
                ]
            });
        }       
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Loading...">
                <Stack.Screen name="Loading..." component={Loading} />
                <Stack.Screen 
                    name="방구석미술관" 
                    children={({navigation}) => 
                        <Main
                            arts={arts} 
                            id={ id }
                            handleSwipeBottom={ handleSwipeBottom }
                            handleClickLike={ handleClickLike }
                            selectedArts={selectedArts}
                            onShare={onShare}
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible}
                            navigation={ navigation }
                        />
                } />

                <Stack.Screen name="마이페이지" component={MyPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

