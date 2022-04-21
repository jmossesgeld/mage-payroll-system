import type { NextPage } from "next";
import Layout from "../components/Landing/Layout";
import Welcome from "../components/Landing/Welcome";

const Home: NextPage = () => {
  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export default Home;
