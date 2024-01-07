import {
  mobile,
  backend,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  threejs,
} from "../assets";

export const navLinks = [
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
    title: "AWS",
    icon: web,
  }
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
    name: "React JS",
    icon: reactjs,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Gameskraft Technologies PVT LTD",
    icon: null,
    iconBg: "#383E56",
    date: "November 2022 - present",
    points: [
      "Led migration of Android to iOS, contributing to 70% of the codebase transition.",
      "Collaborated on the development of features with a focus on projected overall revenue growth.",
      "Proficiently utilized monitoring tools such as Grafana and Kibana to ensure system performance and reliability.",
      "Demonstrated exceptional problem-solving skills by resolving 80% of issues and bugs during on-call duty responsibilities."
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Medly Software Systems",
    icon: null,
    iconBg: "#E6DEDD",
    date: "July 2021 - November 2022",
    points: [
      "Developed and worked on multiple products with various teams.",
      "Completed unit testing with 98-100% code coverage.",
      "Contributed to the Open-Source project at Medly.",
      "Developed storybooks for code and component reusability.",
      "Worked on a template generator by using Projen to create a react app.",
      "Developed REST APIs by following TDD.",
      "Developed various responsive products using agile methodologies.",
      "Managed better code quality for optimized code.",
      "Worked on an e-commerce product, and added analytics and \n accessibility with a score of more than 75%."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Cofiato Private Limited",
    icon: null,
    iconBg: "#383E56",
    date: "December 2020 - July 2021",
    points: [
      "Developed multiple products in ios, Android, Web",
      "Build products using ReactJs, React Native, TypeScript",
      "NodeJs, Firebase, React-Query, REST APIs, Styled Component",
      "Implemented Authentication and Authorization.",
      "Worked as a Team lead and maintained good quality codebase"
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Bitsmith Technologies Private Limited",
    icon: null,
    iconBg: "#E6DEDD",
    date: "September 2020 - December 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I have worked with Manish in several projects and I must say that he is an excellent developer with the mindset to always keep himself updated with latest tech in the market. I would highly recommend him as a great developer.",
    name: "Mukul Bansal",
    designation: "Senior Frontend Engineer",
    company: "",
    image: null,
  },
  {
    testimonial:
      "Having worked with Manish for five months, I must say he is an excellent professional. I am impressed by his work ethic and bug management skills. Plus, he easily adjusts to any given situation or business dynamics. But what makes him stand out is his willingness to help others. I am glad to have worked with him and have no hesitation in recommending him to potential employers.",
    name: "Shreyas Khakal",
    designation: "Software Engineer",
    company: "",
    image: null,
  }
];

const projects = [
  {
    name: "Movie Adda",
    description:
      "Web-based platform that allows users to search movies",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Manish-Ranjan/MovieAdda",
    deployed_link: "https://movie-adda.vercel.app/"
  }
];

export { services, technologies, experiences, testimonials, projects };