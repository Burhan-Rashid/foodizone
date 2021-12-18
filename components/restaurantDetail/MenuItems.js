import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
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
                                flexDirection: "row",
                                paddingHorizontal: 15,
                            }}
                        >
                            <BouncyCheckbox
                                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                                fillColor="green"
                            />
                            <View
                                style={{
                                    flex: 1,
                                    height: 100,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginVertical: 10,
                                }}
                            >
                                <FoodInfo food={food} />
                                <FoodImage image={food.image} />
                            </View>
                        </View>
                        <Divider
                            width={0.5}
                            orientation='vertical'
                            style={{ marginHorizontal: 20 }}
                        />
                    </View>
                ))
            }
        </ScrollView>
    )
}

const FoodInfo = ({ food }) => (
    <View style={{
        flex: 2,
        justifyContent: "space-evenly"
    }}
    >
        <Text style={{ fontSize: 20, fontWeight: "600", }}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text>{food.price}</Text>
    </View>
)

const FoodImage = ({ image }) => (
    <View style={{
        flex: 1,
    }}>
        <Image source={{ uri: image }} style={{ borderRadius: 10, height: 100, width: 100, paddingRight: 10 }} />
    </View>
)
