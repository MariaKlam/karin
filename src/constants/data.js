import images from "./images";
import {
  FaPaperPlane,
  FaEdit,
  FaRocket,
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaAd,
} from "react-icons/fa";

import { ImMagicWand } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";

const gradient = "url(#blue-gradient)";

const services = [
  {
    id: 1,
    icon: <FaPaperPlane style={{ fill: gradient }} />,
    title: "Turundus",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
    image: images.portfolio_img_1,
  },
  {
    id: 2,
    icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
    title: "Kampaaniad",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
    image: images.portfolio_img_2,
  },
  {
    id: 3,
    icon: <FaRocket style={{ fill: gradient }} />,
    title: "Bränding",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
    image: images.portfolio_img_3,
  },
  {
    id: 4,
    icon: <FaEdit style={{ fill: gradient }} />,
    title: "Sisuloome",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
    image: images.portfolio_img_3,
  },
  {
    id: 5,
    icon: <ImMagicWand style={{ fill: gradient }} />,
    title: "SEO",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
    image: images.portfolio_img_1,
  },
  {
    id: 6,
    icon: <FaAd style={{ fill: gradient }} />,
    title: "Copywriting",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
    image: images.portfolio_img_2,
  },
];

const about = [
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor",
  },
];

const qualities = [
  {
    id: 8,
    icon: <FaFileAlt style={{ fill: gradient }} />,
    title: "Idee & teostus",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
  },
  {
    id: 9,
    icon: <AiOutlineReload style={{ fill: gradient }} />,
    title: "Turuanalüüs & strateegia",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
  },
];

const features = [
  {
    id: 10,
    title: "Turundus",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 11,
    title: "Kampaaniad",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 12,
    title: "Bränding",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 13,
    title: "Sisuloome",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 14,
    title: "SEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 15,
    title: "Copywriting",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
];

const portfolio = [
  {
    id: 16,
    title: "Näide 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_1,
  },
  {
    id: 17,
    title: "Projekt 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_2,
  },
  {
    id: 18,
    title: "Projekt 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_4,
  },
  {
    id: 19,
    title: "Näide 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_3,
  },
  {
    id: 20,
    title: "Näide 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_1,
  },
  {
    id: 21,
    title: "Projekt 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_3,
  },
  {
    id: 22,
    title: "Projekt 7",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_4,
  },
  {
    id: 23,
    title: "Näide 8",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_3,
  },
];

const testimonials = [
  {
    id: 25,
    name: "Andres Brown",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_2,
    rating: 5,
  },

  {
    id: 26,
    name: "Anna Stawer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_4,
    rating: 5,
  },

  {
    id: 27,
    name: "Mari Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_6,
    rating: 5,
  },
];

const contact = [
  {
    id: 28,
    icon: <FaPhoneAlt style={{ fill: gradient }} />,
    info: "+372 235 712",
    text: "",
  },
  {
    id: 29,
    icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
    info: "turundus@info.com",
    text: "",
  },
  {
    id: 30,
    icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
    info: "Eesti, Tallinn",
    text: "",
  },
];

const sections = {
  services,
  about,
  qualities,
  features,
  portfolio,
  testimonials,
  contact,
};

export default sections;
