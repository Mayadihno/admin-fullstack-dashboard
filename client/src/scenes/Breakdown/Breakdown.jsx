import { Box } from "@mui/material";
import BreakdownChart from "Components/BreakdownChart";
import Header from "Components/Header";
import React from "react";

const Breakdown = () => {
  return (
    <React.Fragment>
      <Box m={"1.5rem 2.5rem"}>
        <Header title="BREAKDOWN" subtitle={"Breakdown of sales by category"} />
        <Box mt={"40px "} height="75vh">
          <BreakdownChart />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Breakdown;
