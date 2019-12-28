import React, { Component } from "react"
import { Animated } from "react-native"
import { Headline, Title, Subheading } from "react-native-paper"

class ScoreView extends Component {
  state = {
    fadeIn: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.fadeIn, {
      toValue: 1,
      duration: 1000
    }).start()
  }

  render() {
    const { correct, total } = this.props
    const { fadeIn } = this.state

    return (
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          opacity: fadeIn
        }}
      >
        <Headline>Your Score</Headline>
        <Title style={{ marginBottom: 30 }}>{`${correct}/${total}`}</Title>
        <Subheading>
          {correct === total
            ? "Great job, what about starting a new quiz"
            : "Keep practicing, practice makes perfect"}
        </Subheading>
      </Animated.View>
    )
  }
}

export default ScoreView
