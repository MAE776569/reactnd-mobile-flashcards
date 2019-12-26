import React from "react"
import { StyleSheet } from "react-native"
import { List } from "react-native-paper"

function DeckItem(props) {
  return (
    <List.Item
      {...props}
      titleStyle={styles.title}
      descriptionStyle={styles.cards}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  cards: {
    fontSize: 16,
    textAlign: "center"
  }
})

export default DeckItem
