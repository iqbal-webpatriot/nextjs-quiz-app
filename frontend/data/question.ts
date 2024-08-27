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
    ],
    // Add more topics and questions as needed
  }
  