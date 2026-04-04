export const CATEGORIES = [
  { id: '1', name: 'Frontend', icon: 'code-xml', color: '#EEF2FF' },
  { id: '2', name: 'Backend', icon: 'Database', color: '#ECFDF5' },
  { id: '3', name: 'Mobile Computing', icon: 'Smartphone', color: '#FFF7ED' },
  { id: '4', name: 'Data Structure', icon: 'code', color: '#F5F3FF' },
];

export const QUESTIONS = {
  'Frontend': [
    {
      question: "Which hook is used to manage state in React?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correctIndex: 1,
    },
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      correctIndex: 1,
    },
    {
      question: "Which HTML tag is used to link a JavaScript file?",
      options: ["<js>", "<script>", "<link>", "<javascript>"],
      correctIndex: 1,
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyper>"],
      correctIndex: 1,
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-size", "letter-spacing", "line-height"],
      correctIndex: 0,
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Data Oriented Model"],
      correctIndex: 0,
    },
    {
      question: "Which framework is used for frontend development?",
      options: ["Django", "React", "Angular", "Vue"],
      correctIndex: 1,
    },
    {
      question: "Which HTML element is used for inserting images?",
      options: ["<img>", "<script>", "<link>", "<javascript>"],
      correctIndex: 0,
    },
    {
      question: "Which is not JavaScript framework ?",
      options: ["Node.js", "React", "Angular", "Vue"],
      correctIndex: 0,
    }

  ],
  'Backend': [
    {
      question: "Which of these is a NoSQL database?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
      correctIndex: 2,
    },
    {
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Applied Program Index", "Automated Protocol Integration", "Array Program Interface"],
      correctIndex: 0,
    },
    {
      question: "Which HTTP method is used to retrieve data?",
      options: ["POST", "GET", "PUT", "DELETE"],
      correctIndex: 1,
    },
    {
      question: "Which status code indicates a successful HTTP request?",
      options: ["200", "404", "500", "302"],
      correctIndex: 0,
    },
    {
      question: "Which language is used with Django?",
      options: ["Python", "JavaScript", "Java", "C++"],
      correctIndex: 0,
    },
    {
      question: "What does CRUD stand for?",
      options: ["Create, Read, Update, Delete", "Create, Run, Update, Delete", "Create, Read, Upload, Delete", "Create, Run, Upload, Delete"],
      correctIndex: 0,
    },
    {
      question: "Which of these is a backend framework?",
      options: ["React", "Angular", "Django", "Vue"],   
      correctIndex: 2,    
    }


  ],
    'Mobile Computing': [
    {
      question: "Which of these is a cross-platform mobile development framework?",
      options: ["React Native", "Swift", "Kotlin", "Objective-C"],
        correctIndex: 0,
    },
    {
      question: "Which company developed iOS?",
      options: ["Google", "Apple", "Microsoft", "Amazon"],
        correctIndex: 1,
    },
    {
      question: "Which of these is a cross-platform mobile development framework?",
      options: ["React Native", "Swift", "Kotlin", "Objective-C"],
        correctIndex: 0,
    },
    {
        question: "Which development approach uses separate codebases for iOS and Android?",
        options: ["Cross-platform", "Native", "Hybrid", "Responsive"],
        correctIndex: 1,
    },
    {
        question: "Flutter's main programming language?",
        options: ["Dart", "Java", "Swift", "Kotlin"],
        correctIndex: 0,
    }
  ],
  'Data Structure': [
    {   
        question: "Which data structure uses LIFO (Last In First Out) principle?",
        options: ["Queue", "Stack", "Linked List", "Array"],
        correctIndex: 1,
    },
    {
        question: "Which data structure is used to implement a priority queue?",
        options: ["Heap", "Stack", "Queue", "Linked List"],
        correctIndex: 0,
    },  
    {
        question: "What is the time complexity of searching for an element in a balanced binary search tree (BST)?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctIndex: 1,
    }
  ]
};