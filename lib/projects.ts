export type Project = {
  slug: string;
  title: string;
  tags: string[];
  thumbnail: string;
  thumbnailAlt: string;
  objectives: string[];
  description: string;
  links: {
    github?: string;
    findings?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "tweet-tweet",
    title: "Tweet Tweet",
    tags: ["NLP", "Machine Learning", "Python", "Data Science"],
    thumbnail: "/images/tweet_tweet.png",
    thumbnailAlt: "Tweet Tweet climate sentiment project",
    objectives: [
      "Investigate how climate change sentiment on Twitter shifts over time.",
      "Determine whether natural disasters meaningfully influence weekly climate sentiment.",
    ],
    description:
      "Analyzed over 15 million tweets from 2006–2019 to model how climate change sentiment evolves and whether natural disasters drive that change. Tweets were aggregated weekly across 10 climate-related topics and paired with a natural disaster dataset. Linear Regression, Random Forest, Gradient Boosting, and LSTM models were trained under baseline and disaster-augmented conditions to predict future weekly sentiment. Results showed that prior sentiment, not disaster occurrence, is the dominant predictor; adding disaster features (fatality counts, occurrence flags, disaster counts) produced little improvement across all models.",
    links: {
      github: "https://github.com/jia-q1/tweet_tweet",
      findings:
        "https://docs.google.com/document/d/1Z8zZpYqcIn9r9O8SRm6grWsR89GtkiBxtZdgcxOytaw/edit?usp=sharing",
      demo: "https://docs.google.com/presentation/d/1lGlEj8HVi23M4a3QqpmfRSaN5Y5mLEmANiBft1OCXaA/edit?usp=sharing",
    },
  },
  {
    slug: "capstone",
    title: "Capstone Project",
    tags: ["Data Science", "Python", "Machine Learning"],
    thumbnail: "/images/capstoneimage.png",
    thumbnailAlt: "Spotify Analysis Project",
    objectives: [
      "To apply data science skills to analyze music popularity and audio features.",
      "Understand what makes music popular and identify audio features that define specific genres.",
    ],
    description:
      "This capstone project analyzes a dataset of 52,000 Spotify songs to understand what makes music popular and to examine the audio features defining different genres. It involves exploring feature distributions, identifying relationships between attributes and popularity, comparing song characteristics, and using statistical tests and machine learning models for prediction and classification. The goal is to uncover patterns and trends in the music industry using data science techniques.",
    links: {
      github: "https://github.com/jia-q1/spotify_capstone_project",
      findings:
        "https://docs.google.com/document/d/1REr5AQ7yTvwznjJDpUxR9Ovit1ncVlcdj1XFxsvVGiQ/edit?usp=sharing",
      demo: "https://docs.google.com/presentation/d/1EZRQ-JApFQxh9sgaA101i95pD16y1-gsy06k8ojQYBU/edit?usp=sharing",
    },
  },
  {
    slug: "crs",
    title: "Course Registration System",
    tags: ["Java", "Object Oriented Programming"],
    thumbnail: "/images/CRS.png",
    thumbnailAlt: "Course Registration System project",
    objectives: [
      "Develop a system to manage course information, including details such as course name, ID, instructor, and the list of enrolled students.",
      "Utilize software engineering principles such as encapsulation, inheritance, polymorphism, and abstraction to ensure the system is extensible and maintainable.",
    ],
    description:
      "The Course Registration System (CRS) is a university course management platform designed to streamline administrative and student tasks. It allows administrators to manage course details, view and manage registered students, and generate reports on course status and student enrollments. Admins can add, delete, and edit course information, as well as assign or remove students from courses. Students can browse available courses, register for or withdraw from them, and view their current course registrations. The system uses ArrayList objects to store course and student data, which is serialized to binary files for persistence. It follows an object-oriented design with a User class as the parent for Admin and Student classes, encapsulating common attributes, while the Course class represents individual courses. The system includes a login feature for role-based access and error handling to ensure reliable operation. Developed in Java, the system adheres to industry standards for object-oriented programming and utilizes UML diagrams for scalability, reusability, and robustness.",
    links: {
      github: "https://github.com/jia-q1/course-registration-system",
    },
  },
  {
    slug: "data-clean-room",
    title: "Data Clean Room VM",
    tags: ["Virtual Machine", "Data Science", "Python", "Machine Learning"],
    thumbnail: "/images/dcr.png",
    thumbnailAlt: "Data Clean Room VM project",
    objectives: [
      "To facilitate secure sharing of data between two parties.",
      "To extract key data through data analysis and machine learning models.",
    ],
    description:
      'Developed a Data Clean Room Virtual Machine that offers a secure environment for analyzing advertiser data, allowing sensitive data to be processed for statistical analysis and generating insightful results. This setup ensures encrypted data is transferred securely through a "handshake" involving a service provider, a "key master," and user provider servers. This project earned third place at the GES X UCLA Trustworthy Lab Hackathon.',
    links: {
      github: "https://github.com/jia-q1/TrustworthyLab_GES_Hackathon",
      findings:
        "https://docs.google.com/presentation/d/1w_egcLTpV4xsWPrweq3rg8LH0nVrfPZ-32UfI5d9zoA/edit#slide=id.p",
    },
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    tags: ["HTML", "CSS", "JavaScript", "Design"],
    thumbnail: "/images/mywebsite.png",
    thumbnailAlt: "Personal Website project",
    objectives: [
      "To design and build a portfolio website to display personal projects.",
      "To demonstrate my technical skills but also design a website that reflects me!",
    ],
    description:
      'This website demonstrates two main features: The "My Work" homepage showcases project cards that present my projects with great attention to detail, providing visitors with both a brief preview and access to the project code for a deeper dive. The "About Me" section offers a short description of my technical skills and goals, along with contact links and a picture of me.',
    links: {
      github: "https://github.com/jia-q1/personal_website",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
