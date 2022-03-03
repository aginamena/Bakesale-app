import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import globalStyle from "../styles/globalStyles";

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

    return (
        <View style={styles.container}>
            {
                isloading ?
                    <View style={styles.loadingContainer}>
                        <Text style={styles.loading}>Loading...</Text>
                    </View>
                    :
                    <ScrollView>
                        <View style={styles.titleContainer}>
                            <Text style={[globalStyle.text, { fontWeight: "bold" }]}>{data.title}</Text>
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
                            <TouchableOpacity style={styles.btn}>
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
        height: 80,
        justifyContent: "center",
        paddingLeft: 20,
    }

})