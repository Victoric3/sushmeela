import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import PrivateRoute from './components/Routing/PrivateRoute';
import Home from "./components/GeneralScreens/Home"
import LoginScreen from "./components/AuthScreens/LoginScreen"
import RegisterScreen from "./components/AuthScreens/RegisterScreen"
import ConfirmEmailAndSignUp from "./components/AuthScreens/confirmEmailAndSignUp"
import ForgotPasswordScreen from "./components/AuthScreens/ForgotPasswordScreen"
import ResetPasswordScreen from "./components/AuthScreens/ResetPasswordScreen"
import AddStory from './components/StoryScreens/AddStory';
import DetailStory from './components/StoryScreens/DetailStory';
import Header from './components/GeneralScreens/Header';
import Footer from './components/GeneralScreens/Footer';
import NotFound from './components/GeneralScreens/NotFound';
import EditStory from './components/StoryScreens/EditStory';
import SitemapViewer from './components/GeneralScreens/sitemap';
import configData from './config.json'

const App = () => {

      return (
            <Router>
                  <div className="App">

                         <Routes>
                              <Route path="/" element={<LayoutsWithHeader />}>

                                    <Route path='*' element={<NotFound />} />

                                    <Route exact path='/' element={<Home />} />
                                    


                                    <Route exact path="/story/:slug" element={<DetailStory />} />

                                    <Route exact path='/addstory' element={<PrivateRoute />}>
                                          <Route exact path='/addstory' element={<AddStory />} />
                                    </Route>
                                    <Route exact path='/story/:slug/like' element={<PrivateRoute />}>
                                          <Route exact path='/story/:slug/like' element={<DetailStory />} />
                                    </Route>

                                    <Route exact path='/story/:slug/edit' element={<PrivateRoute />}>
                                          <Route exact path='/story/:slug/edit' element={<EditStory />} />
                                    </Route>

                                    <Route exact path='/story/:slug/delete' element={<PrivateRoute />}>
                                          <Route exact path='/story/:slug/delete' element={<DetailStory />} />
                                    </Route>
                                    <Route exact path='/story/:slug/addComment' element={<PrivateRoute />}>
                                          <Route exact path='/story/:slug/addComment' element={<DetailStory />} />
                                    </Route>

                              </Route>
                               <Route exact path="/login" element={<LoginScreen />} />
                              <Route exact path="/register" element={<RegisterScreen />} />
                              <Route exact path="/confirmEmailAndSignUp/:token" element={<ConfirmEmailAndSignUp />} />

                              <Route exact path="/forgotpassword" element={<ForgotPasswordScreen />} />

                              <Route exact path="/resetpassword" element={<ResetPasswordScreen />} />
                              <Route exact path="/sitemap.xml" element={<SitemapViewer />} />


                        </Routes> 

                  </div>

            </Router>

      );

}

const LayoutsWithHeader = () => {

      return (
            <>
            <div style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  minHeight: '100vh',
                  justifyContent: 'space-between',
                  backgroundColor: configData.background
                  }}>
            <div>
                  <Header />
                  <Outlet />
            </div>
                  <Footer />
            </div>
            </>
      );
}

export default App;
