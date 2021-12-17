import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }) {
    return (
        <View
            style={{
                marginTop: 15,
                flexDirection: 'row'
            }}
        >
            <GooglePlacesAutocomplete
                query={{ key: "AIzaSyCkEOxmVxzEEZUikTWHKXjo3WKnzCVOZ38" }}
                getAddressText={(str) => { console.log(str) }}
                onPress={(data, details = null) => {
                    console.log(data.description);
                    const city = data.description.split(',')[0];
                    cityHandler(city);
                }}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                        borderColor: "transparent",
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons
                            name="location-sharp"
                            size={24}
                        />
                    </View>
                )}
                renderRightButton={() => (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 10,
                            backgroundColor: "#fff",
                            padding: 10,
                            borderRadius: 20,

                        }}>
                        <AntDesign
                            name='clockcircle'
                            size={11}
                            style={{
                                marginRight: 6
                            }}
                        />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}
