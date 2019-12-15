import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import TabNavigator from "./TabNavigator"
import DeckDetails from "./DeckDetails"

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator
  },
  DeckDetails: {
    screen: DeckDetails
  }
})

export default createAppContainer(StackNavigator)