import DeckList from "./DeckList"
import NewDeck from "./NewDeck"
import { createMaterialTopTabNavigator } from "react-navigation-tabs"
import { primary } from "../utils/colors"

const TabNavigator = createMaterialTopTabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Decks"
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck"
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: primary
      }
    }
  }
)

export default TabNavigator
