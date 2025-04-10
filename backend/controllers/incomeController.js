const User = require("../models/User");
const Income = require("../models/Income");

// Add Income Source
exports.addIncome = async (req, res) => {
    const userId = req.user.id;

    try {
        const { icon, source, amount, date } = req.body;

        
        if (!source || !amount || !date) {
            return res.status(400).json({ message: "All fields are required" }); 
        }

        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });

        await newIncome.save();
        res.status(200).json(newIncome);
    } catch (error) {
        console.error("Error adding income:", error); 
        res.status(500).json({ message: "Server Error" });
    }
};

// Get All Income Source 
exports.getAllIncome = async (req, res) => {
    const userId = req.user.id;

    try {
        const income = await Income.find({ userId }).sort({ date: -1 }); // sorted by latest date
        res.status(200).json(income); // explicitly set status code (optional but good practice)
    } catch (error) {
        console.error("Error fetching income:", error); 
        res.status(500).json({ message: "Server Error" });
    }
};

// Delete Income Source 
exports.deleteIncome = async (req, res) => {
    
};

// Download Income as Excel 
exports.downloadIncomeExcel = async (req, res) => {
    
};
