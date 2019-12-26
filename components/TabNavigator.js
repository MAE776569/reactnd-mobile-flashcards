import React from "react"
import DeckList from "./DeckList"
import NewDeck from "./NewDeck"
import { createMaterialTopTabNavigator } from "react-navigation-tabs"
import { primary } from "../utils/colors"
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"

const TabNavigator = createMaterialTopTabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" color={tintColor} size={25} />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" color={tintColor} size={25} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: primary
      },
      showIcon: true,
      tabStyle: {
        flexDirection: "row"
      }
    },
    navigationOptions: {
      header: null
    }
  }
)

export default TabNavigator
