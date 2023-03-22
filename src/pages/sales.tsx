import Layout from "@/components/layout";
import React from "react";

const Sales = (): JSX.Element => {
  return (
    <div className="">
      <h3>This is sales page</h3>
    </div>
  );
};

Sales.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Sales;
