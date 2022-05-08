import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import FindData from "../../../Hooks/FindData";
const AddToInventory = () => {
  const [findData, setFindData] = FindData();
  const [user] = useAuthState(auth);
  const EventSubmit = (event) => {
    const newItem = {
      name: event.target.name.value,
      description: event.target.description.value,
      price: event.target.price.value,
      img: event.target.img.value,
      supplierName: event.target.supplierName.value,

      quantity: event.target.quantity.value,
      email: event.target.email.value,
    };

    event.preventDefault();
    const url = `https://limitless-castle-10450.herokuapp.com/inventory`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setFindData(result);
      });
    // event.target.reset();
    toast("Items Added, Check My Products Section");
    event.target.reset();
  };
  return (
    <div className="container text-center">
      <h2
        className="form-title button-35 text-center"
        style={{ cursor: "default" }}
      >
        Add To Inventory
      </h2>
      <div className="form-container mt-4  container-fluid   w-75  ">
        <div className="p-4 ">
          <form onSubmit={EventSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="description">Description</label>
              <textarea type="text" name="description" required />
            </div>
            <div className="input-group">
              <label htmlFor="img">Image Url</label>
              <input type="text" name="img" />
            </div>
            <div className="input-group">
              <label htmlFor="price">Price</label>
              <input type="text" name="price" required />
            </div>
            <div className="input-group">
              <label htmlFor="quantity">Quantity</label>
              <input type="number" name="quantity" required />
            </div>
            <div className="input-group">
              <label htmlFor="supplierName">Supplier Name</label>
              <input type="text" name="supplierName" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                value={user?.email}
                readOnly={true}
                name="email"
                required
              />
            </div>
            <button className="button-51" type="submit" required>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToInventory;
