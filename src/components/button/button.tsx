import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { style } from "./style";

type propsType = {
    color: string,
    text: string,
    textColor?: string
}


export function Button(props: propsType){
    return(
        <TouchableOpacity>
            <View style={[style.body, {backgroundColor: props.color}]}>
                <Text style={[style.text, {color: props.textColor}]}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}