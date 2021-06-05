import React from "react";

import Loading from "./Loading";
import Mannerism from "./Mannerism";
import Baroque from "./Baroque";
import MyPage from "./MyPage";
import Rococo from "./Rococo";
import NeoClassicism from "./NeoClassicism";
import Romanticism from "./Romanticism";
import Impressionism from "./Impressionism";
import Fauvism from "./Fauvism";
import Cubism from "./Cubism";
import Surrealism from "./Surrealism";
import PopArt from "./PopArt";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="르네상스">
                <Drawer.Screen name="르네상스" component={Loading} />
                <Drawer.Screen name="매너리즘" component={Mannerism} />
                <Drawer.Screen name="바로크" component={Baroque} />
                <Drawer.Screen name="로코코" component={Rococo} />
                <Drawer.Screen name="신고전주의" component={NeoClassicism} />
                <Drawer.Screen name="낭만주의" component={Romanticism} />
                <Drawer.Screen name="인상주의" component={Impressionism} />
                <Drawer.Screen name="야수파" component={Fauvism} />
                <Drawer.Screen name="큐비즘" component={Cubism} />
                <Drawer.Screen name="초현실주의" component={Surrealism} />
                <Drawer.Screen name="팝아트" component={PopArt} />
                <Drawer.Screen name="페미니즘미술" component={MyPage} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
