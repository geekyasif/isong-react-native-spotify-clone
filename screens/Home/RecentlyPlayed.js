import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecentlyPlayCard from '../../components/RecentlyPlayCard'

const RecentlyPlayed = () => {
    return (
        <View className=" px-2 mb-4">
            <Text className="font-bold text-xl my-3 text-white">Recently played</Text>
            <ScrollView horizontal={true}>
                <View className="flex flex-row scroll">
                    <RecentlyPlayCard title="Kabir Singh" img="https://m.media-amazon.com/images/M/MV5BOTIyMTNkMWQtZDJlYi00OGJmLTliN2MtOGE0YjY4NzFiYTNmXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg" />
                    <RecentlyPlayCard title="Kabir Singh" img="https://i.pinimg.com/236x/9a/7c/59/9a7c59e44b0561dc4c47a9e9f6847a6e.jpg" />
                    <RecentlyPlayCard title="Kabir Singh" img="https://a10.gaanacdn.com/gn_img/albums/Rz4W8vKxD5/4W8eoypvbx/size_l.jpg" />
                    <RecentlyPlayCard title="Kabir Singh" img="https://i.pinimg.com/236x/9a/7c/59/9a7c59e44b0561dc4c47a9e9f6847a6e.jpg" />
                    <RecentlyPlayCard title="Kabir Singh" img="https://a10.gaanacdn.com/gn_img/albums/a7LWBaz3zX/7LWBkQDkbz/size_m.webp" />
                    <RecentlyPlayCard title="Kabir Singh" img="https://m.media-amazon.com/images/M/MV5BOTIyMTNkMWQtZDJlYi00OGJmLTliN2MtOGE0YjY4NzFiYTNmXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg" />
                </View>
            </ScrollView>
        </View>
    )
}

export default RecentlyPlayed

const styles = StyleSheet.create({})


