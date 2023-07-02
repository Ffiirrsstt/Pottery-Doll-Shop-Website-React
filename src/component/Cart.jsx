import IteminCart from "./IteminCart";
import Nav from "./Nav";
import { useData } from "../fordata/DataProvider";
import { useEffect, useState } from "react";
import "./Cart.css";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Cart() {
  const {
    allproduct,
    itemcart,
    changeitemcart,
    tab,
    updatetotalforincart,
    total,
    resettotal,
    updatetotal,
    amountitem,
  } = useData();

  const [incart, setInCart] = useState(itemcart);
  const [notitem, setNotitem] = useState(false);
  const [hidetotal, setHidetotal] = useState(true);
  const [forvaluearray, setforvaluearray] = useState(
    Array(itemcart.length).fill(1)
  );

  useEffect(() => {
    if (incart.filter((value) => value !== 0).length === 0) {
      setNotitem(true);
    }
    changeitemcart(incart);
    updatetotalforincart(incart);
    updatetotal();
  }, [incart]);

  useEffect(() => {
    if (notitem) {
      resettotal();
    }
  }, [notitem]);

  useEffect(() => {
    setInCart(
      incart.map((foritem, forindex) =>
        forvaluearray[forindex] === 0 ? 0 : foritem
      )
    );
  }, [forvaluearray]);

  function valueChild(valuearray, value) {
    setforvaluearray(valuearray);
    setNotitem(value);
  }
  function valueArrayChild(valuearray) {
    setforvaluearray(valuearray);
  }

  return (
    <div className={`h100min bg-two relative for-cart`}>
      <Nav />
      {hidetotal && (
        <div className="flex w">
          <div className="box-total flex between bg-three mb15px topforheadcart">
            <div className=" box-brand flex cursor">
              <h2 className="font-15px">Pottery Doll Shop</h2>
            </div>
            <div className="flex">
              <div className="box-focustotal mr15px font-15px">
                Total quantity of products :{tab()}
                {amountitem}
              </div>
              <div className="box-focustotal mr15px font-15px">
                The total sum :{tab()}
                {total}
              </div>
              <div>
                <AiFillEyeInvisible
                  onClick={() => setHidetotal(false)}
                  className="icon-hide op06 cursor"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {notitem && (
        <div className="flex w h55 relative mt115px">
          <h2 className="font-wn">There are no products in the cart.</h2>
        </div>
      )}
      {!notitem && (
        <div className={` flex flex-col w mt115px ${!hidetotal && "for-hide"}`}>
          {incart.map((item, index) =>
            item == 1 ? (
              <IteminCart
                key={`${allproduct[index].id}-${item}`}
                {...allproduct[index]}
                onUpdatevalue={valueChild}
                onUpdatevalueArray={valueArrayChild}
              />
            ) : (
              ""
            )
          )}
        </div>
      )}
      {!hidetotal && (
        <div
          className="for-openhide flex cursor"
          onClick={() => setHidetotal(true)}
        >
          <AiFillEye />
        </div>
      )}
    </div>
  );
}
