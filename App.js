import React from "react"
import { View, StatusBar } from "react-native"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import Constants from "expo-constants"
import DeckList from "./components/DeckList"
import { createAppContainer } from "react-navigation"
import { createMaterialTopTabNavigator } from "react-navigation-tabs"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#37474f",
    accent: "#62727b"
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            height: Constants.statusBarHeight
          }} >
          <StatusBar
            translucent
            backgroundColor={theme.colors.primary}
            barStyle="light-content"
          />
        </View>
        
      </View>
    </PaperProvider>
  )
}
