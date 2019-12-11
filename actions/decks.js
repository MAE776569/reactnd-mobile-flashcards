import { fetchDecks } from "../utils/helpers"

export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function handleReceiveDecks(cb) {
  return dispatch => {
    return fetchDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(cb)
      .catch(error => console.log("Error fetching decks", error))
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}
