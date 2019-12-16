import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Button, Title, Caption } from "react-native-paper"
import { red } from "../utils/colors"

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
          <Title style={styles.title}>{deck.title}</Title>
          <Caption style={styles.subtitle}>
            {`${deck.questions.length} cards`}
          </Caption>
        </View>
        <View>
          <Button mode="outlined" style={[styles.button, styles.mb10]}>
            Add Card
          </Button>
          <Button mode="contained" style={[styles.button, styles.mb10]}>
            Start Quiz
          </Button>
          <Button mode="text" style={styles.button} labelStyle={{ color: red }}>
            Delete Deck
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 25
  },
  mb10: {
    marginBottom: 10
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center"
  }
})

export default DeckDetails
