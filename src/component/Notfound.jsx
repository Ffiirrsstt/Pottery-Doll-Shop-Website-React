import Nav from "./Nav";

import { AiTwotoneNotification } from "react-icons/ai";

export default function Notfound() {
  return (
    <div className="h100 w100 relative">
      <Nav />
      <div className="flex w absolute fornotfound">
        <div className="flex flex-col box-notfound">
          <div className="mb30px flex">
            <h2 className="mr5px">Pottery Doll Shop Website</h2>
            <AiTwotoneNotification title="404 Page Not Found" />
          </div>
          <h3 className="font-wn">404 Page Not Found</h3>
        </div>
      </div>
    </div>
  );
}
