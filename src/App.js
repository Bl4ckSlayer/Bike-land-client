import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login/Login";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
