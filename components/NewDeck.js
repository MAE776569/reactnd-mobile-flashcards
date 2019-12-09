import React, { Component } from "react"
import { KeyboardAvoidingView, StyleSheet } from "react-native"
import { Headline, TextInput, Button } from "react-native-paper"

class NewDeck extends Component {
  state = {
    deckTitle: "",
    loading: false
  }

  submitDeck = () => {
    this.setState({
      deckTitle: "",
      loading: true
    })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Headline style={{ marginBottom: 12, textAlign: "center" }}>
          What is the title of your new deck?
        </Headline>
        <TextInput
          style={{ marginBottom: 12 }}
          mode="outlined"
          label="Deck title"
          value={this.state.deckTitle}
          onChangeText={deckTitle => this.setState({ deckTitle })}
        />
        <Button
          style={styles.submitBtn}
          mode="contained"
          loading={this.state.loading}
          onPress={this.submitDeck}>
          Submit
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 12
  },
  submitBtn: {
    alignSelf: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    width: "50%"
  }
})

export default NewDeck
