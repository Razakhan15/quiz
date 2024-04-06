const quizData = {
  title: "NodeJs quiz",
};

const questions = [
  {
    text: "Which of the following statement is correct?",
    type: "mc",
    answers: [
      { text: "js is Server Side Language.", correct: true },
      { text: "js is the Client Side Language.", correct: false },
      {
        text: "js is both Server Side and Client Side Language.",
        correct: false,
      },
      { text: "None of the above.", correct: false },
    ],
  },
  {
    text: "What does the REPL stand for?",
    type: "mc",
    answers: [
      { text: 'REPL stands for "Read Eval Print Loop."', correct: true },
      {
        text: 'REPL stands for "Research Eval Program Learn."',
        correct: false,
      },
      { text: 'REPL stands for "Read Earn Point Learn."', correct: false },
      { text: 'REPL stands for "Read Eval Point Loop."', correct: false },
    ],
  },
  {
    text: "What is the default scope in the Node.js application?",
    type: "txt",
    answers: ["Local"],
  },
  {
    text: "What is Callback?",
    type: "mc",
    answers: [
      {
        text: "The callback is a technique in which a method calls back the caller method.",
        correct: false,
      },
      {
        text: "The callback is an asynchronous equivalent for a function.",
        correct: true,
      },
      { text: "Both of the above.", correct: false },
      { text: "None of the above.", correct: false },
    ],
  },
  {
    text: "What is the best practice to do in your code to improve the performance of your application?",
    type: "mc",
    answers: [
      { text: "Using gzip compression.", correct: true },
      { text: "Don't use synchronous functions.", correct: false },
      { text: "Do logging correctly.", correct: false },
      { text: "Handle exceptions properly.", correct: false },
    ],
  },
  {
    text: "Is Node.js multithreaded?",
    type: "txt",
    answers: ["No"],
  },
  {
    text: "Which of the following types of applications can be built using Node.js?",
    type: "mc",
    answers: [
      { text: "Web Application", correct: false },
      { text: "Chat Application", correct: false },
      { text: "RESTful Service", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    text: "Which of the following module is required to create a web server?",
    type: "mc",
    answers: [
      { text: "net module", correct: false },
      { text: "http module", correct: false },
      { text: "net module", correct: false },
      { text: "url module", correct: true },
    ],
  },
  {
    text: "To include the HTTP server in the node module, what function do we use?",
    type: "txt",
    answers: ["require()"],
  },
  {
    text: "How modules in Node.js can be connected from one component to another ?",
    type: "mc",
    answers: [
      { text: "Expose", correct: false },
      { text: "Module", correct: false },
      { text: "Exports", correct: true },
      { text: "All of the above", correct: false },
    ],
  },
];

module.exports = { quizData, questions };
