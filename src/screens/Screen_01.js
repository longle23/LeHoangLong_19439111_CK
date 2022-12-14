import React, { useRef, useState, useEffect } from 'react';
import { useContext } from "react";
import { Animated, StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity, FlatList } from 'react-native';

import xedap1 from '../../assets/xedap1.jpg'

const Screen_01 = ({ navigation }) => {

    return (
        <View>
            <Text style={{ fontSize: 21, textAlign: 'center', marginTop: 100 }}>A premium online store for sporter and their stylish choice</Text>

            <Image source={xedap1} style={{ width: 320, height: 200, borderRadius: 45, marginTop: 70, alignSelf: 'center' }} >

            </Image>

            <Text style={{ fontWeight: 'bold', fontSize: 27, marginTop: 30, textAlign: 'center' }}>POWER BIKE SHOP</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Screen_02')} >
                <View style={{ backgroundColor: 'grey', width: '80%', alignSelf: 'center', marginTop: 70, height: 60, borderRadius: 30 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 28, marginTop: 10 }}>Get Started</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default Screen_01

const styles = StyleSheet.create({

})