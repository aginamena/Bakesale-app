import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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
                    <>
                        <View>
                            <Text>{data.title}</Text>
                        </View>
                        <Text>{data.description}</Text>
                    </>

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
})