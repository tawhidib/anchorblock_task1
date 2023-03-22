import Layout from "@/components/layout";
import React from "react";

const Dashboard = () => {
  return (
    <div className="">
      <h3>This is dashboard...this one is private route</h3>
    </div>
  );
};
Dashboard.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
export default Dashboard;
