 import { GET_DECKS, UPDATE_DECK } from '../actions'

 const initialState = {
   decks:  {
     Addition: {
       title: 'Addition',
       questions: [
         {
           question: '1 + 1',
           answer: '2'
         },
         {
           question: '2 + 2',
           answer: '4'
         },
         {
           question: '3 + 1',
           answer: '4'
         },
         {
           question: '5 + 2',
           answer: '7'
         },
         {
           question: '1 + 9',
           answer: '10'
         },
         {
           question: '0 + 2',
           answer: '2'
         }
       ]
     },
     Subtraction: {
       title: 'Subtraction',
       questions: [
         {
           question: '7 - 1',
           answer: '6'
         },
         {
           question: '8 - 3',
           answer: '5'
         },
         {
           question: '2 - 0',
           answer: '2'
         },
         {
           question: '3 - 3',
           answer: '0'
         },
         {
           question: '9 - 1',
           answer: '8'
         },
         {
           question: '1 - 1',
           answer: '0'
         }
       ]
     },
   }
 }
export default function decks (state = initialState, action) {
   switch (action.type) {
     case GET_DECKS:
         return {
           ...state,
           ...action.decks
         }
     case UPDATE_DECK:
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
