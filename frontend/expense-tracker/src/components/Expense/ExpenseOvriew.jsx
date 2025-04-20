import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";

const ExpenseOvriew = ({transactions, onExpenseIncome}) => {
    const [chartData, setCharData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseLineChartData(transactions);
        setCharData(result);

    return () => {};
    }, [transactions]);

    return (
       <div>ExpenseOvriew</div>
    ) 
}

export default ExpenseOvriew;
