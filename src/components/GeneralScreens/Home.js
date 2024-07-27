import React, { useContext, useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import "../../Css/flexContainer.css";
import instance from "../../Context/axiosConfig";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import configData from "../../config.json";
import {
  BiDollarCircle,
  BiTime,
  BiCheckCircle,
  BiMedal,
  BiX,
  BiArrowToTop,
} from "react-icons/bi";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import "../../Css/Home.css";
import ServicesComponent from "../utilities/services";
import SquareCard from "../utilities/squareCard";
import TypingText from "../utilities/typingText";
import HoverImage from "../utilities/hoverImage";
import travel1 from "../../img/divi-travel-layout-5.png";
import travel2 from "../../img/divi-travel-layout-6.png";
import travel3 from "../../img/divi-travel-layout-7.png";
import travel4 from "../../img/divi-travel-layout-8.png";
import ContactForm from "./contactForm";
import { AuthContext } from "../../Context/AuthContext";
import Works from "./work";
import Caption from "../utilities/caption";
import logo from "../../img/logo.png";

const Home = () => {
  const search = useLocation().search;
  const searchKey = new URLSearchParams(search).get("search");
  const isSmallScreen = useMediaQuery({ maxWidth: "912px" });
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const { setCallScheduled, callScheduled } = useContext(AuthContext);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const topRef = useRef(null);

  useEffect(() => {
    const getStories = async () => {
      setLoading(true);
      try {
        const { data } = await instance.get(
          `/story/getAllStories?search=${searchKey || ""}&page=${page}`
        );

        if (searchKey) {
          navigate({
            pathname: "/",
            search: `?search=${searchKey}${page > 1 ? `&page=${page}` : ""}`,
          });
        }

        setStories(data.data);
        localStorage.setItem("stories", JSON.stringify(data.data));
        setPages(data.pages);

        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    getStories();
  }, [setLoading, search, page, navigate, searchKey]);

  useEffect(() => {
    setPage(1);
  }, [searchKey]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToTop(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    if (topRef.current) {
      observer.observe(topRef.current);
    }

    return () => {
      if (topRef.current) {
        observer.unobserve(topRef.current);
      }
    };
  }, [topRef]);

  return (
    <div className="Inclusive-home-page">
      <Helmet>
        <title>{`Home | ${configData.Name}`}</title>
        <meta
          name="description"
          content="Explore Sushmeela's portfolio showcasing advanced skills in web and application development. Discover projects, skills, and experiences."
        />
        <meta property="og:title" content={`${configData.Name} Portfolio`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sushmeela-portfolio.com" />
        <meta property="og:image" content={logo} />
        <meta name="twitter:image" content={logo} />
        <meta
          property="og:description"
          content="Explore Sushmeela's portfolio showcasing advanced skills in web and application development. Discover projects, skills, and experiences."
        />
        <link rel="canonical" href="https://sushmeela-portfolio.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {callScheduled && (
        <div className="contact-overlay">
          <div
            className="home-overlay"
            onClick={() => {
              setCallScheduled(false);
              document.body.classList.remove("no-scroll");
            }}
          ></div>
          <BiX
            onClick={() => {
              setCallScheduled(false);
              document.body.classList.remove("no-scroll");
            }}
            style={{
              position: "absolute",
              right: 2,
              top: 2,
              fontSize: "35px",
              zIndex: 9,
              color: "#fff",
              cursor: "pointer",
            }}
          />
          <ContactForm title={"Schedule A Call"} />
        </div>
      )}

      {showBackToTop && (
        <a
          href="#top"
          style={{
            position: "fixed",
            bottom: 10,
            right: 10,
            borderRadius: "50%",
            border: "none",
            padding: "10px",
            textDecoration: "none",
            zIndex: 8,
            backdropFilter: "blur(15px)",
          }}
        >
          <BiArrowToTop
            style={{ fontSize: "30px", color: configData.AppColor }}
          />
        </a>
      )}

      <div style={{ height: "75px" }} id="top"></div>
      <TypingText />
      <div
        className="responsive-flex-square-container"
        style={{
          gap: "0px",
          flexWrap: isSmallScreen ? "wrap" : "nowrap",
          marginBottom: "0px",
        }}
        ref={topRef}
      >
        <HoverImage src={travel1} label="Paris" />
        <HoverImage src={travel2} label="Australia" />
        <HoverImage src={travel3} label="London" />
        <HoverImage src={travel4} label="South Africa" />
      </div>
      <div>
        <ServicesComponent />
      </div>
      <Caption caption="Why Hire Me?" />
      <div className="responsive-flex-square-container">
        <SquareCard
          icon={<BiDollarCircle fontSize="38px" />}
          title="Affordable Pricing"
          content="Competitively priced services without compromising quality. Exceptional value for your investment."
        />

        <SquareCard
          icon={<BiTime fontSize="38px" />}
          title="Fast Delivery"
          content="Timely delivery guaranteed. Streamlined processes ensure quick turnaround times."
        />

        <SquareCard
          icon={<BiCheckCircle fontSize="38px" />}
          title="Uncompromising Quality"
          content="Top priority on quality. Strict standards and rigorous checks for excellence."
        />

        <SquareCard
          icon={<BiMedal fontSize="38px" />}
          title="Advanced Skills"
          content="With my advanced skills, I bring exceptional expertise and proficiency to every project."
        />
      </div>
      <Caption caption="Work Experience" />
      <Works />
      <Caption caption="Latest Posts" />
      {loading ? (
        <div className="skeleton_emp">
          {[...Array(3)].map(() => {
            return <SkeletonStory key={uuidv4()} />;
          })}
        </div>
      ) : (
        <div>
          <div className="story-card-wrapper">
            {stories.length !== 0 ? (
              stories.map((story) => {
                return (
                  <>
                    <CardStory key={uuidv4()} story={story} />
                  </>
                );
              })
            ) : (
              <NoStories />
            )}
          </div>

          <Pagination page={page} pages={pages} changePage={setPage} />
        </div>
      )}
      <br />
    </div>
  );
};

export default Home;
