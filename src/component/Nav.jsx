import { useData } from "../fordata/DataProvider";
import { Link } from "react-router-dom";
import "./Nav.css";

import {
  BsFillCartFill,
  BsFillHandbagFill,
  BsHouseDoorFill,
  BsChatTextFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Nav() {
  const { amountitem } = useData();

  const [classcart, setClasscart] = useState("icon-cart-Item");
  const [classcartamout, setClassforcartamout] = useState("amount-item");

  useEffect(() => {
    amountitem !== 0
      ? setClasscart("icon-cart-Item")
      : setClasscart("icon-cart-notfound");
    amountitem !== 0
      ? setClassforcartamout("amount-item")
      : setClassforcartamout("");
  }, [amountitem]);

  return (
    <div className="flex forNav sticky w between">
      <div className="flex flexone j-start">
        <Link to="/" className="link">
          <h1 className="brand flex h">Pottery Doll Shop</h1>
        </Link>
      </div>
      <div className="flex arond w j-end flexone flex-two">
        <Link to="/" className="flex flex-col w link flexone">
          <BsHouseDoorFill className="icon mb5px" />
          <h2 className="color-txthead">Home</h2>
        </Link>
        <Link to="/product" className="flex flex-col w link flexone">
          <BsFillHandbagFill className="icon mb5px" />
          <h2 className="color-txthead flex">All products</h2>
        </Link>
        <Link to="/contact" className="flex flex-col w link flexone">
          <BsChatTextFill className="icon mb5px" />
          <h2 className="color-txthead">Contact</h2>
        </Link>
        <Link to="/cart" className="flex w link flexone">
          <BsFillCartFill className={`icon icon-cart ${classcart}`} />
          <div className={`box-cart flex ${classcartamout}`}>
            <h3 className="font-wn font">{amountitem}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
