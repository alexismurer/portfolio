import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  symfony,
  ottspott,
  logo42,
  carrent,
  jobit,
  tripguide,
  threejs,
  pfp,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "New Tech Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "symfony",
    icon: symfony,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "42",
    icon: logo42,
    iconBg: "#E6DEDD",
    date: "October 2015 - May 2019",
    points: [
      "Student at 42",
      "Studying C/C++/Python/JS",
      "Participation in hackatons, gamejams and numerous other events",
    ],
  },
  {
    title: "Intern",
    company_name: "Ottspott",
    icon: ottspott,
    iconBg: "#383E56",
    date: "March 2018 - August 2018",
    points: [
      "Developing a chat bot to trace back and log all the client's activity via Slack",
      "Refactoring the Zendesk CRM integration: numerous READ/WRITE operations via Zendesk API",
      "Participating in code reviews and providing help to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ottspott",
    icon: ottspott,
    iconBg: "#E6DEDD",
    date: "September 2018 - July 2019",
    points: [
      "Developing and maintaining the main web application using Meteor.js and other related technologies.",
      "Integrating oAuth-based inscription for Google teams, implementing responsive design",
      "Adding various CRMs: Zoho, Hubspot, Salesforce and Pipedrive",
      "Refactoring Chrome extension into PWA",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Ottspott",
    icon: ottspott,
    iconBg: "#383E56",
    date: "July 2019 - September 2021",
    points: [
      "Building a new application using React.js, Redux and Electron from scratch",
      "Migrating the entire back-office application from Meteor.JS to Symfony/Twig, adding Microsoft Teams authentication",
      "Refactoring existing CRM integrations and adding new ones",
      "Implementing responsive design, ensuring cross-browser compatibility, working with Chart.JS",
      "Providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Alexis is a developer with a versatile skill set, not just for coding but for any challenge that pops up. A true problem-solver with a lot of energy and hidden talents.",
    name: "Luis Quina",
    designation: "CEO",
    company: "Ottspott",
    image:
      "https://pbs.twimg.com/profile_images/1480664735012040708/OggJifs4_400x400.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    live_link: "https://vercel.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    live_link: "https://vercel.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    live_link: "https://vercel.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
  pfp,
};
