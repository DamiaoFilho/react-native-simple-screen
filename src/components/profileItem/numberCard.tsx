import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import { Button } from "../button/button";
import { Children } from "react";
import { AntDesign } from '@expo/vector-icons';



type propsType = {
    number: number,
}


export function NegativeNumber(props: propsType){
    return(
        <View style={style.number}>
            <AntDesign name="caretdown" size={16} color="red" />
            <Text style={{color: "#d17775", fontWeight: "bold", fontSize: 15}}>{props.number}</Text>
        </View>
    )
}

export function PositiveNumber(props: propsType){
    return(
        <View style={[style.number, {backgroundColor: "#f0f1f0"}]}>
            <AntDesign name="caretup" size={16} color="green" />
            <Text style={{color: "#6c9969", fontWeight: "bold", fontSize: 15}}>{props.number}</Text>
        </View>
    )
}