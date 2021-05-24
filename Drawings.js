import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, TouchableOpacity, } from 'react-native';
import React from 'react';
import { Dimensions,} from 'react-native';

const Drawings = () => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item})=>
                    <TouchableOpacity activeOpacity={0.8}>
                    <Image style={styles.image} source={{uri:item.uri}}/>
                    </TouchableOpacity>
                }
                columnWrapperStyle={styles.imageRow}
                numColumns={2}
            />
        </View>
    );
}

const data=[
    {
        id:1,
        uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
    },
    {
        id:2,
        uri: 'https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg'
    },
    {
        id:3,
        uri:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg'
    },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent:'center',
        backgroundColor: 'white',
    },
    image: {
        //width: 140,
        width: Dimensions.get('window').width/2 ,
        height: 150,
       //resizeMode:'contain',
       resizeMode:'cover',
    },
    imageRow: {
        //flexWrap:'wrap',
       // alignContent:'space-around',
        //justifyContent: 'center',
       alignItems:'flex-start',
      },
});

export default Drawings;
