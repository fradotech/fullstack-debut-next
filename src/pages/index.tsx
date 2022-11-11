import type { GetServerSideProps, NextPage } from "next";
import { server } from "../@server/server";
import Blank from "../client/Layouts/Blank";

const PHome: NextPage = (): JSX.Element => {
  return (
    <Blank title="Login">
      <div className="login__container page__center">
        <div className="page__center">
          <h3>Slicing Landing Page</h3>
        </div>
      </div>
    </Blank >
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  context
  await server()
  return { props: {} };
};

export default PHome;