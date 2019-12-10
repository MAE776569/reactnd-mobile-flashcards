import React, { Component } from "react"
import { FlatList } from "react-native"
import { Divider, List } from "react-native-paper"
import { connect } from "react-redux"

class DeckList extends Component {
  render() {
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item"
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item"
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item"
      }
    ]

    return (
      <FlatList
        ItemSeparatorComponent={Divider}
        data={DATA}
        renderItem={({ item }) => (
          <List.Item title={item.title}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          description={item.id} />
        )}
        keyExtractor={(item) => item.id}
      />
    )
  }
}

export default connect()(DeckList)
