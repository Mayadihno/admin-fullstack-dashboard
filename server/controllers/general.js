import overAllStat from "../models/overAllStat.js";
import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserDashboard = async (req, res) => {
  try {
    const currentYear = "2021";
    const currentMonth = "November";
    const currentDay = "2021-11-15";

    //get recent Transactions
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdAt: -1 }); //-1 will sort it backward

    //get overall stats
    const overallstat = await overAllStat.find({ year: currentYear });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallstat[0];

    const thisMonthStats = overallstat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });
    const todayStat = overallstat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStat,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
