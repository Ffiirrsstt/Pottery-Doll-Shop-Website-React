import Goods from "./component/AllProduct";
import Nav from "./component/Nav";

export default function Disproduct() {
  return (
    <>
      <Nav />
      <div className="flex w">
        <div className="w80 mb15px">
          <Goods />
        </div>
      </div>
    </>
  );
}
