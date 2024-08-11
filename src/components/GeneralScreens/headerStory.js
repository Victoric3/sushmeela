import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import "../../Css/headerStory.css";
import { RiPencilFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import SkeletonElement from "../Skeletons/SkeletonElement";
import { AuthContext } from "../../Context/AuthContext";
import configData from "../../config.json";
import logo from "../../img/logo.png";

const HeaderStory = () => {
  const bool = localStorage.getItem("authToken") ? true : false;
  const [auth, setAuth] = useState(bool);
  const { activeUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(bool);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [bool]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="header-story">
      <div className="averager-story">
        <div className="logo_container" onClick={() => navigate("/home")}>
          <Link to="/home">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <div className="logo-caption-wrapper">
            <h2
              style={{ color: configData.whiteColor, cursor: "pointer" }}
            >{`${configData.Name.slice(1)}`}</h2>
            <div
              className="logo-touch"
              style={{ backgroundColor: configData.AppColor }}
            ></div>
          </div>
        </div>

        <SearchForm />
        <div className="header_options_story">
          {auth ? (
            <div className="auth_options">
              {activeUser.role === "admin" && <Link
                className="addStory-link"
                style={{
                  color: `${configData.AppColor}`,
                  borderColor: `${configData.AppColor}`,
                }}
                to="/addstory"
              >
                <RiPencilFill /> Add Story{" "}
              </Link>}

              <Link
                style={{
                  color: `${configData.AppColor}`,
                  borderColor: `${configData.AppColor}`,
                }}
                to="/readList"
                className="readList-link"
              >
                <BsBookmarks />
                <span
                  id="readListLength"
                  style={{
                    backgroundColor: `${configData.AppColor}`,
                    boxShadow: `0 0 4px 1px ${configData.AppColor}`,
                  }}
                >
                  {activeUser.readListLength}
                </span>
              </Link>
              <div className="header-profile-wrapper ">
                {loading ? (
                  <SkeletonElement type="minsize-avatar" />
                ) : (
                  <img
                    src={`${activeUser.photo}`}
                    alt={activeUser.username}
                  />
                )}

                <div className="sub-profile-wrap  ">
                  <Link
                    className="profile-link"
                    style={{
                      color: `${configData.AppColor}`,
                      borderColor: `${configData.AppColor}`,
                    }}
                    to="/profile"
                  >
                    {" "}
                    <FaUserEdit /> Profile{" "}
                  </Link>

                  <button className="logout-btn" onClick={handleLogout}>
                    {" "}
                    <BiLogOut /> Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="noAuth_options">
              <Link className="login-link" to="/login">
                {" "}
                Login{" "}
              </Link>

              <Link
                className="register-link"
                style={{
                  color: `${configData.AppColor}`,
                  borderColor: `${configData.AppColor}`,
                }}
                to="/register"
              >
                {" "}
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderStory;
