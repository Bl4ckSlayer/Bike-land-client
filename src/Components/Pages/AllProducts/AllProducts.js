import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FindData from "../../../Hooks/FindData";
import Loading from "../../Login/Loading/Loading";
import Artical from "../Artical/Artical";
import MyCard from "../MyCard/MyCard";
import Product from "../Product/Product";

const AllProducts = () => {
  const navigate = useNavigate();
  const [findData, setFindData] = FindData();
  let fromHome = 1;
  const goToManageInventory = () => {
    navigate("/manageinventory");
  };
  return (
    <div className="container">
      <div
        className="button-85 w-50 text-center d-block mx-auto m-4 "
        style={{ cursor: "default" }}
      >
        <h1
          className=" fw-bolder  mx-auto d-block text-center  "
          style={{ fontSize: "1.5em" }}
        >
          Products
        </h1>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  mb-5">
        {findData.length === 0 && <Loading></Loading>}
        {findData.slice(0, 6).map((items) => (
          <Product key={items._id} items={items} fromHome={fromHome}></Product>
        ))}
      </div>
      <div className="text-center mb-5">
        <Button
          onClick={() => goToManageInventory()}
          className="button-51 mt-5"
        >
          Manage Inventory
        </Button>
      </div>
      <MyCard></MyCard>
      <Artical></Artical>
    </div>
  );
};

export default AllProducts;
