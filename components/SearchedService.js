import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native"
import AvailableService from "./AvailableService";


export default function SearchedService({ route, navigation }) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    console.log(route);
    console.log(navigation);
    useEffect(
        async () => {
            const response = await fetch("https://bakesaleforgood.com/api/deals?searchTerm=" + route.params.searchTerm);
            const data = await response.json();
            setData(data);
            setLoading(false);
            // console.log(data)
        }
        , [])
    return (
        <View style={styles.container}>
            {
                loading ?
                    <View style={styles.loadingContainer}>
                        <Text style={styles.loading}>Loading...</Text>
                    </View> :
                    data.length == 0 ?
                        <View style={styles.loadingContainer}>
                            <Text style={styles.loading}>{route.params.searchTerm} is currently not available</Text>
                        </View> :
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <AvailableService
                                item={item}
                                navigation={navigation}
                                id={item.key}
                            />}
                        />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    loading: {
        fontSize: 18,
        fontWeight: "bold",
    },
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})