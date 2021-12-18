import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Divider } from 'react-native-elements'
import { useDispatch } from 'react-redux'

const foods = [
    {
        title: "Tandoori Chicken",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "Chicken chomin",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "Chilli Paneer",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "Lasanga",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "Dominoz Burger",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "Fried Fish",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "Fried Chicken",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },
    {
        title: "Fried Mutton",
        description: "With butter lettuce, tomato and sauce bechnamel",
        price: "$13.50",
        image: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb"
    },

]


export default function MenuItems({ restaurantName }) {

    const dispatch = useDispatch();
    const dispatchItem = (item, checked) => {
        checked ?
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    item,
                    restaurantName: restaurantName
                }
            })
            :
            dispatch({
                type: "DELETE_FROM_CART",
                payload: {
                    item,
                    restaurantName: restaurantName
                }
            })
    }

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
                                onPress={(checkboxValue) => dispatchItem(food, checkboxValue)}
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
