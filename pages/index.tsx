import type { NextPage } from "next";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export default Home;
