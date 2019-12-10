import React, { Component } from "react"
import { FlatList, StyleSheet, Text } from "react-native"
import { Divider } from "react-native-paper"
import { connect } from "react-redux"
import DeckItem from "./DeckItem"

class DeckList extends Component {
  render() {
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        cards: 3
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        cards: 2
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        cards: 1
      }
    ]

    return (
      <FlatList
        contentContainerStyle={!DATA.length && styles.container}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={<Text>No Decks!</Text>}
        data={DATA}
        renderItem={({ item }) => (
          <DeckItem title={item.title} description={`${item.cards} cards`} />
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

export default connect()(DeckList)
