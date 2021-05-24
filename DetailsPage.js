import React from "react";

import { Text, View } from "react-native";

import BlankStyle from './BlankStyle';

export default function DetailsPage({ styles }) {
    const { font } = styles;

    return (
        <View style={ BlankStyle.container }>
            <Text style={ font }>상세페이지</Text>  
        </View>
    );
}