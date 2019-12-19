import React, { Component } from "react"
import { KeyboardAvoidingView } from "react-native"
import { TextInput, Button } from "react-native-paper"

class AddCard extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          mode="outlined"
          label="Question"
          placeholder="What is a component?"
        />
        <TextInput
          mode="outlined"
          label="Answer"
          placeholder="Component let you split the UI into independent, reusable pieces"
          multiline={true}
        />
        <Button mode="contained">Submit</Button>
      </KeyboardAvoidingView>
    )
  }
}

export default AddCard
