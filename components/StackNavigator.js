import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import TabNavigator from "./TabNavigator"
import DeckDetails from "./DeckDetails"
import { primary, white } from "../utils/colors"
import AddCard from "./AddCard"

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator
  },
  DeckDetails: {
    screen: DeckDetails
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Add Card"
    }
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: primary,
    },
    headerTintColor: white,
    headerTitleStyle: {
      fontWeight: 'normal',
    },
    headerForceInset: {
      top: "never"
    }
  }
})

export default createAppContainer(StackNavigator)