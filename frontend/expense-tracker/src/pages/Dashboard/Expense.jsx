import { useState, useEffect } from 'react';
import { useUserAuth } from '../../hooks/useUserAuth';
import Dashboardlayout from '../../components/layouts/DashboardLayout';
import { API_PATHS } from '../../utils/apiPaths';
import axiosInstance from '../../utils/axiosInstance';
import { toast } from 'react-hot-toast';
import ExpenseOvriew from '../../components/Expense/ExpenseOvriew';

const Expense = () => {
  useUserAuth();

  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddExpenseModel, setOpenAddExpenseModel] = useState(false);

  // Get All Expense Details
  const fetchExpenseData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`
      );
      if (response.data) {
        setExpenseData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Add Expense
  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;

    // Validation Checks
    if (!category.trim()) {
      toast.error("Category is required.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid greater than 0.");
      return;
    }

    if (!date) {
      toast.error("Date is required.");
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
        category,
        amount,
        date,
        icon,
      });
      setOpenAddExpenseModel(false); // ✅ Fixed typo
      toast.success("Expense added successfully.");
      fetchExpenseData(); // ✅ Fixed function call
    } catch (error) {
      console.error(
        "Error adding expense:",
        error.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    fetchExpenseData(); // ✅ Fixed function call
  }, []);

  return (
    <Dashboardlayout activeMenu="Expense">
      <div className="my-5 mx-auto">
       <div className="grid grid-cols-1  gap-6">
        <div className="">
          <ExpenseOvriew
          transactions={expenseData}
          onExpenseIncome={() => setOpenAddExpenseModel(true)}
          />
        </div>
      </div>
      </div>
    </Dashboardlayout>
  );
};

export default Expense;
