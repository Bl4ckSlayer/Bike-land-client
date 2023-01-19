import FindData from "./FindData";

const AllFunctions = () => {
  const [findData, setFindData] = FindData();

  const DecreaseByOne = (item) => {
    console.log(item);

    const newQuantity = parseInt(item.quantity) - 1;

    const newItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      img: item.img,
      supplierName: item.supplierName,
      quantity: newQuantity,
    };

    const url = `https://server-assignment-11-bl4ckslayer.vercel.app/inventory/${item._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setFindData(data);
      });
  };

  const IncreaseByOne = (item, number) => {
    console.log(item, typeof number);

    const newQuantity = parseInt(item.quantity) + parseInt(number);

    const newItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      img: item.img,
      supplierName: item.supplierName,
      quantity: newQuantity,
    };

    const url = `https://server-assignment-11-bl4ckslayer.vercel.app/inventory/${item._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setFindData(data);
      });
  };

  return [DecreaseByOne, IncreaseByOne];
};

export default AllFunctions;
