import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderTag from './HeaderTag'
import RecentlyPlayed from './RecentlyPlayed'
import HomeMusicCards from './HomeMusicCards'
import TabBarMusicPlayer from '../../components/TabBarMusicPlayer'

const HomeScreen = () => {
  const music = [
    {
      id: 1,
      homeCategory: 'Shows to try',
      category: '',
      singer: '',
      img: ""
    },
    {
      id: 2,
      homeCategory: 'Best of artists',
      category: '',
      singer: '',
      img: ""
    },
    {
      id: 3,
      homeCategory: 'Fresh new music',
      category: '',
      singer: '',
      img: ""
    },
    {
      id: 4,
      homeCategory: 'Popular albums',
      category: '',
      singer: '',
      img: ""
    },
    {
      id: 5,
      homeCategory: "India's Best",
      category: '',
      singer: '',
      img: ""
    },
    {
      id: 6,
      homeCategory: 'Recommended for today',
      category: '',
      singer: '',
      img: ""
    },
    {
      id: 7,
      homeCategory: 'Trending now',
      category: '',
      singer: '',
      img: ""
    },
    {
      id: 8,
      homeCategory: "Throwback Today's",
      category: '',
      singer: '',
      img: ""
    },
    {
      id: 9,
      homeCategory: "biggest hits",
      category: '',
      singer: '',
      img: ""
    },

  ]
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
        <View className="">
          <HeaderTag />
          <RecentlyPlayed />
          <HomeMusicCards title="Shows to try" />
          <HomeMusicCards title="Best of artists" />
          <HomeMusicCards title="Fresh new music" />
          <HomeMusicCards title="Popular albums" />
          <HomeMusicCards title="India's Best" />
          <HomeMusicCards title="Recommended for today" />
          <HomeMusicCards title="Trending now" />
          <HomeMusicCards title="Throwback" />
          <HomeMusicCards title="Today's biggest hits" />
        </View>
      </ScrollView>
        <TabBarMusicPlayer/>
    </SafeAreaView>
  )
}

export default HomeScreen