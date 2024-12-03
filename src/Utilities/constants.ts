import Bre_Logo from "../Assets/BuyRentExchangeIcon.svg";
import Resume_Logo from "../Assets/RB.svg";
import ChatBot_Logo from "../Assets/BotAvatar.jpg";

export const END_POINT = "REPLACE YOUR END POINT";

export const API_URL_CONSTANT = {
  SIGN_IN: `${END_POINT}token`,
  SIGN_UP: `${END_POINT}normal_user`,
  GOOGLE_AUTH: `${END_POINT}social-login`,
  CONTACT_US: `${END_POINT}contact/contactus`
};

export const ROUTER_URL_CONSTANT = {
  MAIN: "/",
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
  CONTACT_US: "/countact_us/",
};

export const Projects_Json = {
  projects: [
    {
      name: "Buy Rent Exchange",
      url: "https://bre.maangtechnologies.com/",
      image: Bre_Logo,
      description:
        "The Buy Rent Exchange is a platform where users can buy, rent, exchange products, and join rides. It features user authentication, a cart for managing selected items, and detailed product posting. This versatile marketplace meets diverse user needs with options to trade items and share rides.",
    },
    {
      name: "Resume Builder",
      url: "https://resume-builder.maangtechnologies.com/",
      image: Resume_Logo,
      description:
        "The Resume Builder is designed to provide the best user experience for creating professional resumes. It allows users to easily add, edit, and delete sections like skills, education, and experience, with an intuitive interface that ensures a smooth and customizable experience for crafting personalized resumes.",
    },
    {
      name: "Chatbot",
      url: "https://chatbot.maangtechnologies.com/",
      image: ChatBot_Logo,
      description:
        "Chatbot Web is an interactive platform designed to enhance user engagement through automated conversations. It provides an intuitive interface where users can seamlessly interact with the chatbot and access relevant information, supporting dynamic features like auto-scrolling and API integration.",
    },
  ],
};

export const Services_Json = {
  services: [
    {
      name: "Mobile Applications",
      iconClass: "bx bx-mobile bx1",
      description:
        "We have immense experience in building complete mobile development on multiple operating systems.",
    },
    {
      name: "Application Services",
      iconClass: "bx bxs-badge-check bx2",
      description:
        "Application services including application development, legacy application maintenance, and management of packaged applications that help lower your application costs and better focus on innovation.",
    },
    {
      name: "Web Development",
      iconClass: "bx bx-laptop bx3",
      description:
        "We have immense experience in building complete web development on multiple operating systems.",
    },
  ],
};
