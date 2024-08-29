import { ItemOption } from '@/components/ChoiceSelector';
const newQuizData = [
  {
    name: "PHP",
    questions: [
      {
        id: 1,
        question: "What is PHP primarily used for?",
        options: [
          "Server-side scripting",
          "Designing web layouts",
          "Managing frontend frameworks",
          "Database management",
        ],
        answer: "Server-side scripting",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 2,
        question: "Which of the following is a PHP variable?",
        options: ["$variable", "variable$", "var_variable", "@variable"],
        answer: "$variable",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 3,
        question: "What does 'echo' do in PHP?",
        options: [
          "Outputs a string",
          "Starts a loop",
          "Includes a file",
          "Declares a function",
        ],
        answer: "Outputs a string",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 4,
        question: "Which function is used to connect to a MySQL database in PHP?",
        options: ["mysqli_connect()", "mysql_connect()", "connect_db()", "db_connect()"],
        answer: "mysqli_connect()",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 5,
        question: "Which of these is a PHP superglobal variable?",
        options: ["$_POST", "$GLOBALS", "$SUPER", "$_VAR"],
        answer: "$_POST",
        category: "backend",
        experience: "Beginner",
      },
    ],
  },
  {
    name: "Laravel",
    questions: [
      {
        id: 1,
        question: "What is Laravel?",
        options: [
          "A PHP framework",
          "A JavaScript library",
          "A CSS preprocessor",
          "A database management system",
        ],
        answer: "A PHP framework",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 2,
        question: "Which Artisan command is used to create a new controller?",
        options: [
          "php artisan make:controller",
          "php artisan new:controller",
          "php artisan controller:create",
          "php artisan make:ctr",
        ],
        answer: "php artisan make:controller",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 3,
        question: "Which of the following is a Laravel ORM?",
        options: ["Eloquent", "Doctrine", "Hibernate", "ActiveRecord"],
        answer: "Eloquent",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 4,
        question: "What does 'Laravel Mix' do?",
        options: [
          "Compiles assets like CSS and JS",
          "Handles routing",
          "Manages database migrations",
          "Runs unit tests",
        ],
        answer: "Compiles assets like CSS and JS",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 5,
        question: "What is a Blade template in Laravel?",
        options: [
          "A lightweight templating engine",
          "A database migration tool",
          "A routing library",
          "A package manager",
        ],
        answer: "A lightweight templating engine",
        category: "backend",
        experience: "Beginner",
      },
    ],
  },
  {
    name: "MySQL",
    questions: [
      {
        id: 1,
        question: "What is MySQL primarily used for?",
        options: [
          "Database management",
          "Frontend development",
          "Styling web pages",
          "Running server-side scripts",
        ],
        answer: "Database management",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 2,
        question: "Which SQL statement is used to extract data from a database?",
        options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
        answer: "SELECT",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 3,
        question: "Which of these is a MySQL data type?",
        options: ["VARCHAR", "STRING", "TEXT", "BLOB"],
        answer: "VARCHAR",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 4,
        question: "What does the 'JOIN' operation do in MySQL?",
        options: [
          "Combines rows from two or more tables",
          "Deletes records from a table",
          "Adds a new column to a table",
          "Creates a new table",
        ],
        answer: "Combines rows from two or more tables",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 5,
        question: "Which command is used to create a new database in MySQL?",
        options: ["CREATE DATABASE", "NEW DATABASE", "ADD DATABASE", "INIT DATABASE"],
        answer: "CREATE DATABASE",
        category: "backend",
        experience: "Beginner",
      },
    ],
  },
  {
    name: "PostgreSQL",
    questions: [
      {
        id: 1,
        question: "What is PostgreSQL?",
        options: [
          "An open-source relational database",
          "A JavaScript library",
          "A PHP framework",
          "A CSS preprocessor",
        ],
        answer: "An open-source relational database",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 2,
        question: "Which PostgreSQL command is used to insert data into a table?",
        options: ["INSERT INTO", "ADD INTO", "UPDATE", "APPEND TO"],
        answer: "INSERT INTO",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 3,
        question: "What does the 'SERIAL' data type represent in PostgreSQL?",
        options: [
          "An auto-incrementing integer",
          "A fixed-length string",
          "A floating-point number",
          "A Boolean value",
        ],
        answer: "An auto-incrementing integer",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 4,
        question: "Which of the following is a PostgreSQL index type?",
        options: ["B-tree", "Hash", "GIST", "All of the above"],
        answer: "All of the above",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 5,
        question: "Which PostgreSQL command is used to remove a table?",
        options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "CLEAR TABLE"],
        answer: "DROP TABLE",
        category: "backend",
        experience: "Beginner",
      },
    ],
  },
  {
    name: "AWS Server",
    questions: [
      {
        id: 1,
        question: "What is AWS primarily used for?",
        options: [
          "Cloud computing services",
          "Frontend development",
          "Running SQL queries",
          "Creating desktop applications",
        ],
        answer: "Cloud computing services",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 2,
        question: "Which of the following is a popular AWS service?",
        options: ["EC2", "React", "Laravel", "MySQL"],
        answer: "EC2",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 3,
        question: "What does S3 stand for in AWS?",
        options: [
          "Simple Storage Service",
          "Server-Side Scripting",
          "Secure Server Service",
          "Simple Server Solution",
        ],
        answer: "Simple Storage Service",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 4,
        question: "Which AWS service is used for database management?",
        options: ["RDS", "Lambda", "CloudFront", "Elastic Beanstalk"],
        answer: "RDS",
        category: "backend",
        experience: "Beginner",
      },
      {
        id: 5,
        question: "What is AWS Lambda used for?",
        options: [
          "Running code in response to events",
          "Storing files",
          "Managing DNS settings",
          "Hosting a static website",
        ],
        answer: "Running code in response to events",
        category: "backend",
        experience: "Beginner",
      },
    ],
  },
];
const remainingTechnologies = [
  {
    name: "MERN Stack",
    questions: [
      {
        id: 1,
        question: "What does the 'M' in MERN stack stand for?",
        options: ["MongoDB", "MySQL", "MariaDB", "Mongoose"],
        answer: "MongoDB",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 2,
        question: "Which frontend framework is used in the MERN stack?",
        options: ["React", "Angular", "Vue", "Svelte"],
        answer: "React",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 3,
        question: "Which backend framework is part of the MERN stack?",
        options: ["Express", "Django", "Flask", "Spring Boot"],
        answer: "Express",
        category: "Full Stack",
        experience: "Intermediate",
      },
      {
        id: 4,
        question: "Which JavaScript runtime environment is used in the MERN stack?",
        options: ["Node.js", "Python", "Ruby", "PHP"],
        answer: "Node.js",
        category: "Full Stack",
        experience: "Intermediate",
      },
      {
        id: 5,
        question: "What is the main advantage of using the MERN stack?",
        options: [
          "End-to-end JavaScript development",
          "Easy integration with Python",
          "Better performance with SQL databases",
          "Support for multiple languages",
        ],
        answer: "End-to-end JavaScript development",
        category: "Full Stack",
        experience: "Advance",
      },
    ],
  },
  {
    name: "MEAN Stack",
    questions: [
      {
        id: 1,
        question: "What does the 'A' in MEAN stack stand for?",
        options: ["Angular", "Apache", "AWS", "Axios"],
        answer: "Angular",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 2,
        question: "Which NoSQL database is part of the MEAN stack?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        answer: "MongoDB",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 3,
        question: "Which server-side environment is used in the MEAN stack?",
        options: ["Node.js", "Ruby on Rails", "Flask", "ASP.NET"],
        answer: "Node.js",
        category: "Full Stack",
        experience: "Intermediate",
      },
      {
        id: 4,
        question: "What is Express.js in the MEAN stack?",
        options: [
          "A web application framework for Node.js",
          "A frontend library",
          "A database management system",
          "A deployment tool",
        ],
        answer: "A web application framework for Node.js",
        category: "Full Stack",
        experience: "Intermediate",
      },
      {
        id: 5,
        question: "What is the main use of the MEAN stack?",
        options: [
          "Full-stack JavaScript development",
          "Frontend-only development",
          "Data analysis",
          "Game development",
        ],
        answer: "Full-stack JavaScript development",
        category: "Full Stack",
        experience: "Advance",
      },
    ],
  },
  {
    name: "CodeIgniter",
    questions: [
      {
        id: 1,
        question: "What is CodeIgniter?",
        options: [
          "A PHP framework",
          "A JavaScript library",
          "A CSS preprocessor",
          "A database system",
        ],
        answer: "A PHP framework",
        category: "Backend",
        experience: "Intermediate",
      },
      {
        id: 2,
        question: "Which design pattern does CodeIgniter follow?",
        options: ["Model-View-Controller (MVC)", "Singleton", "Factory", "Observer"],
        answer: "Model-View-Controller (MVC)",
        category: "Backend",
        experience: "Intermediate",
      },
      {
        id: 3,
        question: "What is a feature of CodeIgniter?",
        options: [
          "Lightweight and fast",
          "Heavy and slow",
          "Requires complex configuration",
          "Not suitable for web applications",
        ],
        answer: "Lightweight and fast",
        category: "Backend",
        experience: "Intermediate",
      },
      {
        id: 4,
        question: "What does the 'View' component in MVC represent in CodeIgniter?",
        options: [
          "The presentation layer",
          "The database layer",
          "The controller logic",
          "The application configuration",
        ],
        answer: "The presentation layer",
        category: "Backend",
        experience: "Intermediate",
      },
      {
        id: 5,
        question: "How do you load a model in CodeIgniter?",
        options: [
          "$this->load->model('model_name')",
          "$model->load('model_name')",
          "loadModel('model_name')",
          "$this->model->load('model_name')",
        ],
        answer: "$this->load->model('model_name')",
        category: "Backend",
        experience: "Intermediate",
      },
    ],
  },
];
const fullStackQuizData = [
  // LAMP Stack
  {
    name: "LAMP Stack",
    questions: [
      {
        id: 1,
        question: "What does LAMP stand for?",
        options: [
          "Linux, Apache, MySQL, PHP",
          "Linux, Apache, MongoDB, PHP",
          "Linux, Nginx, MySQL, Python",
          "Linux, Apache, MySQL, Python",
        ],
        answer: "Linux, Apache, MySQL, PHP",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 2,
        question: "Which server software is used in the LAMP stack?",
        options: ["Apache", "Nginx", "IIS", "Lighttpd"],
        answer: "Apache",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 3,
        question: "What is the default database used in the LAMP stack?",
        options: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
        answer: "MySQL",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 4,
        question: "Which programming language is used for server-side scripting in the LAMP stack?",
        options: ["PHP", "Python", "Ruby", "Java"],
        answer: "PHP",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 5,
        question: "What is the role of Linux in the LAMP stack?",
        options: [
          "Operating System",
          "Web Server",
          "Database",
          "Programming Language",
        ],
        answer: "Operating System",
        category: "Full Stack",
        experience: "Beginner",
      },
    ],
  },

  // LEMP Stack
  {
    name: "LEMP Stack",
    questions: [
      {
        id: 6,
        question: "What does LEMP stand for?",
        options: [
          "Linux, Nginx, MySQL, PHP",
          "Linux, Nginx, PostgreSQL, Python",
          "Linux, Nginx, MySQL, Python",
          "Linux, Apache, MySQL, PHP",
        ],
        answer: "Linux, Nginx, MySQL, PHP",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 7,
        question: "Which web server is used in the LEMP stack?",
        options: ["Nginx", "Apache", "IIS", "Lighttpd"],
        answer: "Nginx",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 8,
        question: "What is the role of MySQL in the LEMP stack?",
        options: ["Database", "Web Server", "Operating System", "Scripting Language"],
        answer: "Database",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 9,
        question: "Which programming language is used for server-side scripting in the LEMP stack?",
        options: ["PHP", "Python", "Ruby", "Java"],
        answer: "PHP",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 10,
        question: "What is the role of Linux in the LEMP stack?",
        options: [
          "Operating System",
          "Web Server",
          "Database",
          "Scripting Language",
        ],
        answer: "Operating System",
        category: "Full Stack",
        experience: "Beginner",
      },
    ],
  },

  // MEVN Stack
  {
    name: "MEVN Stack",
    questions: [
      {
        id: 11,
        question: "What does the 'V' in MEVN stack stand for?",
        options: ["Vue.js", "Angular", "React", "Svelte"],
        answer: "Vue.js",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 12,
        question: "Which backend framework is used in the MEVN stack?",
        options: ["Express.js", "Django", "Flask", "Spring Boot"],
        answer: "Express.js",
        category: "Full Stack",
        experience: "Beginner",
      },
      {
        id: 13,
        question: "What is the role of MongoDB in the MEVN stack?",
        options: [
          "Database",
          "Backend framework",
          "Frontend library",
          "Build tool",
        ],
        answer: "Database",
        category: "Full Stack",
        experience: "Intermediate",
      },
      {
        id: 14,
        question: "Which server-side runtime environment is used in the MEVN stack?",
        options: ["Node.js", "Django", "Flask", "ASP.NET"],
        answer: "Node.js",
        category: "Full Stack",
        experience: "Intermediate",
      },
      {
        id: 15,
        question: "What is the primary advantage of the MEVN stack?",
        options: [
          "Full-stack JavaScript development",
          "Multiple database options",
          "Cross-platform deployment",
          "Integrated development environment",
        ],
        answer: "Full-stack JavaScript development",
        category: "Full Stack",
        experience: "Advance",
      },
    ],
  },

  // PERN Stack
  {
    name: "PERN Stack",
    questions: [
      {
        id: 16,
        question: "What does the 'P' in PERN stack stand for?",
        options: ["PostgreSQL", "PHP", "Python", "Perl"],
        answer: "PostgreSQL",
        category: "Full Stack",
        experience: "Intermediate",
      },
      {
        id: 17,
        question: "Which frontend framework is used in the PERN stack?",
        options: ["React", "Angular", "Vue", "Svelte"],
        answer: "React",
        category: "Full Stack",
        experience: "Intermediate",
      },
      {
        id: 18,
        question: "What is the role of Express.js in the PERN stack?",
        options: [
          "Backend framework for Node.js",
          "Database management",
          "UI framework",
          "Build tool",
        ],
        answer: "Backend framework for Node.js",
        category: "Full Stack",
        experience: "Intermediate",
      },
      {
        id: 19,
        question: "Which server-side runtime environment is used in the PERN stack?",
        options: ["Node.js", "Django", "Flask", "ASP.NET"],
        answer: "Node.js",
        category: "Full Stack",
        experience: "Intermediate",
      },
      {
        id: 20,
        question: "What is the main advantage of using the PERN stack?",
        options: [
          "Unified JavaScript development with PostgreSQL",
          "Multiple frontend frameworks",
          "Integrated ORM",
          "Support for multiple databases",
        ],
        answer: "Unified JavaScript development with PostgreSQL",
        category: "Full Stack",
        experience: "Intermediate",
      },
    ],
  },
];



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
    ...newQuizData,
    ...remainingTechnologies,
    ...fullStackQuizData
    // Add more technologies and questions as needed
  ],

};
export const getCustomeQuizData= ( selectedTopics:ItemOption[], selectedCategory:ItemOption[], selectedExperience:ItemOption[])=> {
  const filteredQuestions: { id: number; question: string; options: string[]; category: string; experience: string; answer: string; }[] = [];

  selectedTopics.forEach(topic => {
    const topicData = quizData.quesitons.filter(q => q.name === topic.title);
  //  console.log('topic data',topicData)  
    if (topicData) {
      const topicQuestions = topicData?.[0]?.questions.filter(q => 
         {
           if(selectedCategory[0].title.startsWith("Full Stack Developer")){
            return  q.category.toLocaleLowerCase() === "full stack" && q.experience === selectedExperience[0].title
           }
          
          return  q.category.toLocaleLowerCase() === selectedCategory[0].title.split(" ")[0].toLocaleLowerCase() && q.experience === selectedExperience[0].title
         }
      ) || [];
      // console.log('topic questions',topicQuestions)
      filteredQuestions.push(...topicQuestions);
    }
  });

  return filteredQuestions;
}
export default quizData;
