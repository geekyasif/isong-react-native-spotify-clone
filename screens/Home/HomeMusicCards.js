import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeMusicCard from '../../components/HomeMusicCard'

const HomeMusicCards = ({ title }) => {
    return (
        <View className="my-4 px-2">
            <Text className="text-xl font-bold mb-2 text-white">{title}</Text>
            <ScrollView horizontal={true}>
                <View className="flex flex-row">
                    <HomeMusicCard title="Jass Manak, Neha Kakkar, Arjit Singh" img="https://i.pinimg.com/236x/9a/7c/59/9a7c59e44b0561dc4c47a9e9f6847a6e.jpg" />
                    <HomeMusicCard title="Jass Manak, Neha Kakkar, Arjit Singh" img="https://a10.gaanacdn.com/gn_img/albums/Rz4W8vKxD5/4W8eoypvbx/size_l.jpg" />
                    <HomeMusicCard title="Jass Manak, Neha Kakkar, Arjit Singh" img="https://a10.gaanacdn.com/gn_img/albums/a7LWBaz3zX/7LWBkQDkbz/size_m.webp" />
                    <HomeMusicCard title="Jass Manak, Neha Kakkar, Arjit Singh" img="https://i.pinimg.com/236x/9a/7c/59/9a7c59e44b0561dc4c47a9e9f6847a6e.jpg" />
                    <HomeMusicCard title="Jass Manak, Neha Kakkar, Arjit Singh" img="https://m.media-amazon.com/images/M/MV5BOTIyMTNkMWQtZDJlYi00OGJmLTliN2MtOGE0YjY4NzFiYTNmXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg" />
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeMusicCards

const styles = StyleSheet.create({})