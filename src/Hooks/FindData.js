import { useEffect, useState } from "react";

const FindData = () => {
  const [findData, setFindData] = useState([]);

  useEffect(() => {
    fetch("https://server-assignment-11-bl4ckslayer.vercel.app/inventory")
      .then((res) => res.json())
      .then((newData) => setFindData(newData));
  }, [findData]);

  return [findData, setFindData];
};

export default FindData;
