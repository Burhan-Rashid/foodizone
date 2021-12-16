import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import CommunityMaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: "BeachSide Bar",
        image_url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
        categories: ["cafe", "bar"],
        price: "$$",
        reviews: 1233,
        rating: 4.5
    },
    {
        name: "BeachSide Bar",
        image_url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
        categories: ["cafe", "bar"],
        price: "$$",
        reviews: 1233,
        rating: 4.5
    },
    {
        name: "BeachSide Bar",
        image_url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
        categories: ["cafe", "bar"],
        price: "$$",
        reviews: 1233,
        rating: 4.5
    },
    {
        name: "BeachSide Bar",
        image_url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
        categories: ["cafe", "bar"],
        price: "$$",
        reviews: 1233,
        rating: 4.2
    },
]

export default function RestaurantItems({ restaurantData }) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{ marginBottom: 30 }}
        >
            {
                restaurantData.map((restaurant, index) => (

                    <View
                        key={index}
                        style={{
                            marginTop: 10,
                            padding: 15,
                            backgroundColor: "white"
                        }}
                    >
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>

                ))
            }
        </TouchableOpacity>
    )
}

const RestaurantImage = ({ image }) => (
    <>
        <Image
            source={{ uri: image }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity
            style={{
                position: "absolute",
                right: 20,
                top: 20,
            }}
        >
            <CommunityMaterialIcons
                name="heart-outline"
                size={25}
                color="white"
            />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = ({ name, rating }) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    }}
    >
        <View>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: "bold"
                }}
            >
                {name}
            </Text>
            <Text
                style={{
                    fontSize: 13,
                    color: "gray"
                }}
            >
                30-35 - mins
            </Text>
        </View>
        <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Text>{rating}</Text>
        </View>
    </View>
)
