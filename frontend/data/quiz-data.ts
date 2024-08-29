import { ItemOption } from '@/components/ChoiceSelector';

const quizData = {
  quesitons: [
    {
      name: "React JS",
      questions: [
        {
          id: 1,
          question: "What is the primary purpose of React?",
          options: [
            "Building user interfaces",
            "Managing databases",
            "Handling server requests",
            "Creating APIs",
          ],
          category:"frontend",
          experience:"Beginner",
          answer: "Building user interfaces",
        },
        {
          id: 2,
          question: "Which of the following is a React lifecycle method?",
          options: ["componentDidMount", "ngOnInit", "useEffect", "render"],
          answer: "componentDidMount",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 3,
          question: "What is JSX?",
          options: [
            "A syntax extension for JavaScript",
            "A CSS preprocessor",
            "A server-side language",
            "A database query language",
          ],
          answer: "A syntax extension for JavaScript",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 4,
          question:
            "Which hook is used for managing state in functional components?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          answer: "useState",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 5,
          question: "What is the virtual DOM?",
          options: [
            "A lightweight representation of the actual DOM",
            "A CSS preprocessor",
            "A tool for server-side rendering",
            "A database management system",
          ],
          answer: "A lightweight representation of the actual DOM",
          category:"frontend",
          experience:"Beginner",
        },
      ],
    },
    {
      name: "Node JS",
      questions: [
        {
          id: 1,
          question: "What is Node.js primarily used for?",
          options: [
            "Building server-side applications",
            "Creating mobile apps",
            "Designing UIs",
            "Writing SQL queries",
          ],
          answer: "Building server-side applications",
          category:"Backend",
          experience:"Beginner",
        },
        {
          id: 2,
          question: "Which of the following is a core module in Node.js?",
          options: ["http", "axios", "react", "express"],
          answer: "http",
          category:"Backend",
          experience:"Beginner",
        },
        {
          id: 3,
          question: "What is npm?",
          options: [
            "A package manager for Node.js",
            "A programming language",
            "A database",
            "A front-end framework",
          ],
          answer: "A package manager for Node.js",
          category:"Backend",
          experience:"Beginner",
        },
        {
          id: 4,
          question: "What does the 'fs' module in Node.js handle?",
          options: [
            "File system operations",
            "HTTP requests",
            "Database connections",
            "User authentication",
          ],
          answer: "File system operations",
          category:"Backend",
          experience:"Beginner",
        },
        {
          id: 5,
          question: "What is middleware in Node.js?",
          options: [
            "Functions that handle requests and responses",
            "A database management tool",
            "A type of frontend framework",
            "A programming language",
          ],
          answer: "Functions that handle requests and responses",
          category:"Backend",
          experience:"Beginner",
        },
      ],
    },
    {
      name: "HTML",
      questions: [
        {
          id: 1,
          question: "What does HTML stand for?",
          options: [
            "HyperText Markup Language",
            "HyperText Module Language",
            "Hyperlink Text Management Language",
            "HyperTransfer Markup Language",
          ],
          answer: "HyperText Markup Language",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 2,
          question: "Which tag is used to define an unordered list?",
          options: ["<ul>", "<ol>", "<li>", "<div>"],
          answer: "<ul>",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 3,
          question: "What is the purpose of the <meta> tag in HTML?",
          options: [
            "To provide metadata about the document",
            "To create a navigation menu",
            "To define a header section",
            "To include CSS styles",
          ],
          answer: "To provide metadata about the document",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 4,
          question:
            "Which attribute is used to specify the URL of a linked document in an <a> tag?",
          options: ["href", "src", "link", "url"],
          answer: "href",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 5,
          question: "Which tag is used to create a table in HTML?",
          options: ["<table>", "<tab>", "<tbl>", "<grid>"],
          answer: "<table>",
          category:"frontend",
          experience:"Beginner",
        },
      ],
    },
    {
      name: "CSS",
      questions: [
        {
          id: 1,
          question: "What does CSS stand for?",
          options: [
            "Cascading Style Sheets",
            "Creative Style System",
            "Cascading Sheet Style",
            "Computer Style Sheets",
          ],
          answer: "Cascading Style Sheets",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 2,
          question:
            "Which CSS property is used to change the background color?",
          options: ["background-color", "color", "bgcolor", "background"],
          answer: "background-color",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 3,
          question: "What does the 'float' property do in CSS?",
          options: [
            "It specifies how an element should float",
            "It centers the content",
            "It applies a shadow effect",
            "It changes the text color",
          ],
          answer: "It specifies how an element should float",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 4,
          question: "How do you add a comment in CSS?",
          options: [
            "/* this is a comment */",
            "// this is a comment",
            "<!-- this is a comment -->",
            "# this is a comment",
          ],
          answer: "/* this is a comment */",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 5,
          question:
            "Which property is used to set the font size of text in CSS?",
          options: ["font-size", "text-size", "font-weight", "text-style"],
          answer: "font-size",
          category:"frontend",
          experience:"Beginner",
        },
      ],
    },
    {
      name: "JavaScript",
      questions: [
        {
          id: 1,
          question: "What is JavaScript primarily used for?",
          options: [
            "Creating interactive web content",
            "Designing UIs",
            "Managing databases",
            "Styling web pages",
          ],
          answer: "Creating interactive web content",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 2,
          question: "Which of the following is a JavaScript data type?",
          options: ["Boolean", "Class", "Library", "Method"],
          answer: "Boolean",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 3,
          question: "What does 'DOM' stand for in JavaScript?",
          options: [
            "Document Object Model",
            "Data Object Management",
            "Document Operation Module",
            "Digital Object Model",
          ],
          answer: "Document Object Model",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 4,
          question:
            "Which method is used to convert a JSON string to a JavaScript object?",
          options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.objectify()",
          ],
          answer: "JSON.parse()",
          category:"frontend",
          experience:"Beginner",
        },
        {
          id: 5,
          question: "What is the use of the 'let' keyword in JavaScript?",
          options: [
            "To declare a block-scoped variable",
            "To define a function",
            "To create a loop",
            "To import a module",
          ],
          answer: "To declare a block-scoped variable",
          category:"frontend",
          experience:"Beginner",
        },
      ],
    },
    // Add more technologies and questions as needed
  ],

};
export const getCustomeQuizData= ( selectedTopics:ItemOption[], selectedCategory:ItemOption[], selectedExperience:ItemOption[])=> {
  const filteredQuestions: { id: number; question: string; options: string[]; category: string; experience: string; answer: string; }[] = [];

  selectedTopics.forEach(topic => {
    const topicData = quizData.quesitons.filter(q => q.name === topic.title);
    //  
    if (topicData) {
      const topicQuestions = topicData[0].questions.filter(q => 
        q.category.toLocaleLowerCase() === selectedCategory[0].title.split(" ")[0].toLocaleLowerCase() && q.experience === selectedExperience[0].title
      );
      filteredQuestions.push(...topicQuestions);
    }
  });

  return filteredQuestions;
}
export default quizData;
