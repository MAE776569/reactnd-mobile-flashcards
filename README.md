# Mobile Flashcards App

Mobile application that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called **decks**, add flashcards to those decks, then take quizzes on those decks.

## How to install

- use `npm install` to install dependencies
- `npm start` to start develpoment server

## App Features

- Allow users to create a deck which can hold an unlimited number of cards and also to delete the deck.
- Allow users to add a card to a specific deck.
- The front of the card displays the question.
- The back of the card displays the answer.
- Users are able to quiz themselves on a specific deck and receive a score once they're done.
- Users receive a notification to remind themselves to study if they haven't already for that day

## Managing Data

`AsyncStorage` is used to store the decks and flashcards and `Redux` is used to manage the state of the app.

Each deck has a title and array of questions and each question consists of a question and answer.

```javascript
{
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
}
```
