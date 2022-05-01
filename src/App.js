import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login/Login";
import Signup from "./Components/Login/Sign Up/Signup";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
