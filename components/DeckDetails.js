import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button, Headline, Caption } from "react-native-paper"

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deck.title
    }
  }

  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <View>
          <Headline>{deck.title}</Headline>
          <Caption>{`${deck.questions.length} cards`}</Caption>
        </View>
        <View>
          <Button mode="outlined" style={[styles.button, { marginBottom: 10 }]}>
            Add Card
          </Button>
          <Button mode="contained" style={styles.button}>
            Start Quiz
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 25
  }
})

export default DeckDetails
