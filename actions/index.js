export const GET_DECKS = 'GET_DECKS'
export const UPDATE_DECK = 'UPDATE_DECK'

export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}
export function updateDeck (deck) {
 return {
   type: UPDATE_DECK,
   deck,
 }
}
