import { useEffect, useState } from "react";

const FindData = () => {
  const [findData, setFindData] = useState([]);

  useEffect(() => {
    fetch("https://limitless-castle-10450.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((newData) => setFindData(newData));
  }, [findData]);

  return [findData, setFindData];
};

export default FindData;
