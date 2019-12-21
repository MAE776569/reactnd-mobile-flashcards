import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Title, Headline, Button } from "react-native-paper"
import { correctGreen, incorrectRed, darkRed } from "../utils/colors"

class Quiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.cardsCount}>2/2</Title>
        <View style={styles.mt20}>
          <Headline>Question</Headline>
          <Button mode="text" color={darkRed} style={{ marginTop: 10 }}>
            Answer
          </Button>
        </View>
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

export default Quiz