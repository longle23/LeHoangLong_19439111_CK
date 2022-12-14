import React, { useRef, useState, useEffect } from 'react';
import { useContext } from "react";
import { Animated, StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity, FlatList } from 'react-native';

import xedap1 from '../../assets/xedap1.jpg'

const Screen_01 = ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 8000,
            useNativeDriver: true,
        }).start();

    }, [])

    return (
        <View>
            <Text style={{ fontSize: 21, textAlign: 'center', marginTop: 100, fontWeight: 'bold' }}>A premium online store for sporter and their stylish choice</Text>

            <Image source={xedap1} style={{ width: 320, height: 300, borderRadius: 45, marginTop: 70, alignSelf: 'center' }} >

            </Image>

            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim
                    }
                ]}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 27, marginTop: 30, textAlign: 'center' }}>POWER BIKE</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 27, marginTop: 5, textAlign: 'center' }}>SHOP</Text>
            </Animated.View>

            <TouchableOpacity onPress={() => navigation.navigate('Screen_02')} >
                <View style={{ backgroundColor: 'grey', width: '80%', alignSelf: 'center', marginTop: 50, height: 60, borderRadius: 30 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 28, marginTop: 10 }}>Get Started</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default Screen_01

const styles = StyleSheet.create({

})