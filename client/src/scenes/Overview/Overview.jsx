import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Header from "Components/Header";
import OverviewChart from "Components/OverviewChart";
import React, { useState } from "react";

const Overview = () => {
  const [view, setView] = useState("units");

  return (
    <React.Fragment>
      <Box m={"1.5rem 2.5rem"}>
        <Header
          title="OVERVIEW"
          subtitle="Overview of general revenue and profit"
        />
        <Box height="75vh">
          <FormControl sx={{ mt: "1rem" }}>
            <InputLabel>View</InputLabel>
            <Select
              value={view}
              label="View"
              onChange={(e) => setView(e.target.value)}
            >
              <MenuItem value="sales">Sales</MenuItem>
              <MenuItem value="units">Units</MenuItem>
            </Select>
          </FormControl>
          <OverviewChart view={view} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Overview;
