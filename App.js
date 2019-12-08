import React from "react"
import { View, StatusBar } from "react-native"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import Constants from "expo-constants"

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
