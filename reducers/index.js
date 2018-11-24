 import {AsyncStorage} from 'react-native';
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
 export default (state = initialState, action) => {
   switch (action.type) {
     case 'GET_DECKS':
       if (action.decks) {
         AsycStorage.getItem('decks', action.decks)
       }
       return {
         ...state,
         decks: action.decks || state.decks
       }
       case ADD_DECK :
         return {
           ...state,
           ...action.deck
         }
     default:
       return state
   }
 }
