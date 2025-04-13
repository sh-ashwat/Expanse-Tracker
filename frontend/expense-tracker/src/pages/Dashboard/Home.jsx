import React from 'react';
import Dashboardlayout from "../../components/layouts/DashboardLayout";

const Home = () => {
  return (
    <Dashboardlayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <h2 className="text-xl font-semibold">Welcome to the Dashboard</h2>
      </div>
    </Dashboardlayout>
  );
};

export default Home;
