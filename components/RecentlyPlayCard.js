import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const RecentlyPlayCard = ({title, img}) => {
  return (
    <View className="mr-4" style={{width: 100}}>
        <Image source={{uri: img}} resizeMode="cover" style={{width: 100, height: 100}}/>
        <Text className="mt-1 font-bold text-xs text-white">{title}</Text>
    </View>
  )
}

export default RecentlyPlayCard

const styles = StyleSheet.create({})