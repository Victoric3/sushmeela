import { useContext } from "react";
import seo from "../../img/seo-removebg-preview.png";
import YouTube from "../../img/youtube-removebg-preview.png";
import Blog from "../../img/blog-removebg-preview.png";
import SocialMedia from "../../img/social_media-removebg-preview (1).png";
import FinancialAdvice from "../../img/financial_advice-removebg-preview.png";
import EducationalContent from "../../img/educational_content-removebg-preview.png";
import { AuthContext } from "../../Context/AuthContext";

const contentTypes = [
  {
    navLink: "/services/animation",
    navName: "Seo Writting",
    img: seo,
  },
  {
    navLink: "/services/ads-marketing",
    navName: "Ads/Marketing",
    img: "https://i.ibb.co/zRQ6brc/target-2070972-1920.png",
  },
  {
    navLink: "/services/ads-marketing",
    navName: "YouTube Scripts",
    img: YouTube,
  },
  {
    navLink: "/services/ads-marketing",
    navName: "Blog Writting",
    img: Blog,
  },
  {
    navLink: "/services/ads-marketing",
    navName: "Content writting",
    img: SocialMedia,
  },
  {
    navLink: "/services/ads-marketing",
    navName: "Financial Advice",
    img: FinancialAdvice,
  },
  {
    navLink: "/services/ads-marketing",
    navName: "Educational Content",
    img: EducationalContent,
  },
];
const NavLinks = () => {
  const { setCallScheduled } = useContext(AuthContext);
  const scheduleACall = () => {
    setCallScheduled(true);
    document.body.classList.add("no-scroll");
  };
  const navLinks = [
    {
      navLink: "#Why Hire Me?",
      navName: "Why Hire Me?",
      icon: "info_outline",
    },
    {
      navLink: "#",
      navName: "Skills",
      icon: "build",
      children: contentTypes,
    },
    {
      navLink: "#Testimonial",
      navName: "Testimonial",
      icon: "email",
    },
    {
      navLink: "#My Services",
      navName: "My Services",
      icon: "Services",
    },
    {
      navLink: "#Frequently Asked Questions",
      navName: "Faq",
      icon: "Services",
    },
    {
      navLink: "#Latest Posts",
      navName: "Latest Posts",
      icon: "article",
    },
    {
      navLink: "#top",
      func: scheduleACall,
      navName: "Get A Quote",
      icon: "phone",
    },
  ];
  return navLinks;
};
export default NavLinks;
