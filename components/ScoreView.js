import React, { Component } from "react"
import { Animated } from "react-native"
import { Headline, Title } from "react-native-paper"

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
        <Title>{`${correct}/${total}`}</Title>
      </Animated.View>
    )
  }
}

export default ScoreView
