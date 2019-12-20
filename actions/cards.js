import { saveCard } from "../utils/helpers"

export const ADD_CARD = "ADD_CARD"

function addCard(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card
  }
}

export function handleAddCard(deckId, card) {
  return dispatch => {
    return saveCard(deckId, card)
      .then(dispatch(addCard(deckId, card)))
      .catch(error => console.log("Error saving card", error))
  }
}
