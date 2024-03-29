import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Profile } from "../components/profile/profile";
import { style } from "./style";
import { ProfileItem } from "../components/profileItem/profileItem";

export function Home(){
    const hanniPath = "../../assets/profile.webp"
    return(
        <View style={style.body}>
            <StatusBar/>
            <Profile></Profile>
            <ProfileItem number={-250} name="Hanni" img={require('../assets/hanni.webp')}/>
            <ProfileItem number={-100} name="Haerin" img={require('../assets/haerin.webp')}/>
            <ProfileItem number={200} name="Hyein" img={require('../assets/hyein.webp')}/>
            <ProfileItem number={300} name="Minji" img={require('../assets/minji.webp')}/>
        </View>
    )
}