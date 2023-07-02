import { useState } from "react";
import { useData } from "../fordata/DataProvider";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

export default function Goods() {
  const { allproduct } = useData();

  const [useallproduct, setUseallproduct] = useState(allproduct);

  function changeallproduct(value) {
    let result = allproduct.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setUseallproduct(result);
  }

  return (
    <>
      <div className="flex w for-find">
        <input
          type="text"
          className="w find"
          placeholder="Search for the desired products."
          onChange={(e) => changeallproduct(e.target.value)}
        />
      </div>
      <div className="  w disflex ">
        {useallproduct.map((dataforRound) => {
          return <Item key={uuidv4()} {...dataforRound} />;
        })}
      </div>
    </>
  );
}
