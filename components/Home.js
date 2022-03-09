import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Button } from "react-native";
import AvailableService from "./AvailableService";

function Home({ navigation }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [searchedData, setSearchedData] = useState("");
    useEffect(
        async () => {
            try {
                const response = await fetch("https://bakesaleforgood.com/api/deals");
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.log("An error occured")
                console.log(error)
            }

        }
        , [])

    function handleSubmit(searchTerm) {
        if (searchTerm.length > 1) {
            navigation.push("searched", { searchTerm })
        } else {
            alert("Enter a search term")
        }
    }

    return (
        <View style={styles.container}>
            {
                loading ?
                    <View style={styles.loadingContainer}>
                        <Text style={styles.loading}>Loading...</Text>
                    </View>
                    :
                    <>
                        <View style={styles.formikContainer}>
                            <TextInput
                                placeholder="Search All Deals..."
                                style={[styles.textInput, { paddingLeft: 10, width: "70%" }]}
                                onChangeText={value => setSearchedData(value)}
                            />
                            <TouchableOpacity style={styles.btn} onPress={() => handleSubmit(searchedData)}>
                                <Text style={styles.btnText}>Search</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={data}
                            renderItem={({ item }) => <AvailableService
                                item={item} navigation={navigation}
                                id={item.key}
                            />}
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
    },
    formikContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,

    },
    btn: {
        backgroundColor: "#3498db",
        marginRight: 15
    },
    btnText: {
        color: "white",
        fontSize: 17,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        letterSpacing: 1.5
    }
})