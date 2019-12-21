import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Title, Headline, Button } from "react-native-paper"
import { correctGreen, incorrectRed, darkRed } from "../utils/colors"

class Quiz extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Title style={styles.cardsCount}>2/2</Title>
        <View>
          <Headline>Question</Headline>
          <Button mode="text" color={darkRed}>
            Answer
          </Button>
        </View>
        <View>
          <Button mode="contained" color={correctGreen}>
            Correct
          </Button>
          <Button mode="contained" color={incorrectRed}>
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  cardsCount: {
    alignSelf: "flex-start"
  }
})

export default Quiz