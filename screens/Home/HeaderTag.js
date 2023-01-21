import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeTag from '../../components/HomeTag'

const HeaderTag = () => {
    return (
        <View className="flex flex-row scroll">
           <ScrollView horizontal={true}>
            <HomeTag title="Music" />
            <HomeTag title="Podcasts & Shows" />
            <HomeTag title="New Bollywood" />
            <HomeTag title="Arjit Singh" />
            <HomeTag title="Neha Kakkar" />
            <HomeTag title="Atif Aslam" />
            <HomeTag title="Ed Sheren" />
            <HomeTag title="Eminem" />
           </ScrollView>
        </View>
    )
}

export default HeaderTag

const styles = StyleSheet.create({})