import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';

export default function ViewCart({ navigation, restaurantName }) {

    const items = useSelector((state) => state.cartReducer.selectedItems.items);

    let viewCart = null;

    if (items.length > 0) {
        viewCart = (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: "center",
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 350,
                    zIndex: 999,
                }}
            >
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                }}>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            backgroundColor: "black",
                            alignItems: "center",
                            padding: 13,
                            borderRadius: 30,
                            width: 300,
                            position: "relative"
                        }}
                    >
                        <Text style={{
                            color: "white",
                            fontSize: 18
                        }}
                        >
                            View Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        { viewCart }
    )
}
