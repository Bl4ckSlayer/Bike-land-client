import { useEffect, useState } from "react";

const FindData = () => {
  const [findData, setFindData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((newData) => setFindData(newData));
  }, []);

  return [findData, setFindData];
};

export default FindData;
