import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PrivateRoute from "./components/Routing/PrivateRoute";
import Home from "./components/GeneralScreens/Home";
import LoginScreen from "./components/AuthScreens/LoginScreen";
import RegisterScreen from "./components/AuthScreens/RegisterScreen";
import ConfirmEmailAndSignUp from "./components/AuthScreens/confirmEmailAndSignUp";
import ForgotPasswordScreen from "./components/AuthScreens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/AuthScreens/ResetPasswordScreen";
import AddStory from "./components/StoryScreens/AddStory";
import DetailStory from "./components/StoryScreens/DetailStory";
import Header from "./components/GeneralScreens/Header";
import Footer from "./components/GeneralScreens/Footer";
import NotFound from "./components/GeneralScreens/NotFound";
import EditStory from "./components/StoryScreens/EditStory";
import SitemapViewer from "./components/GeneralScreens/sitemap";
import configData from "./config.json";
import ReadListPage from "./components/ProfileScreens/ReadListPage";
import Profile from "./components/ProfileScreens/Profile";
import EditProfile from "./components/ProfileScreens/EditProfile";
import ChangePassword from "./components/ProfileScreens/ChangePassword";
import HeaderStory from "./components/GeneralScreens/headerStory";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LayoutsWithHeader />}>
            <Route path="*" element={<NotFound />} />

            <Route exact path="/" element={<Home />} />



          </Route>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route
            exact
            path="/admin/register"
            element={<RegisterScreen admin={true} />}
          />
          <Route
            exact
            path="/confirmEmailAndSignUp/:token"
            element={<ConfirmEmailAndSignUp />}
          />

          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPasswordScreen />}
          />

          <Route
            exact
            path="/resetpassword"
            element={<ResetPasswordScreen />}
          />
          <Route exact path="/sitemap.xml" element={<SitemapViewer />} />
              <Route path="/" element={<LayoutsWithHeaderStory />}>
                  <Route exact path="/addstory" element={<PrivateRoute />}>
                    <Route exact path="/addstory" element={<AddStory />} />
                  </Route>
                  <Route exact path="/story/:slug" element={<DetailStory />} />
                  <Route exact path="/story/:slug/like" element={<PrivateRoute />}>
                    <Route exact path="/story/:slug/like" element={<DetailStory />} />
                  </Route>
                  <Route exact path="/story/:slug/edit" element={<PrivateRoute />}>
                    <Route exact path="/story/:slug/edit" element={<EditStory />} />
                  </Route>
                  <Route exact path="/story/:slug/delete" element={<PrivateRoute />}>
                    <Route
                      exact
                      path="/story/:slug/delete"
                      element={<DetailStory />}
                    />
                  </Route>
                  <Route exact path="/readList" element={<PrivateRoute />}>
                    <Route exact path="/readList" element={<ReadListPage />} />
                  </Route>
                  <Route exact path="/profile" element={<PrivateRoute />}>
                    <Route exact path="/profile" element={<Profile />} />
                  </Route>
      
                  <Route exact path="/edit_profile" element={<PrivateRoute />}>
                    <Route exact path="/edit_profile" element={<EditProfile />} />
                  </Route>
      
                  <Route exact path="/change_Password" element={<PrivateRoute />}>
                    <Route
                      exact
                      path="/change_Password"
                      element={<ChangePassword />}
                    />
                  </Route>
                </Route>
        </Routes>
      </div>
    </Router>
  );
};

const LayoutsWithHeader = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
          backgroundColor: configData.background,
        }}
      >
        <div>
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

const LayoutsWithHeaderStory = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
          backgroundColor: configData.background,
        }}
      >
        <div>
          <HeaderStory />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
