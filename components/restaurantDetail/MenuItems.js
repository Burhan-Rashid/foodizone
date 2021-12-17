import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'

const foods = [
    {
        title: "Tandoori Chicken",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "lasanga",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "lasanga",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "lasanga",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "lasanga",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "lasanga",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "lasanga",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "lasanga",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    }
]


export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                foods.map((food, index) => (
                    <View key={index}>
                        <View
                            style={{
                                width: "100%",
                                height: 100,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 15,
                                marginVertical: 10,
                            }}
                        >
                            <FoodInfo food={food} />
                            <FoodImage image={food.image} />
                        </View>
                        <Divider width={0.5} />
                    </View>
                ))
            }
        </ScrollView>
    )
}

const FoodInfo = ({ food }) => (
    <View style={{
        width: "68%",
        justifyContent: "space-evenly"
    }}
    >
        <Text style={{ fontSize: 20, fontWeight: "600", }}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text>{food.price}</Text>
    </View>
)

const FoodImage = ({ image }) => (
    <View>
        <Image source={{ uri: image }} style={{ borderRadius: 10, height: 100, width: 100, paddingRight: 10 }} />
    </View>
)
