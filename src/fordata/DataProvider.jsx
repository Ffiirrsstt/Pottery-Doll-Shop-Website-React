import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { dataItem } from "./dataItem";
import DataReducer from "./DataReducer";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const DataContext = createContext();

let products;

let get = localStorage.getItem("products");
get && get !== "undefined"
  ? (products = JSON.parse(get))
  : (products = {
      allproduct: dataItem,
      total: 0,
      itemcart: Array(dataItem.length).fill(0),
      amountitem: 0,
    });

const starfill = (star, iconstar) => Array(Math.floor(+star)).fill(iconstar);

function formaparray(id, forarray, index, valueitem = 0) {
  let result = forarray.map((foritem, forindex) =>
    forindex == id - 1
      ? foritem.map((item, inDex) =>
          inDex == index ? (valueitem == 0 ? !item : valueitem) : item
        )
      : foritem
  );
  return result;
}

const tab = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, products);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(state));
  }, [state]);

  function calstar(id) {
    const star = products.allproduct[id - 1].star;
    const startfloor = Math.floor(+star);
    const starIcons = starfill(startfloor, <TiStarFullOutline />);
    let halfstar;
    if (star != startfloor) {
      halfstar = <TiStarHalfOutline />;
    }
    const result = halfstar ? starIcons.concat(halfstar) : starIcons;
    return result;
  }

  const update = (pricecurrently, id) =>
    dispatch({ type: "UPDATE", payload: { pricecurrently, id } });

  const changeitemcart = (cartdata) =>
    dispatch({ type: "UPDATECART", payload: cartdata });

  const updatetotal = () => dispatch({ type: "UPDATETOTAL" });

  const resettotal = () => dispatch({ type: "RESETTOTAL" });

  const updatetotalforincart = (cart) =>
    dispatch({ type: "UPDATETOTALFORCART", payload: cart });

  const updateamount = (datavalue) =>
    dispatch({ type: "UPDATEAMOUT", payload: datavalue });

  return (
    <DataContext.Provider
      value={{
        ...state,
        calstar,
        tab,
        update,
        formaparray,
        changeitemcart,
        updatetotal,
        updatetotalforincart,
        resettotal,
        updateamount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useData = () => {
  return useContext(DataContext);
};
