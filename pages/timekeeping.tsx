import type { NextPage } from "next";
import Layout from "../components/Payroll/Layout";
import Timekeeping from "../components/Payroll/Timekeeping";

const TimekeepingPage: NextPage = () => {
  return (
    <Layout>
      <Timekeeping />
    </Layout>
  );
};

export default TimekeepingPage;
