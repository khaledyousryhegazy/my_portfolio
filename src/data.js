// Sidebar data
import {
  faBriefcase,
  faEnvelope,
  faGear,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarData = [
  {
    id: "1s",
    title: "home",
    icon: faHouse,
    path: "/",
  },
  {
    id: "2s",
    title: "about",
    icon: faUser,
    path: "about",
  },
  {
    id: "3s",
    title: "services",
    icon: faGear,
    path: "services",
  },
  {
    id: "4s",
    title: "portfolio",
    icon: faBriefcase,
    path: "portfolio",
  },
  {
    id: "5s",
    title: "contact",
    icon: faEnvelope,
    path: "contact",
  },
];

// ======================================================= //
// Skills
export const programmingSkills = [
  {
    id: "1p",
    title: "Html , Css",
    rate: "97%",
  },
  {
    id: "2p",
    title: "JavaScript",
    rate: "88%",
  },
  {
    id: "3p",
    title: "ReactJs",
    rate: "90%",
  },
  {
    id: "4p",
    title: "Tailwind , Bootstrap",
    rate: "98%",
  },
];

export const langSkills = [
  {
    id: "1l",
    title: "English",
    rate: "75%",
  },
  {
    id: "2l",
    title: "Arabic",
    rate: "99%",
  },
];

// ======================================================= //
// Knowledge and Interests
export const knowledge = [
  {
    id: "1k",
    title: "html , css",
  },
  {
    id: "2k",
    title: "javaScript",
  },
  {
    id: "10k",
    title: "TypeScript",
  },
  {
    id: "8k",
    title: "react",
  },
  {
    id: "3k",
    title: "bootstrap , react-bootstrap",
  },
  {
    id: "4k",
    title: "tailwindCss",
  },
  {
    id: "5k",
    title: "redux , redux toolkit , react router ",
  },
  {
    id: "9k",
    title: "Figma",
  },
  {
    id: "6k",
    title: "vite",
  },
  {
    id: "7k",
    title: "git , github",
  },
];

export const interests = [
  {
    id: "1i",
    title: "Make UI/UX Design",
  },
  {
    id: "2i",
    title: "Create Mobile App",
  },
  {
    id: "8i",
    title: "back end",
  },
  {
    id: "3i",
    title: "Site Optimization",
  },
  {
    id: "4i",
    title: "Custom Website",
  },
  {
    id: "5i",
    title: "learn new things",
  },
  {
    id: "6i",
    title: " Always open to learning",
  },
];

// ======================================================= //
// Portfolio
import jsCommerce from "./assets/ecommercejs.png";
import grilli from "./assets/grilli.png";
import space from "./assets/space.png";
import reactCommerce from "./assets/reactCommerce.png";
import templateThree from "./assets/templateThree.png";
import templateFour from "./assets/templateFour.png";
import movieApp from "./assets/movieApp.png";
import dashboard from "./assets/dashboard.png";
import rolex from "./assets/rolex.png";

export const portfolioData = [
  {
    id: 0,
    name: "Exp E-commerce website",
    img: jsCommerce,
    link: "https://khaledyousryhegazy.github.io/e-commerce-app/",
    title: "this was a first challenge for me",
    description:
      "This site was a real challenge for me. This was my first time trying to build an e-commerce website using JavaScript. I faced many difficulties, but I succeeded and finished my idea.",
    technology: ["Html,css", "JavaScript", "GitHub"],
    date: "May 3 , 2023",
    source: "https://github.com/khaledyousryhegazy/e-commerce-app",
  },
  {
    id: 1,
    name: "Grilli restaurant website",
    img: grilli,
    link: "https://grilli-psi.vercel.app/",
    title: "restaurant website",
    description:
      "It was a really enjoyable application. I've learned many things from it and implemented a variety of features. The application is responsive across all screen sizes.",
    technology: ["Html,css", "JavaScript", "GitHub"],
    date: "Mars 10 , 2023",
    source: "https://github.com/khaledyousryhegazy/grilli",
  },
  {
    id: 2,
    name: "space explore website",
    img: space,
    link: "https://khaledyousryhegazy.github.io/space/",
    title:
      "this website contain some information about space , it was a frontend mentor challenge",
    description:
      "It was a rewarding challenge, and I generated numerous ideas from it. Yes, it was somewhat difficult, especially since I was a novice at that time and it involved JavaScript. However, I conducted extensive research and tackled many of the problems that arose. Eventually, I managed to overcome the challenges and gained a lot of knowledge. I made it user-friendly, adaptable for future development, and responsive.",
    technology: ["Html,css", "JavaScript", "Swiper.js", "GitHub"],
    date: "April 4 , 2023",
    source: "https://github.com/khaledyousryhegazy/space",
  },
  {
    id: 3,
    name: "react e commerce website",
    img: reactCommerce,
    link: "https://brand-ecommerce.netlify.app/",
    title:
      "this website was a true challenge , because it was first time to me with reactjs",
    description:
      "Product Catalog: Users can explore a wide range of products through an intuitive and responsive user interface. The catalog provides detailed product information, including images, descriptions, and prices. Shopping Cart: Users can add products to their shopping cart, update quantities, and remove items as needed. The cart dynamically calculates the total price, allowing users to review their selections before proceeding to checkout.Checkout and Payment: The app seamlessly integrates Stripe for secure payment processing. Users can enter their billing and shipping information and complete their purchases with confidence, knowing their transactions are protected.Wish List: Users can create a wish list to save their favorite products for future reference. This feature allows users to easily track and revisit products they are interested in without having to search through the entire catalog.",
    technology: [
      "Reactjs",
      "Redux Toolkit",
      "Swiper.js",
      "Tailwind",
      "Axios",
      "React Router",
      "GitHub",
    ],
    date: "June 16 , 2023",
    source: "https://github.com/khaledyousryhegazy/react-e-commerce",
  },
  {
    id: 4,
    name: "template three website",
    img: templateThree,
    link: "https://khaledyousryhegazy.github.io/template-3/",
    title: "Website",
    description:
      "It was an enjoyable experience in creating this application, and I learned a lot through its creation. It contains visual nutrition, animation, and a smooth and distinctive browsing experience.",
    technology: ["Html,css", "JavaScript", "GitHub"],
    date: "February 3 , 2023",
    source: "https://github.com/khaledyousryhegazy/template-3",
  },
  {
    id: 5,
    name: "template four website",
    img: templateFour,
    link: "https://khaledyousryhegazy.github.io/template-4/",
    title: "Website",
    description:
      "It was an enjoyable experience in creating this application, and I learned a lot through its creation. It contains visual nutrition, animation, and a smooth and distinctive browsing experience.",
    technology: ["Html,css", "JavaScript", "GitHub"],
    date: "Mars 22 , 2023",
    source: "https://github.com/khaledyousryhegazy/template-4",
  },
  {
    id: 6,
    name: "movie website",
    img: movieApp,
    link: "https://moviereview2023.netlify.app/",
    title: "this website was a big challenge for me it was about idea and api",
    description:
      "Movies & Series Lists: Users can access a variety of movie and series lists, including popular, trending, and top-rated movies. Movie & TV Show Details Page: A detailed view showcasing movie or TV show information, along with recommendations for similar content.**Search For Movie or Tv Show **: An intuitive search feature enabling users to easily find specific movies or TV shows.Watchlist: You can add your own movies, series, and tv-show to a watchlist customized for you.**Pagination **: Smooth pagination functionality for effortless navigation between pages.",
    technology: [
      "Reactjs",
      "Redux Toolkit",
      "Swiper.js",
      "Tailwind",
      "Axios",
      "React Router",
      "GitHub",
    ],
    date: "Oct 17 , 2023",
    source: "https://github.com/khaledyousryhegazy/movie-app",
  },
  {
    id: 7,
    name: "admin dashboard",
    img: dashboard,
    link: "https://admindashboard2023.netlify.app/",
    title: "admin dashboard",
    description:
      "It was challenging at the beginning due to its complexity and size. Many issues emerged, leading to extensive research and learning. I sought help from others and it was mentally taxing. I encountered numerous problems, but with patience, research, and learning, I managed to overcome them all. Though it's not fully responsive across all screens, it functions well. I learned a lot from it, including new libraries and concepts.",
    technology: [
      "Html,css",
      "JavaScript",
      "React",
      "GitHub",
      "React Router",
      "MUi/material , Mui/Icon",
      "formik",
      "react-pro-sidebar",
      "yup",
      "nivo",
    ],
    date: "Oct 30 , 2023",
    source: "https://github.com/khaledyousryhegazy/admin-dashboard",
  },
  {
    id: 8,
    name: "rolex website",
    img: rolex,
    link: "https://rolex-website-self.vercel.app/",
    title: "rolex website",
    description:
      "An enjoyable experience from which I learned a lot. This design is responsive to all screens with all specifications and has a dark mode feature. You can add products to the cart and browse them and you will enjoy a smooth user experience.",
    technology: [
      "Html,css",
      "JavaScript",
      "React",
      "React Redux",
      "Redux Toolkit",
      "Tailwind",
      "Sweet alert",
      "GitHub",
    ],
    date: "Nov 5 , 2023",
    source: "https://github.com/khaledyousryhegazy/rolex-website",
  },
];
