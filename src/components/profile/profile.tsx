import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import { Button } from "../button/button";

export function Profile(){
    return(
        <View style={style.body}>
            <View style={style.profile}>
                <View style={{width: "50%"}}>
                    <Image style={style.image} source={require('../../assets/profile.webp')}/>
                </View>
                <View style={{width: "50%"}}>
                    <Text style={style.profileText}>Danielle</Text>
                </View>
            </View>
            <View style={style.line}></View>
            <View style={style.profileButtons}>
                <Button textColor="#adaeb2" color="#e9edef" text="View Profile"></Button>
                <Button textColor="white" color="#719a70" text="Add User"></Button>
            </View>
        </View>
    )
}