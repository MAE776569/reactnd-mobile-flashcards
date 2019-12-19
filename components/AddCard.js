import React, { Component } from "react"
import { KeyboardAvoidingView, StyleSheet } from "react-native"
import { TextInput, Button } from "react-native-paper"

class AddCard extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          mode="outlined"
          label="Question"
          placeholder="What is a component?"
          style={styles.mb20}
          autoFocus
        />
        <TextInput
          mode="outlined"
          label="Answer"
          placeholder="Component let you split the UI into independent, reusable pieces"
          multiline={true}
          style={styles.mb20}
        />
        <Button mode="contained" style={styles.submitBtn}>
          Submit
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  mb20: {
    marginBottom: 20
  },
  submitBtn: {
    alignSelf: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 25
  }
})

export default AddCard
