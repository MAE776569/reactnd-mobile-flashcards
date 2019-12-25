import React, { Component } from "react"
import { View, StyleSheet, Animated } from "react-native"
import { Title, Headline, Button } from "react-native-paper"
import { correctGreen, incorrectRed } from "../utils/colors"
import { connect } from "react-redux"
import CardAnimation from "./CardAnimation"
import ScoreView from "./ScoreView"
import { answerIsCorrect } from "../utils/helpers"

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    totalCorrect: 0,
    fade: new Animated.Value(0),
    showScore: false
  }

  componentDidMount() {
    Animated.timing(this.state.fade, { toValue: 1, timing: 1000 }).start()
  }

  handleAnswer = (userAnswer) => {
    const { questions, questionsLength } = this.props
    const { currentQuestion, fade } = this.state
    const questionAnswer = questions[currentQuestion].answer

    if (answerIsCorrect(questionAnswer, userAnswer)) {
      this.setState((currentState) => ({
        totalCorrect: currentState.totalCorrect + 1
      }))
    }

    if (currentQuestion + 1 < questionsLength) {
      fade.setValue(0)
      this.setState((currentState) => ({
        currentQuestion: currentState.currentQuestion + 1
      }))
      Animated.timing(fade, { toValue: 1, timing: 1000 }).start()
    }
    else {
      this.setState({ showScore: true })
    }
  }

  render() {
    const { questions, questionsLength } = this.props

    if (!questionsLength) {
      return (
        <View style={[styles.container, { justifyContent: "center" }]}>
          <Headline>
            Sorry, you can't take a quiz because there are no cards in the deck.
          </Headline>
        </View>
      )
    }

    const { currentQuestion, fade, showScore, totalCorrect } = this.state

    if (showScore) {
      return <ScoreView correct={totalCorrect} total={questionsLength} />
    }

    return (
      <View style={styles.container}>
        <Title style={styles.cardsCount}>
          {`${currentQuestion + 1}/${questionsLength}`}
        </Title>
        <Animated.View
          style={{ opacity: fade, flex: 1, alignItems: "flex-start" }}
        >
          <CardAnimation
            question={questions[currentQuestion].question}
            answer={questions[currentQuestion].answer}
          />
        </Animated.View>
        <View style={styles.btnGroup}>
          <Button
            mode="contained"
            color={correctGreen}
            style={styles.btn}
            onPress={() => this.handleAnswer(true)}
          >
            Correct
          </Button>
          <Button
            mode="contained"
            color={incorrectRed}
            style={[styles.mt20, styles.btn]}
            onPress={() => this.handleAnswer(false)}
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
    questions: deck.questions,
    questionsLength: deck.questions.length
  }
}

export default connect(mapStateToProps)(Quiz)
