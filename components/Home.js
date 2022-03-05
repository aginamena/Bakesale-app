import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Button } from "react-native";
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

    async function serachByKeyword(searchTerm) {
        setLoading(true);
        const response = await fetch("https://bakesaleforgood.com/api/deals?searchTerm=" + searchTerm);
        const data = await response.json();
        setData(data);
        setLoading(false);
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
                        <Formik
                            initialValues={{ searchTerm: "" }}
                            onSubmit={value => serachByKeyword(value.searchTerm)}
                        >
                            {
                                (props) => (
                                    <View style={styles.formikContainer}>
                                        <TextInput
                                            placeholder="Search All Deals..."
                                            style={[styles.textInput, { paddingLeft: 10, width: 300 }]}
                                            onChangeText={props.handleChange("searchTerm")}
                                            values={props.values.searchTerm}
                                        />
                                        <Button onPress={props.handleSubmit} title="submit">

                                        </Button>
                                    </View>
                                )
                            }

                        </Formik>

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
        width: 380,
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10
    }
})