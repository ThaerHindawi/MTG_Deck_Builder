import './App.css'
import './index.css'
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CardPage from "./components/Card/CardPage";
import Search from "./components/Search/Search";
import CardsPage from "./components/Card/CardsPage";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
// import RequireAuth from "./components/services/RequireAuth";
import { useContext, useEffect, useState } from "react";
// import { isLoggedInContext } from "./components/hooks/useIsLoggedIn";
// import { AuthProvider } from "./components/hooks/useIsLoggedIn";
import Routes from "./Routes";
import { AuthProvider, isLoggedInContext } from "./hooks/useIsLoggedIn";
import Navigation from "./components/Nav/Navigation";

function App() {
  const { token, setToken } = useContext<IToken>(isLoggedInContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="application">
        <Navigation />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
