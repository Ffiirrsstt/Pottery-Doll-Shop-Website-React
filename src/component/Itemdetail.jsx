import { useParams } from "react-router-dom";
import { useData } from "../fordata/DataProvider";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Itemdetail.css";
import Nav from "./Nav";

//คงการตั้งค่าและจำนวนสินค้า

export default function Itemdetail() {
  const {
    allproduct,
    itemcart,
    changeitemcart,
    calstar,
    tab,
    update,
    formaparray,
    updateamount,
  } = useData();
  const [imgData, setImgData] = useState();
  const [nameData, setNameData] = useState("");
  const [priceData, setPriceData] = useState("");
  const [defultprice, setDefultprice] = useState("");
  const [requirementsData, setRequirementsData] = useState("");
  const [starData, setstarData] = useState();
  const [selectData, setSelectData] = useState();
  const [pricecurrently, setPricecurrently] = useState();
  const { id } = useParams();
  let forboolean = localStorage.getItem("clickSelect");
  let forbtncolor = localStorage.getItem("colorbtnSelect");
  let resutlclick = forboolean ? JSON.parse(forboolean) : "";
  let resutlbtn = forbtncolor ? JSON.parse(forbtncolor) : "";
  const [forbtn, setForbtn] = useState(resutlbtn);
  const [checkclick, setCheckclick] = useState(resutlclick);
  const [amountforsell, setAmountforsell] = useState();

  let valuenumber = localStorage.getItem("valueamout");

  const [arrayvalueinput, setArrayvalueinput] = useState();
  const [display, setDisplay] = useState();

  const [cartdata, setCartdata] = useState(itemcart);

  const starIcons = calstar(id);

  let forinput;

  useEffect(() => {
    setImgData(allproduct[id - 1].Image);
    setNameData(allproduct[id - 1].name);
    setPriceData(allproduct[id - 1].price);
    setRequirementsData(allproduct[id - 1].Requirements);
    setstarData(allproduct[id - 1].star);
    setSelectData(allproduct[id - 1].select);
    setDefultprice(allproduct[id - 1].defultprice);
    setAmountforsell(Array(allproduct.length).fill(0));
  }, []);

  useEffect(() => {
    if (amountforsell && amountforsell !== "undefined") {
      let result =
        valuenumber !== 0 && valuenumber && valuenumber !== "undefined"
          ? JSON.parse(valuenumber)
          : amountforsell;
      setArrayvalueinput(result);
    }
  }, [amountforsell]);

  useEffect(() => {
    forinput =
      arrayvalueinput &&
      arrayvalueinput !== "undefined" &&
      arrayvalueinput !== null
        ? arrayvalueinput[id - 1]
        : 1;
    setDisplay(forinput);
    if (checkclick) {
      setPricecurrently(forinput * fordefultprice());
    }
  }, [arrayvalueinput]);

  useEffect(() => {
    if (forboolean == '""' || forboolean == null) {
      forboolean = loopforarray(true);
      setCheckclick(forboolean);
    }
    if (forbtncolor == '""' || forbtncolor == null) {
      forbtncolor = loopforarray(`extra-color`);
      setForbtn(forbtncolor);
    }
  }, [selectData]);

  function loopforarray(want) {
    let forclick = [];
    for (let round = 0; round < allproduct.length; round++) {
      if (allproduct[round].select) {
        let resultarray = Array.from(
          { length: allproduct[round].select.length },
          () => want
        );
        forclick.push(resultarray);
      } else {
        forclick.push([]);
      }
    }
    return forclick;
  }

  function arrayvalueforInput() {
    return arrayvalueinput.map((item, index) =>
      index == id - 1 ? +display : item
    );
  }

  function arrayupdateGo(id) {
    return arrayvalueinput.map((item, index) =>
      index == id
        ? display &&
          display !== "undefined" &&
          display !== null &&
          display !== 0
          ? +display
          : 1
        : item
    );
  }

  function submitCart(id) {
    setCartdata(cartdata.map((item, index) => (index == id ? 1 : item)));
    localStorage.setItem("valueamout", JSON.stringify(arrayupdateGo(id)));
  }

  useEffect(() => {
    changeitemcart(cartdata);
    updateamount(JSON.parse(localStorage.getItem("valueamout")));
  }, [cartdata]);

  function checkfordefult() {
    let numberfrommap = checkclick[id - 1].map((boolean, index) => {
      return !boolean
        ? allproduct[id - 1].select[index]
          ? allproduct[id - 1].select[index][1]
          : 0
        : 0;
    });
    let sum = numberfrommap.reduce((total, value) => total + value, 0);
    return sum;
  }

  function calPrice(check, index) {
    let result = formaparray(id, checkclick, index);
    setCheckclick(result);
    let color = check ? "" : "extra-color";
    let resultcolor = formaparray(id, forbtn, index, color);
    setForbtn(resultcolor);
  }

  function fordefultprice() {
    return allproduct[id - 1].defultprice + checkfordefult();
  }

  function forsetPricecurrently(value) {
    setDisplay(value);
    setPricecurrently(value * fordefultprice());
  }

  useEffect(() => {
    localStorage.setItem("clickSelect", JSON.stringify(checkclick));
    if (checkclick) {
      let sum = checkfordefult();
      setDefultprice(allproduct[id - 1].defultprice + sum);
    }
    if (checkclick) {
      setPricecurrently(display * fordefultprice());
    }
  }, [checkclick]);

  useEffect(() => {
    localStorage.setItem("colorbtnSelect", JSON.stringify(forbtn));
  }, [forbtn]);

  useEffect(() => {
    update(pricecurrently, id);
  }, [pricecurrently]);

  useEffect(() => {
    if (arrayvalueinput && arrayvalueinput !== "undefined") {
      let result = arrayvalueforInput();
      localStorage.setItem("valueamout", JSON.stringify(result));
    }
  }, [display]);

  return (
    <>
      <Nav />
      <div className="w flex flex-col">
        <div className="flex box-detail bor-10px for-itemdetail max-height">
          <div className="flex flex-col bor-10px">
            <div className="flex flewforwarp">
              <img src={imgData} className="" alt="" />
              <img src={imgData} className="" alt="" />
            </div>
            <div className="flex flewforwarp">
              <img src={imgData} className="img-small " alt="" />
              <img src={imgData} className="img-small " alt="" />
              <img src={imgData} className="img-small " alt="" />
              <img src={imgData} className="img-small " alt="" />
            </div>
          </div>
          <div className="flex flex-col w h p2 txt-c">
            <div className="flex flex-col w h300px ">
              <div className="flexone w h flex j-start">
                <h1 className="font-18px">{nameData}</h1>
              </div>
              <div className="flexone w h flex j-start">
                <h2 className="font-wl font-18px">price : {priceData}</h2>
              </div>
              <div className="flexone w h flex j-start">
                <h3 className="font-wn font-18px">{requirementsData}</h3>
              </div>
              <div className="flexone flex w h between bor-bottom">
                <div className="flex flex-col w">
                  <div className="flex w j-start">
                    <h2 className="font-18px">star : </h2>
                    {tab()}
                    <h2 className="flex for-star font-18px">{starData}</h2>
                    {tab()}
                    <div className="flex">
                      {starIcons.map((starList) => (
                        <span
                          className="icon-star for-star font-18px"
                          key={uuidv4()}
                        >
                          {starList}
                        </span>
                      ))}
                    </div>
                    {tab()}
                  </div>
                  <div className="j-start w">
                    <h5 className="font-wl op08">
                      Number of reviews : 50 people
                    </h5>
                  </div>
                </div>
                <div className="flex flex-col w a-end">
                  <h4 className="op08 font-wl">number of buyers</h4>
                  <h3 className="font-18px">200 people</h3>
                </div>
              </div>
            </div>
            <div className="flex w h150px ptb-10 max-height">
              <div className="flex flex-col w h flextwo a-start overflow">
                <h4 className="font-wn">
                  It is a made-to-order product that takes 7 days to complete
                </h4>
                <div className="flex flex-warp j-start">
                  {selectData &&
                    allproduct[id - 1].select.map((item) => (
                      <div
                        key={uuidv4()}
                        className={`flex select-buy cursor ${
                          forbtn[id - 1][item[2]]
                        }`}
                        onClick={() =>
                          calPrice(checkclick[id - 1][item[2]], item[2])
                        }
                      >
                        <h3 className="font-14px font-wl">{item[0]}</h3>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex w h flexone pl-10 bor-l max-height">
                <div className="flex flex-col w h">
                  <div className="w flex a-end">
                    <div className="flex flex-col">
                      <div className="flex between">
                        <h5 className="op08 font-wn">Current total price : </h5>
                        <input
                          type="number"
                          value={pricecurrently ? pricecurrently : defultprice}
                          className="value-price font-18px"
                          readOnly
                        />
                      </div>
                      <input
                        onChange={(e) => forsetPricecurrently(e.target.value)}
                        type="number"
                        className="font-18px"
                        value={display || 1}
                      />
                    </div>
                  </div>
                  <div className="flex mt-10 w a-start">
                    <button
                      className="w cart btn-hover font-18px"
                      onClick={() => submitCart(id - 1)}
                    >
                      Cart
                    </button>
                    <button className="w buy btn-hover font-18px">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
