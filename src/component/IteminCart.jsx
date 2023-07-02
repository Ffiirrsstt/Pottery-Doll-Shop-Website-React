import "./IteminCart.css";
import { useEffect, useState } from "react";
import { useData } from "../fordata/DataProvider";
import { RiDeleteBack2Fill } from "react-icons/ri";

export default function IteminCart(props) {
  const {
    formaparray,
    itemcart,
    update,
    updatetotal,
    resettotal,
    updateamount,
    tab,
  } = useData();
  const {
    id,
    name,
    Image,
    select,
    onUpdatevalue,
    onUpdatevalueArray,
    forSellItem,
    defultprice,
  } = props;

  const error = () =>
    alert("I apologize for the temporary system malfunction.");

  let local = localStorage.getItem("products");
  local && local !== "undefined" && local !== null
    ? (local = JSON.parse(local))
    : error();

  const arrayfill = (variable, want) => Array(variable).fill(want);

  function forArray(want) {
    if (itemcart && itemcart !== "undefined" && itemcart !== null) {
      // console.log(itemcart);
      let array = arrayfill(itemcart.length, []);
      local = array.map((item, index) => {
        let foritem = local.allproduct[index].select;
        return foritem
          ? arrayfill(local.allproduct[index].select.length, want)
          : item;
      });
    }
    local ? local : error();
    return local;
  }

  let valuefornumber = localStorage.getItem("valueamout");
  valuefornumber =
    valuefornumber && valuefornumber !== "undefined" && valuefornumber !== null
      ? JSON.parse(valuefornumber)
      : arrayfill(itemcart.length, 0);

  let clickselect = localStorage.getItem("clickSelect");
  clickselect = clickselect ? JSON.parse(clickselect) : forArray(true);
  let clickcolor = localStorage.getItem("colorbtnSelect");
  clickcolor = clickcolor ? JSON.parse(clickcolor) : forArray("extra-color");
  const [checkclick, setCheckclick] = useState(clickselect); // true = no
  const [clickColor, setClickColor] = useState(clickcolor);
  const [notitem, setNotitem] = useState(false);
  const [updatevalue, setUpdatevalue] = useState(valuefornumber);

  const [fordefultprice, setforDefultprice] = useState(defultprice);
  const [pricecurrently, setPricecurrently] = useState(forSellItem);

  useEffect(() => {
    updatedefultprice(checkclick, id);
    resettotal();
  }, []);

  useEffect(() => {
    localStorage.setItem("clickSelect", JSON.stringify(checkclick));
    localStorage.setItem("colorbtnSelect", JSON.stringify(clickColor));
  }, [checkclick, clickColor]);

  useEffect(() => {
    setPricecurrently(updatevalue[id - 1] * +fordefultprice);
  }, [fordefultprice, updatevalue]);

  useEffect(() => {
    update(pricecurrently, id);
    updatetotal();
  }, [pricecurrently]);

  function changeSelect(id, index, forboolean) {
    let result = formaparray(id, checkclick, index);
    setCheckclick(result);
    let color = forboolean ? "" : "extra-color";
    let resultcolor = formaparray(id, clickColor, index, color);
    setClickColor(resultcolor);
    updatedefultprice(result, id);
  }

  function updatedefultprice(result, id) {
    let sum = result[id - 1].map((foritem, forindex) =>
      foritem == false ? local.allproduct[id - 1].select[forindex][1] : 0
    );

    sum = sum.reduce((value, valuecur) => value + valuecur, 0);
    setforDefultprice(defultprice + sum);
  }

  function changeamount(value, index) {
    let result;
    if (value == 0) {
      updatetotal();
    }
    if (value == "") {
      result = updatevalue.map((item, round) => (round == index ? 1 : +item));
    } else {
      result = updatevalue.map((item, round) =>
        round == index ? +value : +item
      );
    }
    setUpdatevalue(result);
  }

  function deleteitem(id) {
    setUpdatevalue(
      updatevalue.map((item, index) => (index == id - 1 ? 0 : item))
    );
    updatetotal();
    updateamount(updatevalue);
  }

  useEffect(() => {
    updateamount(updatevalue);
    localStorage.setItem("valueamout", JSON.stringify(updatevalue));
    setNotitem(updatevalue.filter((item) => item !== 0).length === 0);
    onUpdatevalueArray(updatevalue);
  }, [updatevalue]);

  useEffect(() => {
    onUpdatevalue(updatevalue, notitem);
  }, [notitem]);

  return (
    <>
      <div className="box p2 flex j-start bg-three for-box-cart">
        <img src={Image} alt={name} className="forImg" />
        <div className="for-small-h300px flex flex-col p2 w a-start pl2px for-box-cart">
          <div className="flex w between flexone">
            <h2 className="font-wn font-small-head">{name}</h2>
            <div onClick={() => deleteitem(id)} className="forX cursor">
              <RiDeleteBack2Fill />
            </div>
          </div>
          <div className="flex w between flexthree">
            <div className="flex w j-start h50px for-col">
              {select !== undefined && select !== "undefined" && select
                ? Object.values(select).map((item, index) => (
                    <button
                      onClick={() =>
                        changeSelect(id, item[2], checkclick[id - 1][index])
                      }
                      className={`btn-select p2 flex ${
                        clickColor[id - 1][index]
                      }`}
                      key={item[2]}
                    >
                      <h3 className="font-wl">{item[0]}</h3>
                    </button>
                  ))
                : select}
            </div>
            <div className="flex w j-end">
              <h4 className="font-wl op06 font-small">
                The price is {fordefultprice} baht per piece
              </h4>
            </div>
          </div>
          <div className="flex between w flexone">
            <div className="flex flex-col a-start">
              <h3 className="font-wn op06 mb5px font-small-head">
                The number of products in the cart is{tab()}
                <span className="font-wl">{updatevalue[id - 1]}</span>
              </h3>
              <input
                type="number"
                className="add-diff flex"
                defaultValue={updatevalue[id - 1]}
                onChange={(e) => changeamount(e.target.value, id - 1)}
              />
            </div>
            <div className="add-diff gray flex w a-end p2">
              <h4 className="font-wl font-small">Price:{tab()}</h4>
              <h3 className="font-wn font-small">{pricecurrently}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
