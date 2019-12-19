import React, { Component } from "react"
import { KeyboardAvoidingView, StyleSheet } from "react-native"
import { TextInput, Button } from "react-native-paper"

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
    loading: false
  }

  render() {
    const { question, answer, loading } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          mode="outlined"
          label="Question"
          placeholder="What is a component?"
          style={styles.mb20}
          autoFocus
          ref={input => (this.questionInput = input)}
          value={question}
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          mode="outlined"
          label="Answer"
          placeholder="Component let you split the UI into independent, reusable pieces"
          multiline={true}
          style={styles.mb20}
          ref={input => (this.answerInput = input)}
          value={answer}
          onChangeText={answer => {
            this.setState({ answer })
          }}
        />
        <Button mode="contained" style={styles.submitBtn} loading={loading}>
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