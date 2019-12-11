import { AsyncStorage } from "react-native"

export function fetchDecks() {
  return AsyncStorage.getItem("deck")
    .then(JSON.parse)
}
