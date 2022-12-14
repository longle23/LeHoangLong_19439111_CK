import { useContext } from "react";
import { FlatList, StatusBar, StyleSheet, View ,Text} from "react-native";
import React from 'react'

import BikeContext from "../store/Context";
import BikeItems from "../components/BikeItems";

const Screen_02 = () => {

    const { bikes } = useContext(BikeContext);

    return (
        <View style={{height:'100%'}}>
            <Text style={{marginTop:70, fontSize:25, fontWeight:'bold',marginLeft:20}}>The world's Best Bike</Text>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: 'grey', width: 90, borderRadius: 5, marginLeft: 18 }}>
                    <Text style={{ fontSize: 21, textAlign: 'center', color: 'white' }}>All</Text>
                </View>

                <View style={{ backgroundColor: 'grey', width: 90, borderRadius: 5, marginLeft: 20 }}>
                    <Text style={{ fontSize: 21, textAlign: 'center', color: 'white' }}>Roadbike</Text>
                </View>

                <View style={{ backgroundColor: 'grey', width: 90, borderRadius: 5, marginLeft: 20 }}>
                    <Text style={{ fontSize: 21, textAlign: 'center', color: 'white' }}>Mountain</Text>
                </View>

            </View>

            <FlatList
                data={bikes}
                numColumns={2}
                renderItem={({ item }) => <BikeItems bike={item} />}
                keyExtractor={(item) => `${item.id}`}
               
            />
        </View>
    )
}

export default Screen_02

const styles = StyleSheet.create({})