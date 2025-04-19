// Skills Section Logo's
import htmlLogo from "./assets/tech/html.png";
import cssLogo from "./assets/tech/css.png";
import javascriptLogo from "./assets/tech/javascript.png";
import reactjsLogo from "./assets/tech/reactjs.png";
import reduxLogo from "./assets/tech/redux.png";
import tailwindcssLogo from "./assets/tech/tailwindcss.png";
import gsapLogo from "./assets/tech/gsap.png";
import materialuiLogo from "./assets/tech/materialui.png";
import bootstrapLogo from "./assets/tech/bootstrap.png";
import nodejsLogo from "./assets/tech/nodejs.png";
import expressjsLogo from "./assets/tech/express.png";
import sqlLogo from "./assets/tech/sql.png";
import mongodbLogo from "./assets/tech/mongodb.png";
import cLogo from "./assets/tech/c.png";
import cppLogo from "./assets/tech/cpp.png";
import gitLogo from "./assets/tech/git.png";
import githubLogo from "./assets/tech/github.png";
import vscodeLogo from "./assets/tech/vscode.png";
import postmanLogo from "./assets/tech/postman.png";
import mcLogo from "./assets/tech/mc.png";
import figmaLogo from "./assets/tech/figma.png";
import netlifyLogo from "./assets/tech/netlify.png";
import vercelLogo from "./assets/tech/vercel.png";

// Experience Section Logo's
import Freelancer from "./assets/company/Freelancer.webp";

// Education Section Logo's
import bca from "./assets/education/bca.jpg";
import school from "./assets/education/school.jpg";

// Project Section Logo's
import letsplay from "./assets/work/letsplay.png";
import portfolio from "./assets/work/portfolio.png";
import currency from "./assets/work/currency.png";
import food from "./assets/work/food.png";
import yaudio from "./assets/work/yaudio.png";
import sknews from "./assets/work/sknews.png";
import Letsplay_player from "./assets/work/Letsplay_player.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "SQL", logo: sqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Freelancer,
    role: "Frontend Developer",
    company: "Freelancer",
    date: "2024 - Present",
    desc: "Developed dynamic and responsive web applications with a strong focus on frontend technologies like HTML, CSS, JavaScript, and Tailwind CSS. Built modern, user-friendly interfaces and integrated real-time data using APIs. Currently learning the MERN stack (MongoDB, Express.js, React.js, Node.js) to expand into full-stack development and create scalable, high-performance applications.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React JS",
      "Tailwind CSS",
      "Redux",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: bca,
    school: "Govt. post graduate college, Ambala cantt",
    date: "Sept 2021 - june 2024",
    grade: "72%",
    desc: "I completed my Bachelor's degree in Computer Applications (B.C.A) from Govt. P.G. College, Ambala Cantt. During my studies, I explored a wide range of subjects that built a strong foundation in computer science and technology. I gained practical knowledge in areas like Data Structures and Algorithms, Web Development, Database Management Systems, Networking, and Operating Systems. Throughout my BCA journey, I worked on multiple projects that helped me apply theoretical concepts to real-world applications, strengthening both my problem-solving and development skills.",
    degree: "Bachelor’s Degree in Computer Applications (B.C.A) (Computer Science)",
  },
  {
    id: 1,
    img: school,
    school: "Sh. G. R. S. D SEN SEC School, Ambala city",
    date: "Apr 2020 - March 2021",
    grade: "95%",
    desc: "I completed my Class 12 education from Sh. G. R. S. D. Senior Secondary School, Ambala City, under the Haryana Board of School Education (HBSE), with a focus on Physics, Chemistry, and Mathematics (PCM), achieving 95% marks.",
    degree: "HBSE(XII) - PCM",
  },
  {
    id: 2,
    img: school,
    school: "Sh. G. R. S. D SEN SEC School, Ambala city",
    date: "Apr 2018 - March 2019",
    grade: "81%",
    desc: "I completed my Class 10 education from Sh. G. R. S. D. Senior Secondary School, Ambala City, under the Haryana Board of School Education (HBSE), achieving 81% marks.",
    degree: "HBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Portfolio",
    description:
      "A clean, modern portfolio that shows my web development skills and problem-solving. Made with HTML, CSS, and JavaScript, it features real projects, technical knowledge, and creative designs. It’s simple, responsive, and easy to navigate, giving a professional look at my passion for technology and innovation. Explore my work and connect with me!",
    image: portfolio ,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Sahil1036/It-sMe",
    webapp: "https://sahil1036.netlify.app/",
  },
  {
    id: 1,
    title: "Letsplay",
    description:
      "Let'sPlay is a frontend music app project developed using HTML, CSS, JavaScript, and Tailwind CSS. It features a clean and responsive design, allowing users to easily explore, play, and organize their favorite tracks. The project focuses on creating an engaging user experience with smooth navigation, and mobile-friendly layouts.",
    image: letsplay,
    tags: ["HTML", "CSS", "JavaScript", "TailwindCss"],
    github:
      "https://github.com/Sahil1036/letsplay",
    webapp: "https://letsplaymus.netlify.app/",
  },
  {
    id: 2,
    title: "SKnews",
    description:
      "SKNews is a React-based news web application that delivers the latest news updates based on different categories like technology, sports, entertainment, and world news. Built using React JS, API integration, HTML, CSS, JavaScript, and Bootstrap, it offers a clean, responsive design and a smooth browsing experience, making it easy for users to stay informed with trending stories.",
    image: sknews,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript","Bootstrap"],
    github: "https://github.com/Sahil1036/Sknews",
    webapp: "https://sahil1036.github.io/Sknews//",
  },
  {
    id: 3,
    title: "Yaudio",
    description:
      "A simple and user-friendly web app built with HTML, CSS, and JavaScript to download high-quality audio from YouTube videos. Just paste a YouTube link, choose your format, and get your audio instantly. With a clean interface and smooth functionality, YAudio offers a fast and secure experience for music lovers, learners, and creators.",
    image: yaudio,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github:
      "https://github.com/Sahil1036/Yaudio",
    webapp: "https://yaudio.netlify.app/",
  },
  {
    id: 4,
    title: "Currency",
    description:
      "The Currency Converter is a web app that allows users to quickly convert amounts between currencies using real-time exchange rates. Built with HTML, CSS, JavaScript, and API integration, it offers a clean, responsive design for easy use. Perfect for travel, business, or personal finance, it provides fast, accurate conversions with up-to-date currency values.",
    image: currency,
    tags: ["HTML", "CSS", "JavaScript", "TailwindCss","API"],
    github:
      "https://github.com/Sahil1036/Currency",
    webapp: "https://moneycurrency.netlify.app/",
  },
  {
    id: 5,
    title: "Foodmania",
    description:
      "FoodMania is a vibrant, interactive web app showcasing delicious dishes with a food-themed interface. Built with HTML, CSS, and JavaScript, it offers a responsive design, smooth navigation, and dynamic elements. Perfect for food lovers and culinary enthusiasts, FoodMania provides an engaging browsing experience full of inspiring food ideas and appealing visuals.",
    image: food,
    tags: ["HTML", "CSS", "JavaScript", ],
    github:
      "https://github.com/Sahil1036/food",
    webapp: "https://foodmania-gilt.vercel.app/",
  },
  {
    id: 6,
    title: "Music Player",
    description:
      "Let’sPlay Player is a responsive music player built with HTML, CSS, JavaScript, and Tailwind CSS. It allows users to browse, play, and organize tracks with a sleek design. Features include customizable playlists, smooth navigation, track controls, and volume adjustments, offering an enjoyable, high-quality listening experience across all devices.",
    image: Letsplay_player,
    tags: [ "API", "HTML", "CSS", "JavaScript","tailwindCss"],
    github:
      "https://github.com/Sahil1036/letsplay/tree/main/player",
    webapp: "https://letsplaymus.netlify.app/player/player",
  },
];
