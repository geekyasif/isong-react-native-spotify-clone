import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeMusicCard = ({title, img}) => {
  return (
    <View className="mr-4" style={{width: 150}}>
      <Image source={{uri: img}} style={{width: 150, height: 150}} resizeMode="cover" />
      <View>
        <Text className="line-clamp-2 text-xs my-2 text-gray-400">{title}</Text>
      </View>
    </View>
  )
}

export default HomeMusicCard

const styles = StyleSheet.create({})