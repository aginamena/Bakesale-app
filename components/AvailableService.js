import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";

export default function AvailableService(props) {
    const { title, price, media, cause } = props.item;
    return (
        <TouchableOpacity onPress={() => props.navigation.push("Current service", { id: props.id })}
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: media[0] }}
                />
                {/* background color red isn't showing */}
                <View style={styles.serviceContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.serviceDescription}>
                        <Text style={{ fontSize: 16, letterSpacing: 1.5 }}>{cause.name}</Text>
                        <Text style={{ fontSize: 16, letterSpacing: 1.5 }}>{price}</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 30,
    },
    image: {
        height: 200
    },
    title: {
        fontSize: 17,
        marginBottom: 5,
        fontWeight: "bold",
        letterSpacing: 1.5
    },
    serviceDescription: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    serviceContainer: {
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
    }

})