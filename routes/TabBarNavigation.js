import React from 'react'
import { HomeStackScreen, LibraryStackScreen, PremiumStackScreen, SearchStackScreen } from './StackNavigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const TabBarNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderTopColor: 'black'
                },
                headerShown: false,
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'white',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    size = 23;

                    if (route.name === 'HomeTabBar') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'SearchTabBar') {
                        iconName = focused ? 'ios-search' : 'ios-search-outline';
                    }
                    else if (route.name === 'LibraryTabBar') {
                        iconName = focused ? 'ios-library' : 'ios-library-outline';
                    }
                    else if (route.name === 'PremiumTabBar') {
                        iconName = focused ? 'ios-earth' : 'ios-earth-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                options={({ navigation }) => ({
                    title: 'Home',
                })}
                name="HomeTabBar" component={HomeStackScreen} />
            <Tab.Screen
                options={({ navigation }) => ({
                    title: 'Search',
                })}
                name="SearchTabBar" component={SearchStackScreen} />

            <Tab.Screen
                options={({ navigation }) => ({
                    title: 'Library',
                })}
                name="LibraryTabBar" component={LibraryStackScreen} />

            <Tab.Screen
                options={({ navigation }) => ({
                    title: 'Premium',
                })}
                name="PremiumTabBar" component={PremiumStackScreen} />
        </Tab.Navigator>

    )
}

export default TabBarNavigation