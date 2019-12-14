import { fetchDecks, storeDeck } from "../utils/helpers"

export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function handleReceiveDecks() {
  return dispatch => {
    return fetchDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .catch(error => console.log("Error fetching decks", error))
  }
}

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function handleAddDeck(deck){
  return dispatch => {
    return storeDeck(deck)
    .then(deck => dispatch(addDeck(deck)))
    .catch(error => console.log("Error Adding deck", error))
  }
}