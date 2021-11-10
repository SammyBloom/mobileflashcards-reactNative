export const decks = {
    Programming: {
        title: 'Programming',
        questions: [
          {
            question: 'What is Programming?',
            answer: 'Creating a set of instructions that tell a computer how to perform a task'
          },
          {
            question: 'Who created the first computer?',
            answer:
              'Charles Babbage'
          },
          {
            question: 'React is a framework under which programming language?',
            answer:
              'JavaScript'
          }
        ]
    },
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React JS?',
          answer: 'ReactJS is an open-source frontend JavaScript library which is used for building user interfaces, specifically for single page applications'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        },
        {
            question: "What is JSX?",
            answer:
              "JSX is a syntax notation for JavaScript XML(XML-like syntax extension to ECMAScript). It stands for JavaScript XML."
          }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    Redux: {
      title: 'Redux',
      questions: [
        {
          question: 'What is Redux?',
          answer: 'A predictable state container for JavaScript Apps'
        },
        {
          question: 'What is an action creator?',
          answer:
            'It is a function that takes an input and returns an object with a type and data property.'
        },
        {
          question: 'What is a reducer?',
          answer:
            'A reducer is a pure function that takes the current state and action and returns the next state.'
        }
      ]
    }
  };