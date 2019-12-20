import React, { Component } from "react"
import { KeyboardAvoidingView, StyleSheet, Alert } from "react-native"
import { TextInput, Button } from "react-native-paper"
import { cardTextIsValid } from "../utils/helpers"
import { connect } from "react-redux"
import { handleAddCard } from "../actions/cards"

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
    loading: false
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    const { saveCard, navigation } = this.props
    const { deckId } = navigation.state.params

    if (!cardTextIsValid(question)) {
      Alert.alert(
        "Enter Valid Question",
        "Please enter a valid question that at least consists of 4 characters"
      )
      this.questionInput.focus()
    }
    else if(!cardTextIsValid(answer)){
      Alert.alert(
        "Enter Valid Answer",
        "Please enter a valid answer that at least consists of 4 characters"
      )
      this.answerInput.focus()
    }
    else{
      this.setState({
        loading: true
      })

      saveCard(deckId, { question, answer })
      .then(() => {
        this.setState({
          question: "",
          answer: "",
          loading: false
        })
        navigation.goBack()
      })
    }
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
        <Button
          mode="contained"
          style={styles.submitBtn}
          loading={loading}
          onPress={this.handleSubmit}
        >
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

function mapDispatchToProps(dispatch){
  return {
    saveCard: (deckId, card) => dispatch(handleAddCard(deckId, card))
  }
}

export default connect(null, mapDispatchToProps)(AddCard)
