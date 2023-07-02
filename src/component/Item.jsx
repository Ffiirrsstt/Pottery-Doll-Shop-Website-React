import "./Item.css";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useData } from "../fordata/DataProvider";

const valuelocal = JSON.parse(localStorage.getItem("like"));
let result = valuelocal ? valuelocal : [true, true, true, true, true];

//แก้เอาไปใส่ใน reducer แทน
//ทำระบบค้นหาข้อมูล

export default function Item(props) {
  const { calstar } = useData();
  const { id, name, Image, price, currency, star, forSellItem } = props;
  const [like, setLike] = useState(result);

  const starIcons = calstar(id);

  const setlikefunction = (id) => {
    result = result.map((item, index) => (index === id ? !item : item));
    setLike(result);
  };

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(like));
  }, [like]);

  return (
    // <div className="relative for-item">
    <div className="relative w">
      <button className="btn-like flex" onClick={() => setlikefunction(id - 1)}>
        {like[id - 1] ? (
          <FcLikePlaceholder className="icon-like" />
        ) : (
          <FcLike className="icon-like" />
        )}
      </button>
      <Link to={`/product/${id}`} target="_blank" key={id}>
        <div className="itam-each flex flex-col m10 bor-r5 h15 box-shadow product cursor">
          <div className="bg w h3">
            <img className="img-size w h3" src={Image} alt={name} />
          </div>
          <div className="w p5 w h">
            <div className="w mb30 flex between ">
              <h2>
                {String(name).length > 14 ? (
                  <span>
                    {String(name).substring(0, 14)}
                    <span className="cg">...</span>
                  </span>
                ) : (
                  name
                )}
              </h2>
            </div>
            <h2 className="w mb30">
              {currency}
              {String(price).length > 10 ? (
                <span>
                  {String(price).substring(0, 10)}
                  <span className="cg">...</span>
                </span>
              ) : (
                price
              )}
            </h2>
            <div className="flex between">
              <span>
                {starIcons.map((starList) => (
                  <span key={uuidv4()}>{starList}</span>
                ))}
              </span>
              <h4>{star}</h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
