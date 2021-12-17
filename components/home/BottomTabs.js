import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
                marginHorizontal: 30
            }}
        >
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />

        </View>
    )
}

const Icon = ({ icon, text }) => (
    <TouchableOpacity>
        <FontAwesome5
            name={icon}
            size={25}
            style={{
                marginBottom: 3,
                alignSelf: "center",
            }}
        />
        <Text>{text}</Text>
    </TouchableOpacity>
)
