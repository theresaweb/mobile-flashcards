Mobile Flashcards
===
A React Native App created for Android
____

To Run
____
* Install expo and get up and running https://docs.expo.io/versions/v31.0.0/
* Set up Android Studio Emulator and launch virtual device see: https://docs.expo.io/versions/latest/workflow/android-studio-emulator.html
* cd to directory and run `npm install`
* run `expo start`

Considerations
_____
* Notes
 * Developed only for Android only as I don't have reliable iOs testing emulator or device
 * splash screen created using https://github.com/bamlab/generator-rn-toolbox/tree/master/generators/assets
 * TODO: add validation to forms to require all fields
 * TODO: add a fireworks animation if user gets all correct
 * TODO: Better animation on clicking deck
 * TODO: Add custom fonts
 * TODO: flip animation when you switch between question and answer
 * TODO: swipe animation to mark correct/incorrect by swiping left/right
 * TODO: add features like streak counts, custom notification time, shuffling decks, deleting decks

Method
* Planning
 * Step 1 - Draw All of the Views of the App
 * Step 2 - Break Each View Into a Hierarchy of Components
 * Step 3 - Plan out How Your App Will Manage Data
* Coding
 * Step 1 - Create the Required Views.
 * Step 2 - Use React Native Navigation to Connect the Views.
 * Step 3 - Work on the Views and State.
 * Step 4 - Add AsyncStorage of notification.
 * Step 5 - Add finishing touches and make sure the project meets the rubric.

TODO
____

Requirements
____
* Use create-react-native-app to build your project.
* Allow users to create a deck which can hold an unlimited number of cards.
* Allow users to add a card to a specific deck.
* The front of the card should display the question.
* The back of the card should display the answer.
* Users should be able to quiz themselves on a specific deck and receive a score once they're done.
* Users should receive a notification to remind themselves to study if they haven't already for that day.
* Views
 1. Deck List View (Default View)
   * displays the title of each Deck
   * displays the number of cards in each deck
 2. Individual Deck View
   * displays the title of the Deck
   * displays the number of cards in the deck
   * displays an option to start a quiz on this specific deck
   * An option to add a new question to the deck
 3. Quiz View
   * displays a card question
   * an option to view the answer (flips the card)
   * a "Correct" button
   * an "Incorrect" button
   * the number of cards left in the quiz
   * Displays the percentage correct once the quiz is complete
  4. New Deck View
   * An option to enter in the title for the new deck
   * An option to submit the new deck title
  5. New Question View
   * An option to enter in the question
   * An option to enter in the answer
   * An option to submit the new question

Sample data
____
```javascript
{
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
```
