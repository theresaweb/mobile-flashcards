import { AsyncStorage } from 'react-native'

export function submitEntry (deck) {
  return AsyncStorage.mergeItem('decks', JSON.stringify(deck))
}
