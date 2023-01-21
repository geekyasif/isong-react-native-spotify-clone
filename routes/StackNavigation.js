import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from "../screens/Search/SearchScreen";
import { AntDesign , Ionicons, Feather} from '@expo/vector-icons'; 
import LibraryScreen from '../screens/Library/LibraryScreen';
import PremiumScreen from '../screens/Premium/PremiumScreen';


const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
    return (

        <HomeStack.Navigator>
            <HomeStack.Screen 
                options={{
                    headerStyle:{
                        backgroundColor: 'black'
                    },
                    headerTitle: () => <Text></Text>,
                    headerLeft: () => <Text className="text-white text-3xl font-bold">iSong</Text>,
                    headerRight: () => (
                      <>
                      <Pressable 
                        onPress={ () => alert("Notification")}
                        className="">
                        <Feather name="bell" size={24} color="white"  />
                      </Pressable>
                      <Pressable
                      onPress={ () => alert("Recently Played")}
                      className="mx-4">
                        <Ionicons  name="timer-outline" size={24} color="white" />
                      </Pressable>
                      <Pressable
                      onPress={ () => alert("Settings")}
                      className="">
                        <AntDesign name="setting" size={24} color="white" />
                      </Pressable>
                      </>
                    ),
                  }}
                name="HomeStackScreen" component={HomeScreen} 
            />
        </HomeStack.Navigator>

    )
}


const SearchStack = createNativeStackNavigator();
const SearchStackScreen = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="SearchStackScreen" component={SearchScreen} />
        </SearchStack.Navigator>
    )
}


const LibraryStack = createNativeStackNavigator();
const LibraryStackScreen = () => {
    return (
        <LibraryStack.Navigator>
            <LibraryStack.Screen name="LibraryStackScreen" component={LibraryScreen} />
        </LibraryStack.Navigator>
    )
}


const PremiumStack = createNativeStackNavigator();
const PremiumStackScreen = () => {
    return (
        <PremiumStack.Navigator>
            <PremiumStack.Screen name="PremiumStackScreen" component={PremiumScreen} />
        </PremiumStack.Navigator>
    )
}



export {HomeStackScreen, SearchStackScreen, LibraryStackScreen, PremiumStackScreen}