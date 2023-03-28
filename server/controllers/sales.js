import overAllStat from "../models/overAllStat.js";

export const getSales = async (req, res) => {
  try {
    const overAllStats = await overAllStat.find();
    res.status(200).json(overAllStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
