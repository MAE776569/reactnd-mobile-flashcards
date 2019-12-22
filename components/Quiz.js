import React, { Component } from "react"
import { View, StyleSheet, Animated } from "react-native"
import { Title, Headline, Button } from "react-native-paper"
import { correctGreen, incorrectRed, darkRed } from "../utils/colors"
import { connect } from "react-redux"

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    showAnswer: false,
    totalCorrect: 0,
    fade: new Animated.Value(0)
  }

  componentDidMount(){
    const { questions } = this.props
    const { showAnswer, fade } = this.state
    if(questions.length && !showAnswer){
      Animated.timing(fade, { toValue: 1, duration: 800 }).start()
    }
  }

  render() {
    const { questions } = this.props
    if (!questions.length) {
      return (
        <View style={[styles.container, { justifyContent: "center" }]}>
          <Headline>
            Sorry, you can't take a quiz because there are no cards in the deck.
          </Headline>
        </View>
      )
    }

    const { currentQuestion, fade } = this.state

    return (
      <View style={styles.container}>
        <Title style={styles.cardsCount}>
          {`${currentQuestion + 1}/${questions.length}`}
        </Title>
        <Animated.View style={[styles.mt20, { opacity: fade }]}>
          <Headline style={{ textAlign: "center" }}>
            {questions[currentQuestion].question}
          </Headline>
          <Button mode="text" color={darkRed} style={{ marginTop: 10 }}>
            Answer
          </Button>
        </Animated.View>
        <View style={styles.btnGroup}>
          <Button mode="contained" color={correctGreen} style={styles.btn}>
            Correct
          </Button>
          <Button
            mode="contained"
            color={incorrectRed}
            style={[styles.mt20, styles.btn]}
          >
            Incorrect
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  cardsCount: {
    alignSelf: "flex-start"
  },
  mt20: {
    marginTop: 20
  },
  btnGroup: {
    flex: 1,
    justifyContent: "center"
  },
  btn: {
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  }
})

function mapStateToProps({ decks }, { navigation }) {
  const id = navigation.state.params.deckId
  const deck = decks.find(deck => deck.id === id)
  return {
    questions: deck.questions
  }
}

export default connect(mapStateToProps)(Quiz)
