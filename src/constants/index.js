import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  chromecast,
  disc02,
  html,
  css,
  file02,
  javascript,
  homeSmile,
  notification2,
  notification3,
  notification4,
  react,
  nodejs,
  plusSquare,
  jquery,
  tailwind,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  mongodb,
  sliders04,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "ABOUT",
    url: "#about",
  },
  {
    id: "1",
    title: "SKILLS",
    url: "#skills",
  },
  {
    id: "2",
    title: "PROJECTS",
    url: "#projects",
  },
  {
    id: "3",
    title: "CONTACT",
    url: "#contact",
  },
  {
    id: "4",
    title: "Mail",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=sijinsaji14@gmail.com&su=&body=Hello%20[Your%20Name],%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20[reason%20for%20contact].%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [html, css, javascript, react, nodejs];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "A successful project requires the right tools and technologies. Below are the key skills and technologies I utilize to create seamless, interactive, and aesthetically pleasing web experiences.";

export const collabContent = [
  {
    id: "0",
    title: "Responsive Design",
    text: "Ensuring seamless experiences across all devices with adaptive and flexible layouts."
  },
  {
    id: "1",
    title: "Modern Web Design",
    text: "Creating contemporary, user-friendly designs that are both visually appealing and highly functional."
  },
  {
    id: "2",
    title: "Interactive Interfaces",
    text: "Building engaging and dynamic interfaces that enhance user interaction and experience."
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Html",
    icon: html,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Css",
    icon: css,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "JavaScript",
    icon: javascript,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "React",
    icon: react,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "NodeJs",
    icon: nodejs,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Tailwind",
    icon: tailwind,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Jquery",
    icon: jquery,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Mongodb",
    icon: mongodb,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "To-Do List",
    text: "A responsive To-Do List application using HTML, CSS, and JavaScript. The app stores tasks in local storage, ensuring data persistence across sessions.",
    backgroundUrl: "./benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    webUrl: "https://multiprocessingexceptional.github.io/Todo-Manager/",
  },
  {
    id: "1",
    title: "Project 2",
    text: "This project is currently under development. We’re working hard to bring new features and improvements. Stay tuned for updates!",
    backgroundUrl: "./benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    webUrl: "",
    light: true,
  },
  {
    id: "2",
    title: "Project 3",
    text: "This project is currently under development. We’re working hard to bring new features and improvements. Stay tuned for updates!",
    backgroundUrl: "./benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    webUrl: "",
  },
];
