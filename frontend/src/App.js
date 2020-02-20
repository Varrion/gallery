import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from "./pages/Login";
import {LocationProvider, Redirect, Router} from "@reach/router";
import RegisterPage from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import {Header} from "./components/Header";
import {UploadPictures} from "./pages/UploadPictures";
import {BuyImages} from "./pages/BuyImages";
import PictureDetails from "./pages/PictureDetails";
import {Cart} from "./pages/Cart";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
            <LocationProvider>
                <Router>
                    <Redirect noThrow default from="*" to="/"/>
                    <Dashboard path="/"/>
                    <RegisterPage path="/register"/>
                    <LoginPage path="/login"/>
                    <UploadPictures path="/pictures-upload"/>
                    <BuyImages path="/pictures-buy"/>
                    <PictureDetails path="/picture/:pictureId"/>
                    <Cart path="/my-cart"/>
                </Router>
            </LocationProvider>
        </div>
    </div>
  );
}

export default App;
