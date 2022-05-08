import { useNavigate } from "react-router-dom";
import FindData from "../../../Hooks/FindData";
import Loading from "../../Login/Loading/Loading";

import Product from "../Product/Product";

const ManageInventory = () => {
  const [findData, setFindData] = FindData();

  const navigate = useNavigate();

  const gotoAddInventory = () => {
    navigate("/addInventory");
  };

  return (
    <div className="container">
      <div className="button-85 w-50 text-center d-block mx-auto m-4 ">
        <h1
          className=" fw-bolder  mx-auto d-block text-center  "
          style={{ fontSize: "1.2em" }}
        >
          All Products
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
        {findData.length === 0 && <Loading></Loading>}
        {findData.map((items) => (
          <Product key={items._id} items={items}></Product>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => gotoAddInventory()}
          className="button-51 my-5  w-50 "
        >
          Add New Item
        </button>
      </div>
    </div>
  );
};

export default ManageInventory;
