import { fetchDecks, storeDeck, deleteDeck } from "../utils/helpers"

export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"
export const REMOVE_DECK = "REMOVE_DECK"

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

export function handleAddDeck(deck) {
  return dispatch => {
    return storeDeck(deck)
      .then(deck => {
        dispatch(addDeck(deck))
        return deck
      })
      .catch(error => console.log("Error adding deck", error))
  }
}

function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id
  }
}

export function handleRemoveDeck(id) {
  return dispatch => {
    return deleteDeck(id)
      .then(() => dispatch(removeDeck(id)))
      .catch(error => console.log("Error removing deck", error))
  }
}
