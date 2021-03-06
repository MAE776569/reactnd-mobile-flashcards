import React, { Component } from "react"
import { KeyboardAvoidingView, StyleSheet, Alert } from "react-native"
import { Headline, TextInput, Button } from "react-native-paper"
import { DeckTitleIsValid, getDeckKey } from "../utils/helpers"
import { connect } from "react-redux"
import { handleAddDeck } from "../actions/decks"

class NewDeck extends Component {
  state = {
    deckTitle: "",
    loading: false
  }

  componentDidMount(){
    this.props.navigation.addListener("didFocus", () => {
      this.deckTitleInput.focus()
    })
  }

  submitDeck = () => {
    const { deckTitle } = this.state
    const { addDeck, navigation } = this.props

    if (!DeckTitleIsValid(deckTitle)) {
      Alert.alert(
        "Enter Valid Title",
        "Please enter a valid title that at least consists of 4 characters"
      )
      this.deckTitleInput.focus()
    }
    else {
      const newDeck = {
        [getDeckKey(deckTitle)]: {
          title: deckTitle,
          questions: []
        }
      }

      this.setState({
        loading: true
      })

      addDeck(newDeck).then((deck) => {
        this.setState({
          deckTitle: "",
          loading: false
        })

        navigation.navigate("DeckDetails", { deck })
      })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Headline style={{ marginBottom: 25, textAlign: "center" }}>
          What is the title of your new deck?
        </Headline>
        <TextInput
          style={{ marginBottom: 25 }}
          mode="outlined"
          label="Deck title"
          value={this.state.deckTitle}
          onChangeText={deckTitle => this.setState({ deckTitle })}
          ref={input => (this.deckTitleInput = input)}
        />
        <Button
          style={styles.submitBtn}
          mode="contained"
          loading={this.state.loading}
          onPress={this.submitDeck}
        >
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
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 25,
    width: "60%"
  }
})

function mapDispatchToProps(dispatch) {
  return {
    addDeck: deck => dispatch(handleAddDeck(deck))
  }
}

export default connect(null, mapDispatchToProps)(NewDeck)
