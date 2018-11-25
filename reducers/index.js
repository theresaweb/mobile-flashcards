 import { GET_DECKS, ADD_DECK } from '../actions'

 const initialState = {
   decks:  {
     React: {
       title: 'React',
       questions: [
         {
           question: 'What is React?',
           answer: 'A library for managing user interfaces'
         },
         {
           question: 'Where do you make Ajax requests in React?',
           answer: 'The componentDidMount lifecycle event'
         }
       ]
     },
     JavaScript: {
       title: 'JavaScript',
       questions: [
         {
           question: 'What is a closure?',
           answer: 'The combination of a function and the lexical environment within which that function was declared.'
         }
       ]
     }
   }
 }
export default function decks (state = initialState, action) {
   switch (action.type) {
     case GET_DECKS:
         return {
           ...state,
           ...action.decks
         }
       case ADD_DECK:
       const decks = state.decks ? state.decks : {}
       decks[action.deck.title] = action.deck
         return {
             ...state,
             decks: decks
         }
     default:
       return state
   }
 }
