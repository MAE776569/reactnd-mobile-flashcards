import React from "react"
import { View, StatusBar } from "react-native"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import Constants from "expo-constants"
import { primary, accent } from "./utils/colors"
import TabNavigator from "./components/TabNavigator"
import { Provider as StoreProvider } from "react-redux"
import store from "./store"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary,
    accent
  }
}

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: primary,
              height: Constants.statusBarHeight
            }}>
            <StatusBar
              translucent
              backgroundColor={primary}
              barStyle="light-content"
            />
          </View>
          <TabNavigator />
        </View>
      </PaperProvider>
    </StoreProvider>
  )
}
