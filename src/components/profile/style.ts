import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    body: {
        flexDirection: "column",
        backgroundColor: "white",
        margin: 20,
        height: 250,
        borderRadius: 8,
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 32,
        height: "50%",
        margin: 24,
    },
    profileText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24,
        flexWrap: "wrap",
        color: "#69668a",
    },
    line: {
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 4,
        marginTop: 4,
        height: 2,
        backgroundColor: "#e9edef"
    },
    profileButtons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 16,
        height: "15%"
    }
})