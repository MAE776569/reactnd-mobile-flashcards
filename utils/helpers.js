import { AsyncStorage } from "react-native"

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
  return AsyncStorage.getAllKeys().then(keys =>
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

export function cardTextIsValid(text) {
  return text.trim().length >= 4
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
