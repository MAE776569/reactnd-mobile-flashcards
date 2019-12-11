import React, { Component } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { Divider, ActivityIndicator } from "react-native-paper"
import { connect } from "react-redux"
import DeckItem from "./DeckItem"
import { fetchDecks } from "../utils/helpers"
import { receiveDecks } from "../actions/decks"

class DeckList extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    const { getDecks } = this.props
    getDecks().then(() => {
      this.setState({ loading: false })
      console.log(this.props.decks)
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    const { decks } = this.props

    return (
      <FlatList
        contentContainerStyle={!decks.length && styles.container}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={<Text>No Decks!</Text>}
        data={decks}
        renderItem={({ item }) => (
          <DeckItem
            title={item.title}
            description={`${item.questions.length} cards`}
          />
        )}
        keyExtractor={item => item.id}
      />
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

function mapStateToProps({ decks }) {
  const deckList = Object.keys(decks).map(deck => ({
    id: deck,
    ...decks[deck]
  }))
  return {
    decks: deckList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDecks: () => fetchDecks().then(decks => dispatch(receiveDecks(decks)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
