import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

export const sliderWidth = Dimensions.get("window").width + 80;
export const itemWidth = Math.round(sliderWidth * 0.7)

export default function CarouselItem({ item, index }) {
    return (
        <View key={index} style={styles.container}>
            <Image
                source={{ uri: item }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: itemWidth,
    },
    image: {
        width: itemWidth,
        height: 250,
    }
})
