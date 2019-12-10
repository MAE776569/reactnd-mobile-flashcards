import React from "react"
import { StyleSheet } from "react-native"
import { List } from "react-native-paper"

function DeckItem(props) {
  return (
    <List.Item
      {...props}
      titleStyle={styles.textCenter}
      descriptionStyle={styles.textCenter}
    />
  )
}

const styles = StyleSheet.create({
  textCenter: {
    textAlign: "center"
  }
})

export default DeckItem
