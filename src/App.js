import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./Components/Login/Login/Login";
import RequireAuth from "./Components/Login/RequireAuth/RequireAuth";
import Signup from "./Components/Login/Sign Up/Signup";
import AddToInventory from "./Components/Pages/AddToInventory/AddToInventory";
import Home from "./Components/Pages/Home/Home";
import ManageInventory from "./Components/Pages/ManageInventory/ManageInventory";
import MyProducts from "./Components/Pages/MyProducts/MyProducts";
import SingleInventory from "./Components/Pages/SingleInventory/SingleInventory";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <SingleInventory></SingleInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/myproducts"
          element={
            <RequireAuth>
              <MyProducts></MyProducts>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addInventory"
          element={
            <RequireAuth>
              <AddToInventory></AddToInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
