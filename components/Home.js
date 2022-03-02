import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import AvailableService from "./AvailableService";

function Home({ navigation }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(
        async () => {
            const response = await fetch("https://bakesaleforgood.com/api/deals");
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        , [])
    return (
        <View style={styles.container}>
            {
                loading ?
                    <View style={styles.loadingContainer}>
                        <Text style={styles.loading}>Loading...</Text>
                    </View>
                    :
                    <>
                        <TextInput
                            placeholder="Search All Deals..."
                            style={styles.textInput}
                        />
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <AvailableService item={item} navigation={navigation} />}
                        />
                    </>

            }
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    loading: {
        fontSize: 18,
        fontWeight: "bold",
    },
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    textInput: {
        height: 50,
        width: 380,
        fontSize: 17
    }
})