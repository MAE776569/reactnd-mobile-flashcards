import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Button, Title, Caption } from "react-native-paper"
import { red } from "../utils/colors"
import { connect } from "react-redux"
import { handleRemoveDeck } from "../actions/decks"
import { HeaderBackButton } from "react-navigation-stack"
import { white } from "../utils/colors"

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deck.title,
      headerLeft: (
        <HeaderBackButton
          tintColor={white}
          onPress={() => navigation.navigate("Decks")}
        />
      )
    }
  }

  shouldComponentUpdate(nextProps){
    return nextProps.deck !== null && nextProps.deck !== undefined
  }

  deleteDeck = () => {
    const { navigation, removeDeck, deck } = this.props
    removeDeck(deck.id).then(() => {
      navigation.navigate("Decks")
    })
  }

  render() {
    const { deck, navigation } = this.props

    return (
      <View style={styles.container}>
        <View>
          <Title style={styles.title}>{deck.title}</Title>
          <Caption style={styles.subtitle}>
            {`${deck.questions.length} cards`}
          </Caption>
        </View>
        <View>
          <Button
            mode="outlined"
            style={[styles.button, styles.mb10]}
            onPress={() =>
              navigation.navigate("AddCard", { deck })
            }
          >
            Add Card
          </Button>
          <Button mode="contained" style={[styles.button, styles.mb10]}>
            Start Quiz
          </Button>
          <Button
            mode="text"
            style={styles.button}
            labelStyle={{ color: red }}
            onPress={this.deleteDeck}
          >
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

function mapStateToProps({ decks }, { navigation }){
  const id = navigation.state.params.deck.id
  const deck = decks.find(item => item.id === id)
  return { deck }
}

function mapDispatchToProps(dispatch) {
  return {
    removeDeck: id => dispatch(handleRemoveDeck(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails)
