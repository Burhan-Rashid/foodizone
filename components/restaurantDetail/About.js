import React from 'react'
import { View, Text, Image } from 'react-native'

const yelpRestaurantInfo = {
    name: "Thai chaoi Restaurent Dubai",
    image: "https://media.istockphoto.com/photos/3d-render-of-luxury-restaurant-interior-picture-id1079901206?k=20&m=1079901206&s=612x612&w=0&h=hbMrgWZzoO9zncJ_ZU2xUqVt0oGfPyAbv9FxhCm04EI=",
    price: "$$",
    reviews: "1500",
    rating: 4.3,
    categories: [{ title: "Thai" },
    { title: "Comfort Food" },
    { title: "Ice Cream" },
    { title: "Coffee" },
    { title: "Cold ice" },
    { title: "Comfort Food" }
    ]
}

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => (cat.title)).join(' • ')


const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} • ⭐ (${reviews})`

// const image = "https://media.istockphoto.com/photos/3d-render-of-luxury-restaurant-interior-picture-id1079901206?k=20&m=1079901206&s=612x612&w=0&h=hbMrgWZzoO9zncJ_ZU2xUqVt0oGfPyAbv9FxhCm04EI="
// const title = "Thai Chio Restarent Dubai"
// const description = "Thai • Comfort Food • $$ • 🎫 • 4⭐ (2191+)"

export default function About() {

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = ({ image }) => (
    <Image source={{ uri: image }} style={{
        width: '100%',
        height: 180,
    }}
    />
)

const RestaurantName = ({ name }) => (
    <Text style={{ fontSize: 29, fontWeight: '600', marginTop: 10, marginHorizontal: 15 }}>{name}</Text>
)

const RestaurantDescription = ({ description }) => (
    <Text style={{ fontSize: 15.5, fontWeight: '400', marginTop: 10, marginHorizontal: 15 }}>{description}</Text>
)
