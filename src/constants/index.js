import {
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  figma,
  threejs,
  unity,
  blender,
  education,
  docker,
  liveDemo,
  fanclash,
  suitcase,
  webProject,
  scr_1,
  scr_2,
  scr_3,
  bullet,
  bullet2,
  rk1,
  rk2,
  rk3,
  f1_1,
  f1_2,
  boat_1,
  boat_2,
  boat_3,
  github,
  itch,
  linkedin,
  artstation,
  behance,
  instagram,
  gmail,
  cloud,
  tipcalc,
  contact,
  ecom,
  loginscreen
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "UI Developer",
    icon: reactjs,
  },
  {
    title: "Web Services",
    icon: cloud,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "blender",
    icon: blender,
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
    name: "React JS",
    icon: reactjs,
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
];

const experiences = [
  {
    title: "Front End Intern",
    company_name: "iGold Tech Systems Inc. Virudhunagar, Tamil Nadu",
    icon: suitcase,
    iconBg: "#383E56",
    date: "Aug 2021 - Oct 2021 (3 months)",
    points: [
      "During Internship, Project Team work on Modern Tech stack like Angular, REST API and Spring.",
      "My work on this internship is, Develop client side layout and get the data from the user using Angular.",
      "We used Material UI for UI and Responsive Design. TypeScript used for Business Logic."
    ],
  },
  {
    title: "Web Design Intern",
    company_name: "ITCS Technologies, Chennai, Tamilnadu",
    icon: suitcase,
    iconBg: "#383E56",
    date: "Aug 2020 - Oct 2020 (3 months)",
    points: [
      " Developed and maintained web applications, including developing new features on existing platforms (JavaScript, TypeScript, AJAX, etc).",
      "Participated in the design of application architecture for large-scale data processing systems, with a focus on high availability and reliability."
    ],
  },
  
];
// const educations = [
//   {
//     title: "MCA Cloud Computing and DevOpps",
//     company_name: "Chandigarh University",
//     icon: education,
//     iconBg: "#383E56",
//     date: "2022 - Present",
//     points: [
//       "Cloud Infrastructure Management: Explored cloud computing platforms like AWS, Azure, and Google Cloud, focusing on provisioning, scaling, and securing cloud resources.",
//       "DevOps Tools and Practices: Studied continuous integration/continuous deployment (CI/CD) pipelines, containerization with Docker, and automation using tools like Jenkins.",
//       "Cloud Security and Compliance: Learned about security best practices, identity and access management, and compliance standards in cloud environments.",
//       // "Advanced Cloud Services: Explored advanced cloud services such as serverless computing, container orchestration with Kubernetes, and big data analytics on cloud platforms.",
//     ],
//   },
//   {
//     title: "BCA",
//     company_name: "K.L.P College, Indra Ghandi University, Rewari, HR",
//     icon: education,
//     iconBg: "#383E56",
//     date: "2018 - 2021",
//     points: [
//       "Data Structures and Algorithms: Studied advanced data structures and algorithms to solve complex computational problems.",
//       "Database Management Systems: Explored relational database concepts, SQL, and database design principles.",
//       "Web Development: Developed proficiency in HTML, CSS, JavaScript, and web application development",
//       "Learned software development methodologies, requirements analysis, and project management in software development.",
//     ],
//   },
  
// ];

const artItems = [
  {
    name: "boat_3",
    image : boat_3,
  },
  {
    name: "loginscreen",
    image: loginscreen,
  }
  
  
];

const projects = [
  {
    name: "Tips Calculator",
    description:
      "The Tips Calculator project aims to create a user-friendly tool for calculating tips based on a specified percentage of the total bill. Key features include input fields for bill amount and tip percentage, calculation of the tip and total amount, an option to split the bill, and a customizable interface. The implementation involves using HTML, CSS, and JavaScript for the frontend, with the option for a backend. Additional considerations include testing, accessibility, security measures, deployment, and comprehensive documentation for users and developers.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Responsive",
        color: "fff"
      },
      {
        name: "Bootstrap",
        color: "orange-text-gradient",
      }
    ],
    image: tipcalc,
    source_code_link: "https://github.com/khushalGrover/MazeEscape.git",
    live_demo_link: "https://calctips.netlify.app/",

  },
  
  {
    name: "Contact Saver App",
    description:
      "The React Contact App project aims to create an efficient contact management system using React. It includes features such as adding, viewing, editing, and deleting contacts, along with search, filtering, and sorting functionalities. The implementation stack involves using React, state management libraries (like Redux), styling with CSS or Styled Components, and optionally integrating a backend for user authentication or data storage. The project emphasizes responsive design, feedback mechanisms, testing, deployment, and documentation. ",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "SaSS",
        color: "pink-text-gradient",
      },
      {
        name: "2021",
        color: "fff"
      }, 
      {
        name: "Session",
        color: "orange-text-gradient",
      }
    ],
    image: contact,
    source_code_link: "https://github.com/RajeshThangapandi/React-Contact-App",
    live_demo_link: "https://rajeshcontactapp.netlify.app/",
  },
  
  {
    name: "ECOMM APP",
    description:
      "ITS ECOMMERCE APPLICATION DEVELOPED BY ME",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "2022",
        color: "fff"
      },
      {
        name: "Personal Project",
        color: "orange-text-gradient",
      }
    ],
    image: ecom,
    source_code_link: "https://github.com/khushalGrover/Web_Base_Minor_Projects.github.io",
    live_demo_link: "https://khushalgrover.github.io/Web_Base_Minor_Projects.github.io/",
  },
];

const contacts = [
  {
    name: "GitHub",
    icon: github,
    url: "https://github.com/RajeshThangapandi"
  },

  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/rajeshtdvlpr/"
  },

  // {
  //   name: "Email",
  //   icon: gmail,
  //   url: "mailto:khushal15grover@gmail.com"
  // },

  {
    name: "Instagram",
    icon: instagram,
    url: "https://www.instagram.com/rajesh_thangapandi/"
  },
  // {
  //   name: "ArtStation",
  //   icon: artstation,
  //   url: "https://www.artstation.com/khushalGrover"
  // },
  // {
  //   name: "Behance",
  //   icon: behance,
  //   url: "https://www.behance.net/khushalGrover"
  // },

  // {
  //   name: "Itch.io",
  //   icon: itch,
  //   url: "https://khushalgrover.itch.io/"
  // },

  

]
export { services, technologies, contacts, experiences, artItems, projects };
