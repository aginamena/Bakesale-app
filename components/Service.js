import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Linking } from "react-native";
import Carousel from "react-native-snap-carousel";
import globalStyle from "../styles/globalStyles";
import CarouselItem, { sliderWidth } from "./CarouselItem";

export default function Service({ route }) {
    const [data, setData] = useState(null);
    const [isloading, setLoading] = useState(true)
    useEffect(async () => {
        const response = await fetch("https://bakesaleforgood.com/api/deals/" + route.params.id);
        const parsedResponse = await response.json();
        setData(parsedResponse);
        setLoading(false)
    }
        , [])
    const isCarousel = useRef(null)
    return (
        <View style={styles.container}>
            {
                isloading ?
                    <View style={styles.loadingContainer}>
                        <Text style={styles.loading}>Loading...</Text>
                    </View>
                    :
                    <ScrollView>
                        <Carousel
                            layout={'default'}
                            ref={isCarousel}
                            data={data.media}
                            renderItem={CarouselItem}
                            sliderWidth={sliderWidth}
                            itemWidth={Math.round(sliderWidth * 0.7)}
                        />

                        <View style={styles.titleContainer}>
                            <Text style={[globalStyle.text, { fontWeight: "bold", paddingTop: 20, paddingBottom: 20 }]}>{data.title}</Text>
                        </View>
                        <View style={styles.profile}>
                            <View>
                                <Text style={[globalStyle.text, { fontWeight: "bold" }]}>${data.price}</Text>
                                <Text style={globalStyle.text}>{data.cause.name}</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.image}
                                    source={{ uri: data.user.avatar }}
                                />
                                <Text style={globalStyle.text}>{data.user.name}</Text>
                            </View>
                        </View>
                        <View style={styles.desNBtnCon}>
                            <Text style={globalStyle.text}>{data.description}</Text>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => Linking.openURL("https://bakesaleforgood.com/api/deals/" + route.params.id)}>
                                <Text style={[globalStyle.text, styles.btnText]}>Buy this deal!</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        fontSize: 18,
        fontWeight: "bold",
    },
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    btn: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30
    },
    btnText: {
        color: 'blue',
        fontWeight: "bold"
    },
    desNBtnCon: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 50
    },
    profile: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center"
    },
    titleContainer: {
        backgroundColor: "orange",
        justifyContent: "center",
        paddingLeft: 20,
    }

})