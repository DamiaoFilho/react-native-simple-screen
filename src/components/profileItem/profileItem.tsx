import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import { Button } from "../button/button";
import { Children } from "react";
import { NegativeNumber, PositiveNumber } from "./numberCard";
import { Ionicons } from '@expo/vector-icons';


type propsType = {
    img: any,
    name: string,
    number: number,
}


export function ProfileItem(props: propsType){
    let isPositive = true
    if (props.number < 0){
        isPositive = false
    }
    return(
        <View style={style.body}>
            <View style={style.itemInfo}>
                <Image style={style.image} source={props.img}></Image>
                <Text style={{fontWeight: "bold", color: "#bbbbbb", fontSize:16}}>{props.name}</Text>
            </View>
            <View style={style.actions}>
                {isPositive ? 
                    (<PositiveNumber number={props.number}/>) : (<NegativeNumber number={props.number}/>)
                }
                <TouchableOpacity>
                    <View style={style.add}>
                        <Ionicons name="person-add-sharp" size={24} color="gray" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}