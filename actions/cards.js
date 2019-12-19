export const ADD_CARD = "ADD_CARD"

function addCard(deckId, card){
  return {
    type: ADD_CARD,
    deckId,
    card
  }
}