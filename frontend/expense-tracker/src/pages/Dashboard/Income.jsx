import React, { useState, useEffect } from 'react';
import Dashboardlayout from "../../components/layouts/DashboardLayout";
import IncomeOverview from "../../components/Income/IncomeOverview";
import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddIncomeModel, setOpenAddIncomeModel] = useState(false);

  // Get All Income Details
  const fetchIncomeData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.INCOME.GET_ALL_INCOME}`
      );
      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Add Income
  const handleAddIncome = async (income) => {};

  // Delete Income
  const deleteIncome = async (id) => {};

  // Handle download Income
  const handleDownloadIncomeDetails = async (id) => {};

  useEffect(() => {
    fetchIncomeData();
  }, []);

  return (
    <Dashboardlayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <IncomeOverview
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModel(true)}
            />
          </div>
        </div>
      </div>
    </Dashboardlayout>
  );
};

export default Income;
