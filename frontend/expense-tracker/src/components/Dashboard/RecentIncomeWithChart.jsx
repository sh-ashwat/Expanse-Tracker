import React, { useEffect, useState } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4f39f6"];

const RecentIncomeWithChart = ({data, totalIncome}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            const dataArr = data.map((item) => ({
                name: item?.source || "Unknown",
                amount: Number(item?.amount) || 0,
            }));
            setChartData(dataArr);
         } else {
            // If no data, create a default data point to ensure the chart renders
            setChartData([
                { name: "Salary", amount: Number(totalIncome) || 0 }
            ]);
        }
    }, [data, totalIncome]);
     
    return (
       <div className="card">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Last 60 Days Income</h5>
            </div>

            <CustomPieChart
                data={chartData}
                label="Total Income"
                totalAmount={totalIncome}
                showTextAnchor={true}
                colors={COLORS}
            />
       </div>
    ); 
};

export default RecentIncomeWithChart;