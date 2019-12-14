import React, { Component } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { Divider, ActivityIndicator, Title } from "react-native-paper"
import { connect } from "react-redux"
import DeckItem from "./DeckItem"
import { handleReceiveDecks } from "../actions/decks"

class DeckList extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    const { getDecks } = this.props
    getDecks()
    .then(() =>{
      this.setState({ loading: false })
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
        ListEmptyComponent={<Title>No Decks!</Title>}
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
    getDecks: () => dispatch(handleReceiveDecks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
