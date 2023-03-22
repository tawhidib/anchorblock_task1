import Layout from "@/components/layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/sign-in");
    }
  });
  return (
    <div className="">
      <h3>This is dashboard...this one is private route</h3>
    </div>
  );
};
Dashboard.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
export default Dashboard;
