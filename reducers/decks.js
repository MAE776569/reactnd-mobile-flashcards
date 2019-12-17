import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK } from "../actions/decks"

export default function decks(state = [], action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return [...state, ...action.decks]
    case ADD_DECK:
      return state.concat(action.deck)
    case REMOVE_DECK:
      return state.filter(deck => deck.id != action.id)
    default:
      return state
  }
}
