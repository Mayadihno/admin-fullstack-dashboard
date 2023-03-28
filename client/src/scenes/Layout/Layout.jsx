import { Box, useMediaQuery } from "@mui/material";
import Navbar from "Components/Navbar";
import Sidebar from "Components/Sidebar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useGetUserQuery } from "state/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <React.Fragment>
      <Box
        display={isNonMobile ? "flex" : "block"}
        width="100%"
        height={"100%"}
      >
        <Sidebar
          user={data || {}}
          isNonMobile={isNonMobile}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          drawerWidth="250px"
        />
        <Box flexGrow={1}>
          <Navbar
            user={data || {}}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Outlet />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
