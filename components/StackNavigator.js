import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import TabNavigator from "./TabNavigator"

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator
  },
})

export default createAppContainer(StackNavigator)