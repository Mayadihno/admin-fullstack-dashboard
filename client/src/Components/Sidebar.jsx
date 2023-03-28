import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const image =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const navItems = [
  {
    id: 1,
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    text: "Client Facing",
    icon: null,
  },
  {
    id: 3,
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    id: 4,
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    id: 5,
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    id: 6,
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    id: 7,
    text: "Sales",
    icon: null,
  },
  {
    id: 8,
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    id: 9,
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    id: 10,
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    id: 11,
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    id: 12,
    text: "Management",
    icon: null,
  },
  {
    id: 13,
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    id: 14,
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  user,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
  drawerWidth,
}) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <React.Fragment>
      <Box component={"nav"}>
        {isSidebarOpen && (
          <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant="persistent"
            anchor="left"
            sx={{
              width: drawerWidth,
              "& .MuiDrawer-paper": {
                color: theme.palette.secondary[200],
                backgroundColor: theme.palette.alt,
                boxSizing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth,
              },
            }}
          >
            <Box width={"100%"}>
              <Box m={"1.5rem 2rem 2rem 3rem"}>
                <FlexBetween color={theme.palette.secondary.main}>
                  <Box display="flex" alignItems={"center"} gap="0.5rem">
                    <Typography variant="h4" fontWeight={"bold"}>
                      ECOMVISION
                    </Typography>
                  </Box>
                  {!isNonMobile && (
                    <IconButton
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                      <ChevronLeft />
                    </IconButton>
                  )}
                </FlexBetween>
              </Box>
              <List>
                {navItems.map(({ text, icon, id }) => {
                  if (!icon) {
                    return (
                      <Typography key={id} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                        {text}
                      </Typography>
                    );
                  }
                  const lcText = text.toLowerCase();
                  return (
                    <ListItem key={id} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate(`${lcText}`);
                          setActive(lcText);
                        }}
                        sx={{
                          backgroundColor:
                            active === lcText
                              ? theme.palette.secondary[300]
                              : "transparent",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[100],
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ml: "2rem",
                            color:
                              active === lcText
                                ? theme.palette.primary[600]
                                : theme.palette.secondary[200],
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        {active === lcText && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
            <Box position="absolute" bottom="2rem">
              <Divider />
              <FlexBetween
                textTransform={"none"}
                gap="1rem"
                m={"1.5rem 2rem 0 2rem"}
              >
                <Box
                  component={"img"}
                  alt="Profile"
                  height="40px"
                  src={image}
                  width={"40px"}
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                />
                <Box textAlign={"left"}>
                  <Typography
                    fontWeight={"bold"}
                    fontSize={"0.9rem"}
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    fontSize={"0.8rem"}
                    sx={{ color: theme.palette.secondary[200] }}
                  >
                    {user.occupation}
                  </Typography>
                </Box>
                <SettingsOutlined
                  sx={{
                    color: theme.palette.secondary[300],
                    fontSize: "25px",
                  }}
                />
              </FlexBetween>
            </Box>
          </Drawer>
        )}
      </Box>
    </React.Fragment>
  );
};

export default Sidebar;
