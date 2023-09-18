import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./components/Home/Home"
import SignUp from "./components/sign up/SignUp"
import SignIN from "./components/sign in/SignIN"
import  Card from "./components/Cards/Card"
import List from "./components/Cards/List";
import Gestionserveur from "./components/Dashboard-admin/Navbar-admin/Gestionserveur";
import ProfilUsers from "./components/Dashboard-admin/ProfilUsers";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
 
  return (
    <div className="App">
      <div className="header">

        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}

{isAuth ? (
          <button
            onClick={() => {
              dispatch();
              navigate("/");
            }}
          >
            retour
          </button>
        ) : null}
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<SignIN />} />
         <Route path="/register" element={<SignUp />} />
         
        
        <Route element={<PrivateRoute />}> 
        <Route path="/list" element={<Card />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/serveurs" element={<Gestionserveur />} />
          <Route path="/users" element={<ProfilUsers   />} />


        </Route>{" "}
      </Routes>

    </div>
  );
}

export default App;
