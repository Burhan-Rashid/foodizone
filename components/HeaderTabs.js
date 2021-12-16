import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {

    const [activeTab, setActiveTab] = React.useState("Deliver");

    return (
        <View
            style={{
                flexDirection: "row",
                alignSelf: "center"
            }}>
            <HeaderButton
                text="Deliver"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="PickUp"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

        </View>
    )
}

const HeaderButton = ({ text, activeTab, setActiveTab }) => (
    <TouchableOpacity
        style={{
            backgroundColor: activeTab === text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
        onPress={() => setActiveTab(text)}
    >
        <Text
            style={{
                color: activeTab === text ? "white" : "black",
                fontSize: 15,
                fontWeight: "900",
            }}>
            {text}
        </Text>
    </TouchableOpacity>
)



