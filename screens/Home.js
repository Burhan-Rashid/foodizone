import React from 'react'
import { View, SafeAreaView, ScrollView, Platform, StatusBar } from 'react-native'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'

import axios from 'axios'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements'

const YELP_API_KEY =
    "jQhESBO6INboEz7ZJY8CpPhTlSX78qqtDOgmUQEv_Aqo277vPFDK0iLX19revMPkGARdh3HBAN1rLM-5QBfTSTFpmgpglrGhIeZR1SVWzD_GWfD-d11FEHgxERm8YXYx";

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
    const [city, setCity] = React.useState("SanDeigo");
    const [activeTab, setActiveTab] = React.useState("Delivery");

    const getRestaurantsFromYelp = async () => {
        const yelpUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "x-requested-with": "xmlhttprequest",
                "Authorization": `Bearer ${YELP_API_KEY}`
            },
        };
        const res = await axios.get(yelpUrl, apiOptions);
        console.log(res.data.businesses);
        const restaurants = res.data.businesses.filter((restaurant) => (restaurant.transactions.includes(activeTab.toLowerCase())))
        setRestaurantData(restaurants);
        // fetch(yelpUrl, apiOptions).then((res) => (res.json)).then((json) => console.log(json))
        // return fetch(yelpUrl, apiOptions)
        //     .then((res) => (res.json))
        //     .then((json) => setRestaurantData(json.businesses));

    }

    React.useEffect(() => {
        getRestaurantsFromYelp()
    }, [city, activeTab])

    return (
        <SafeAreaView
            style={{
                backgroundColor: "#eee",
                flex: 1,
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
            }}
        >
            <View
                style={{
                    backgroundColor: "white",
                    padding: 15
                }}
            >
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView >
    )
}
