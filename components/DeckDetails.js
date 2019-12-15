import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import DeckItem from "./DeckItem"
import { Button, List } from "react-native-paper"

class DeckDetails extends Component {
  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <List.Item
          title={deck.title}
          description={`${deck.questions.length} cards`}
        />
        <Button mode="outlined">
          Add Card
        </Button>
        <Button mode="contained">
          Start Quiz
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default DeckDetails
