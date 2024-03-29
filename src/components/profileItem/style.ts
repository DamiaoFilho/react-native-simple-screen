import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    body: {
        backgroundColor: "white",
        borderRadius: 8,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 4,
        marginBottom: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        margin: 8
    },
    itemInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 8,
        marginLeft: 16
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 8,
        marginRight: 16
    },
    number: {
        backgroundColor: "#f3e7e0",
        margin: 4,
        width: 75,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 4,
        borderRadius: 8,
    },
    add: {
        backgroundColor: "#dedee2",
        margin: 4,
        width: 50,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    }
})