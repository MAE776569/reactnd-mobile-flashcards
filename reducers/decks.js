import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK } from "../actions/decks"
import { ADD_CARD } from "../actions/cards"

export default function decks(state = [], action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return [...state, ...action.decks]
    case ADD_DECK:
      return state.concat(action.deck)
    case REMOVE_DECK:
      return state.filter(deck => deck.id != action.id)
    case ADD_CARD:
      return state.map(deck =>
        deck.id === action.deckId
          ? Object.assign(deck, { questions: [...deck.questions, action.card] })
          : Object.assign(deck, {})
      )
    default:
      return state
  }
}
