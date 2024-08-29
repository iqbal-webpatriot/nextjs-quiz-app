export type Question = {
    id: number;
    question: string;
    options: string[];
    answer: string;
  };
  
  export type Topic = {
    name: string;
    description: string;
    slug: string;
  };
  
  export type QuestionsData = Record<string, Question[]>;
// data/questions.ts
export const SAMPLE_TOPICS: Topic[] = [
    {
      name: 'Technology',
      description: 'Test your knowledge on the latest technology trends.',
      slug: 'technology',
    },
    {
      name: 'Science',
      description: 'Explore various scientific topics and questions.',
      slug: 'science',
    },
    {
      name: 'History',
      description: 'Test your knowledge of historical events and figures.',
      slug: 'history',
    },
    // Add more topics as needed
  ];
  
  export const QUESTIONS_DATA: QuestionsData = {
    technology: [
      {
        id: 1,
        question: "What does AI stand for?",
        options: ["Artificial Intelligence", "Automated Integration", "Advanced Information", "Applied Internet"],
        answer: "Artificial Intelligence",
      },
      {
        id: 2,
        question: "Which company developed the first personal computer?",
        options: ["Apple", "IBM", "Microsoft", "Dell"],
        answer: "IBM",
      },
      {
        id: 3,
        question: "What does HTTP stand for in web technology?",
        options: ["HyperText Transfer Protocol", "Hyperlink Text Protocol", "Hyper Text Processing", "High Transfer Protocol"],
        answer: "HyperText Transfer Protocol",
      },
      {
        id: 4,
        question: "Which programming language is known as the 'language of the web'?",
        options: ["JavaScript", "Python", "Java", "C++"],
        answer: "JavaScript",
      },
      {
        id: 5,
        question: "What is the primary purpose of a firewall in network security?",
        options: ["To monitor incoming and outgoing traffic", "To prevent viruses", "To encrypt data", "To backup files"],
        answer: "To monitor incoming and outgoing traffic",
      },
      {
        id: 6,
        question: "Which of the following is a popular version control system?",
        options: ["Git", "JIRA", "Docker", "AWS"],
        answer: "Git",
      },
      {
        id: 7,
        question: "What is the main function of an operating system?",
        options: ["To manage hardware and software resources", "To provide internet access", "To store user data", "To run web browsers"],
        answer: "To manage hardware and software resources",
      },
      {
        id: 8,
        question: "Which of the following is a cloud computing platform?",
        options: ["AWS", "Python", "Linux", "Windows"],
        answer: "AWS",
      },
      {
        id: 9,
        question: "What is the purpose of DNS in networking?",
        options: ["To translate domain names to IP addresses", "To secure network traffic", "To compress data", "To manage cookies"],
        answer: "To translate domain names to IP addresses",
      },
      {
        id: 10,
        question: "Which technology is used to create decentralized applications?",
        options: ["Blockchain", "IoT", "Machine Learning", "Big Data"],
        answer: "Blockchain",
      },
    ],
    science: [
      {
        id: 1,
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O",
      },
      {
        id: 2,
        question: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        answer: "Albert Einstein",
      },
      {
        id: 3,
        question: "What planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        id: 4,
        question: "What is the speed of light in a vacuum?",
        options: ["299,792 km/s", "150,000 km/s", "500,000 km/s", "750,000 km/s"],
        answer: "299,792 km/s",
      },
      {
        id: 5,
        question: "Which element has the highest atomic number?",
        options: ["Uranium", "Oganesson", "Plutonium", "Lead"],
        answer: "Oganesson",
      },
      {
        id: 6,
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria",
      },
      {
        id: 7,
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
        answer: "Nitrogen",
      },
      {
        id: 8,
        question: "What is the main component of the sun?",
        options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        answer: "Hydrogen",
      },
      {
        id: 9,
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Earth", "Neptune"],
        answer: "Jupiter",
      },
      {
        id: 10,
        question: "What is the pH of pure water?",
        options: ["7", "1", "14", "5"],
        answer: "7",
      },
    ],
    history: [
      {
        id: 1,
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington",
      },
      {
        id: 2,
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1923", "1898"],
        answer: "1912",
      },
      {
        id: 3,
        question: "Which ancient civilization built the pyramids?",
        options: ["Egyptians", "Romans", "Greeks", "Persians"],
        answer: "Egyptians",
      },
      {
        id: 4,
        question: "Who was the leader of the Soviet Union during World War II?",
        options: ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Mikhail Gorbachev"],
        answer: "Joseph Stalin",
      },
      {
        id: 5,
        question: "Which war was fought between the North and South regions in the United States?",
        options: ["Civil War", "Revolutionary War", "World War I", "Vietnam War"],
        answer: "Civil War",
      },
      {
        id: 6,
        question: "In which year did the Berlin Wall fall?",
        options: ["1989", "1945", "1961", "1975"],
        answer: "1989",
      },
      {
        id: 7,
        question: "Who was the first Emperor of China?",
        options: ["Qin Shi Huang", "Genghis Khan", "Kublai Khan", "Emperor Taizong"],
        answer: "Qin Shi Huang",
      },
      {
        id: 8,
        question: "Which country was the first to land a human on the moon?",
        options: ["USA", "Russia", "China", "Japan"],
        answer: "USA",
      },
      {
        id: 9,
        question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
        options: ["Mayflower", "Santa Maria", "Endeavour", "Beagle"],
        answer: "Mayflower",
      },
      {
        id: 10,
        question: "Who was the British Prime Minister during World War II?",
        options: ["Winston Churchill", "Neville Chamberlain", "Margaret Thatcher", "Tony Blair"],
        answer: "Winston Churchill",
      },
    ],
    // Add more topics as needed
  };
  
  export const Roles=[
    {
      id: 1,
      title: "Frontend Developer",
      description: "Start the quiz to test your UI/UX skills!"
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "Begin the quiz to challenge your server-side expertise!"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      description: "Take the quiz to showcase your all-round development skills!"
    }
  ]
 export  const technologies = [
    {
      id: 1,
      title: "React JS",
      description: "Dive into React JS and prove your frontend expertise!",
      category:'Frontend'
    },
    {
      id: 2,
      title: "HTML",
      description: "Test your knowledge of HTML, the backbone of web development!",
       category:'Frontend'
    },
    {
      id: 3,
      title: "CSS",
      description: "Show off your CSS skills and styling mastery!",
       category:'Frontend'
    },
    {
      id: 4,
      title: "JavaScript",
      description: "Assess your JavaScript abilities with challenging questions!",
       category:'Frontend'
    },
    {
      id: 5,
      title: "Node JS",
      description: "Demonstrate your backend skills with Node JS quiz!",
       category:'Backend'
    },
    {
      id: 6,
      title: "MERN Stack",
      description: "Test your full-stack development skills with the MERN stack!",
       category:'Full Stack Development'
    },
    {
      id: 7,
      title: "MEAN Stack",
      description: "Evaluate your full-stack development knowledge in the MEAN stack!",
      category:'Full Stack Development'
    },
    {
      id: 8,
      title: "PHP",
      description: "Check your backend expertise with PHP quiz!",
      category:'Backend'
    },
    {
      id: 9,
      title: "Laravel",
      description: "Prove your proficiency in Laravel with these questions!",
      category:'Backend'
    },
    {
      id: 10,
      title: "CodeIgniter",
      description: "Test your skills in CodeIgniter framework!",
      category:'Backend'
    },
    {
      id: 11,
      title: "AWS Server",
      description: "Assess your cloud computing knowledge with AWS server quiz!",
      category:'Backend'
    },
    {
      id: 12,
      title: "MySQL",
      description: "Test your database management skills with MySQL!",
      category:'Backend'
    },
    {
      id: 13,
      title: "PostgreSQL",
      description: "Evaluate your proficiency in PostgreSQL database management!",
      category:'Backend'
    },
  ];
  
  export const experienceLevels = [
    {
      id: 1,
      title: "Beginner",
      description: "Start the quiz to test your foundational knowledge!",
    },
    {
      id: 2,
      title: "Intermediate",
      description: "Challenge yourself with intermediate-level questions!",
    },
    {
      id: 3,
      title: "Advanced",
      description: "Prove your expertise with advanced quiz questions!",
    },
  ];
 export const getFilteredTechnologies= (categoryName:string)=>{
  console.log('category name',categoryName)
     return technologies.filter((option)=>option.category===categoryName)
 }  