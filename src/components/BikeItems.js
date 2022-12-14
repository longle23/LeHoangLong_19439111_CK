import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const BikeItems = ({ bike }) => {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate("Screen_03");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleClick}>
                <View style={{ alignItems: "center" }}>
                    <View>
                        <AntDesign name="hearto" size={24} color="black" style={{ marginLeft: 135 }} />

                    </View>

                    <View>
                        <Text style={{ marginTop: 20, fontSize: 18 }}>{bike.name}</Text>


                        <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 12 }}>{bike.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default BikeItems

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginRight: 30,
        marginTop: 30
    },
})