import React, { Component } from "react"
import { View } from "react-native"
import FlipCard from "react-native-flip-card"
import { darkRed } from "../utils/colors"
import { Headline, Button } from "react-native-paper"

class CardAnimation extends Component {
  state = {
    flipped: false
  }

  flipCard = () => {
    this.setState(currentState => ({
      flipped: !currentState.flipped
    }))
  }

  render() {
    const { question, answer } = this.props

    return (
      <FlipCard
        clickable={false}
        flipHorizontal={true}
        flipVertical={false}
        flip={this.state.flipped}
        friction={10}
        perspective={100}
      >
        <View style={{ backfaceVisibility: "hidden", marginTop: 20 }}>
          <Headline style={{ textAlign: "center" }}>{question}</Headline>
          <Button
            mode="text"
            color={darkRed}
            style={{ marginTop: 10 }}
            onPress={this.flipCard}
          >
            Answer
          </Button>
        </View>
        <View style={{ backfaceVisibility: "hidden", marginTop: 20 }}>
          <Headline style={{ textAlign: "center" }}>{answer}</Headline>
          <Button
            mode="text"
            color={darkRed}
            style={{ marginTop: 10 }}
            onPress={this.flipCard}
          >
            Question
          </Button>
        </View>
      </FlipCard>
    )
  }
}

export default CardAnimation
