import { AsyncStorage } from "react-native"
import { Notifications } from "expo"
import * as Permissions from "expo-permissions"

export function DeckTitleIsValid(title) {
  return (
    title
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/, " ")
      .trim().length >= 4
  )
}

export function getDeckKey(title) {
  return title
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/, " ")
    .trim()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join("")
}

export function fetchDecks() {
  return AsyncStorage.getAllKeys()
    .then(keys => keys.filter(key => key !== NOTIFICATION_KEY))
    .then(keys =>
      AsyncStorage.multiGet(keys).then(pairs =>
        pairs.length
          ? pairs.map(([key, value]) =>
              Object.assign(JSON.parse(value), { id: key })
            )
          : pairs
      )
    )
}

export function storeDeck(deck) {
  const [key] = Object.keys(deck)
  const [value] = Object.values(deck)
  return AsyncStorage.setItem(key, JSON.stringify(value)).then(() =>
    Object.assign(value, { id: key })
  )
}

export function deleteDeck(key) {
  return AsyncStorage.removeItem(key)
}

export function cardTextIsValid(text, length) {
  return text.trim().length >= length
}

export function saveCard(deckId, card) {
  return AsyncStorage.getItem(deckId)
    .then(JSON.parse)
    .then(deck =>
      AsyncStorage.mergeItem(
        deckId,
        JSON.stringify({ questions: [...deck.questions, card] })
      )
    )
}

const correctOptions = ["yes", "true", "correct", "right"]
const incorrectOptions = ["no", "false", "incorrect", "wrong"]

export function answerIsCorrect(questionAnswer, userChoice) {
  const cleanAnswer = questionAnswer.trim().toLowerCase()
  return (
    (correctOptions.includes(cleanAnswer) && userChoice) ||
    (incorrectOptions.includes(cleanAnswer) && !userChoice)
  )
}

const NOTIFICATION_KEY = "DAILY_REMINDER"

function createNotification() {
  return {
    title: "Start a new quiz!",
    body: "Don't forget to finish your quizzes for today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(20)
            tomorrow.setMinutes(0)
            tomorrow.setSeconds(0)

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day"
            })

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}
