import React, { Component } from "react"
import { FlatList, StyleSheet, Text } from "react-native"
import { Divider } from "react-native-paper"
import { connect } from "react-redux"
import DeckItem from "./DeckItem"

class DeckList extends Component {
  render() {
    const { decks } = this.props

    return (
      <FlatList
        contentContainerStyle={!decks.length && styles.container}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={<Text>No Decks!</Text>}
        data={decks}
        renderItem={({ item }) => (
          <DeckItem title={item.title} description={`${item.questions.length} cards`} />
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

function mapStateToProps({ decks }){
  const deckList = Object.keys(decks).map((deck) => ({
    id: deck,
    ...decks[deck]
  }))
  return {
    decks: deckList
  }
}

export default connect(mapStateToProps)(DeckList)
