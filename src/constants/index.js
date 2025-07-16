import {
  mobile,
  backend,
  creator,
  web,
  python,
  django,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vite,
  mysql,
  git,
  postman,
  github,
  linkedin,
  instagram,
  //redux,
  //tailwind,
  //nodejs,
  //mongodb,
  //figma,
  //docker,
  meta,
  starbucks,
  tesla,
  shopify,
  adoptme,
  recipeblog,
  speaknow,
  movieflix,
  wordle,
  musician,
  //threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "Tech Enthusiast",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
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
    name: "Vite",
    icon: vite,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "postman",
    icon: postman,
  },
  /*{
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
  },*/
  /*{
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },*/
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Speak Now",
    description:
      "A web-based public speaking tool designed to help users improve their public speaking skills by providing detailed feedback on their facial expressions and voice tone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: speaknow,
    website_link: "https://speak-now-ai.vercel.app/",
    source_code_link: "https://github.com/saradotdev/Speak-Now",
  },
  {
    name: "Recipe Blog",
    description:
      "A full-stack recipe blog web application that allows users to browse categories, view detailed recipes, and manage blog posts efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: recipeblog,
    website_link: "https://recipe-blog-react.vercel.app/",
    source_code_link: "https://github.com/saradotdev/Recipe-Blog",
  },
  {
    name: "Adopt Me",
    description:
      "Web-based pet adoption platform that allows users to browse and adopt pets, with features for searching, filtering, and viewing pet profiles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: adoptme,
    website_link: "https://browse-and-adopt-me.vercel.app/",
    source_code_link: "https://github.com/saradotdev/Adopt-Me",
  },
  {
    name: "MovieFlix",
    description:
      "A web application designed to help manage movies and user information. It provides functionality for browsing, searching, and managing movies.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: movieflix,
    website_link: "http://movieflix.infinityfreeapp.com/home.php",
    source_code_link: "https://github.com/saradotdev/MovieFlix",
  },
  {
    name: "Wordle",
    description:
      "A web-based word-guessing game that challenges players to guess a hidden five-letter word in six tries, with instant feedback on each attempt.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: wordle,
    website_link: "https://saradotdev.github.io/Wordle-Game/",
    source_code_link: "https://github.com/saradotdev/Wordle-Game",
  },
  {
    name: "Musician Website",
    description:
      "A static website serving as a platform for fans to browse and add Ali Zafar's albums and merchandise to their carts, and view brief but essential information about his tours.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: musician,
    website_link: "https://saradotdev.github.io/Musician-Website/",
    source_code_link: "https://github.com/saradotdev/Musician-Website",
  },
];

export const footerLinks = [
  {
    name: "github",
    image: github,
    link: "https://github.com/saradotdev/",
  },
  {
    name: "linkedin",
    image: linkedin,
    link: "https://www.linkedin.com/in/saradotdev/",
  },
  {
    name: "instagram",
    image: instagram,
    link: "https://www.instagram.com/_saraaa_aziz/",
  },
];

export { services, technologies, experiences, testimonials, projects };
