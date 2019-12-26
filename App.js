import React, { Component } from "react"
import { View, StatusBar } from "react-native"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import Constants from "expo-constants"
import { primary, accent } from "./utils/colors"
import StackNavigator from "./components/StackNavigator"
import { Provider as StoreProvider } from "react-redux"
import store from "./store"
import { setLocalNotification } from "./utils/helpers"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary,
    accent
  }
}

class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                backgroundColor: primary,
                height: Constants.statusBarHeight
              }}
            >
              <StatusBar
                translucent
                backgroundColor={primary}
                barStyle="light-content"
              />
            </View>
            <StackNavigator />
          </View>
        </PaperProvider>
      </StoreProvider>
    )
  }
}

export default App
