import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Button, Image, Touchable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import xedap1 from '../../assets/xedap1.jpg'
import { Feather } from '@expo/vector-icons';

const Screen_03 = ({route}) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const { bike } = route.params;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 8000,
            useNativeDriver: true,
        }).start();

    }, [])

    return (
        <View style={{}}>

            <Image source={xedap1} style={{ width: 320, height: 200, borderRadius: 45, marginTop: 35, width: '95%', height: '50%', alignSelf: 'center' }} />

            <Text style={{ fontWeight: 'bold', fontSize: 23, marginLeft: 18, marginTop: 12 }}>{bike.name}</Text>

            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 23, marginLeft: 18, marginTop: 5 }}>15% OFF | 350$</Text>

                <Text style={{ fontWeight: 'bold', fontSize: 23, marginLeft: 18, marginTop: 5 }}>{bike.price}$</Text>
            </View>

            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 18, marginTop: 12 }}>Description</Text>



            <Text style={{ paddingLeft: 20, paddingRight: 20, marginTop: 35, fontSize: 14 }}>Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the</Text>

            <View style={{ flexDirection: 'row', marginTop: 50 }}>

                <Animated.View
                    style={[
                        styles.fadingContainer,
                        {
                            // Bind opacity to animated value
                            opacity: fadeAnim
                        }
                    ]}
                >
                    <AntDesign name="hearto" size={35} color="black" style={{ marginTop: 5, marginLeft: 20 }} />

                </Animated.View>


                <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', backgroundColor: '#AB4F7D', width: '70%', marginLeft: 30, height: 50, borderRadius: 30, alignItems: 'center' }}>

                    <Text style={{ color: 'white', fontSize: 20, marginLeft: 15 }}>Add to cart</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Screen_03

const styles = StyleSheet.create({

})