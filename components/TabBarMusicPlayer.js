import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import TrackPlayer, { RepeatMode } from 'react-native-track-player';
import { Audio } from 'expo-av';
import * as MediaLibrary from 'expo-media-library'



const TabBarMusicPlayer = () => {

  const mediaLibraryAsync = async () => {
    let { status } = await MediaLibrary.requestPermissionsAsync()
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: ['photo', 'video'],
    })
    let video = await MediaLibrary.getAssetInfoAsync(media.assets[0])

    console.log(video);
  };



  // const [sound, setSound] = useState();

  // async function playSound() {
  //   console.log('Loading Sound');

  //   await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

  //   const { sound } = await Audio.Sound.createAsync(
  //   { uri: 'http://foo/bar.mp3' },
  //   { shouldPlay: true }
  //   );

  //   setSound(sound);

  //   console.log('Playing Sound');
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log('Unloading Sound');
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

        

  
  return (
    <View className="p-2 rounded mr-1 ml-1 bg-red-800">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center">
        <View>
            <Image source={{uri: "https://i.pinimg.com/236x/9a/7c/59/9a7c59e44b0561dc4c47a9e9f6847a6e.jpg"}} resizeMode="contain" className="w-10 h-10"/>
        </View>
        <View className="ml-3">
                <Text className="text-white text-xs mb-1">Bekhayali (Arjit Singh Version)</Text>
                <Text className="text-gray-200 text-xs">Arjit Singh</Text>
        </View>
        </View>
        <View className="">
            <Ionicons name="play" size={30} color="white"  onPress={mediaLibraryAsync}/>
        </View>
      </View>
      <View>

      </View>
    </View>
  )
}

export default TabBarMusicPlayer

const styles = StyleSheet.create({})