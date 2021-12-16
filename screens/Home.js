import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}> {/* For displaying correctly below notches in iphone with notches */}
            <View
                style={{
                    backgroundColor: "white",
                    padding: 15
                }}
            >
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView >
    )
}
