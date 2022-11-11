import type { NextPage } from "next";
import Blank from "../client/Layouts/Blank";

const P404: NextPage = () => {
  return (
    <Blank title="Login">
      <div className="login__container page__center">
        <div className="page__center">
          <h3>Slicing 404 Page</h3>
        </div>
      </div>
    </Blank >
  );
};

export default P404;