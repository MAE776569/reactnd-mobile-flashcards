import { AsyncStorage } from "react-native"

const DECKS_KEY = "DECKS"

export function DeckTitleIsValid(title) {
  return (
    title
      .trim()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/, " ")
      .split(" ").length >= 4
  )
}

export function getDeckKey(title) {
  return title
    .trim()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/, " ")
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join("")
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_KEY).then(JSON.parse)
}

export function storeDeck(deck) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.stringify)
    .then(decks => Object.assign(decks, deck))
    .then(decks => AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(decks)))
}
