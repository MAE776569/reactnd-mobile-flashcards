import React from "react"
import DeckList from "./DeckList"
import NewDeck from "./NewDeck"
import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator
} from "react-navigation-tabs"
import { primary } from "../utils/colors"
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"
import { Platform } from "react-native"

const navigationScreens = {
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
}

const navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: primary
    },
    showIcon: true,
    tabStyle: {
      flexDirection: Platform.OS === "ios" ? "column" : "row"
    }
  },
  navigationOptions: {
    header: null
  }
}

const TabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(navigationScreens, navigationOptions)
    : createMaterialTopTabNavigator(navigationScreens, navigationOptions)

export default TabNavigator
