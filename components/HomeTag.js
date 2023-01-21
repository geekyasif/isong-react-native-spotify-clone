import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeTag = ({title}) => {
  return (
    <View className="px-4 py-2 bg-neutral-800 m-2 mt-5 rounded-full">
      <Text className="text-white">{title}</Text>
    </View>
  )
}

export default HomeTag
