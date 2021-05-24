//import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';

//즐겨찾기한 그림들 보여지는 부분
const Drawing = () => {

    const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(8)).map((v, i) => {
      return {
        id: i,
        src: 'http://placehold.it/200x200?text=' + (i + 1)
      };
    });
    setDataSource(items);
  }, []);

    return (
        <View style={styles.container}>
            <FlatList
                 data={dataSource}
                renderItem={({item}) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 1}}>
                        <Image style={styles.imageThumbnail} source={{uri: item.src}}/>
                    </View>
                 )}
        //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
      },
      imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
      },
});

export default Drawing;