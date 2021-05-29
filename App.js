import React from "react";
import { StyleSheet } from "react-native";
import Loading from "./Loading";
import Main from "./Main";
import MyPage from "./MyPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
    // const [isLoading, setIsLoading] = useState(true);
    // const startMain = () => {
    //     setTimeout(() => setIsLoading(false), 3000);
    // };

    // startMain();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Loading...">
                <Stack.Screen name="Loading..." component={Loading} />
                <Stack.Screen name="방구석미술관" component={Main} />
                <Stack.Screen name="마이페이지" component={MyPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    font: {
        fontSize: 40,
    },
});
