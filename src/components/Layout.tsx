import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import menuData from "../data/menuItems.json"; // Import the menuItems JSON file

const drawerWidth = 280;

const Layout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  // Handle avatar menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  // Split menu items into top and bottom sections
  const menuItems = menuData.filter(
    (item) => item.name !== "Settings" && item.name !== "Log out"
  );
  const bottomItems = menuData.filter(
    (item) => item.name === "Settings" || item.name === "Log out"
  );

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleMenuClick = (path: string, isLogout = false) => {
    navigate(path);
  };
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("name");
    localStorage.removeItem("userPassword");
    navigate("/");
  };
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("userEmail");

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        px: 2,
      }}
    >
      {/* Top Menu Items */}
      <Box>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img src="/icons/Logo.svg" alt="Logo" width="40" />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#1570EF" }}
            >
              KANBAN
            </Typography>
          </Box>
        </Toolbar>

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => handleMenuClick(item.path)}>
                <ListItemIcon>
                  <img
                    src={item.icon}
                    alt={item.name}
                    style={{ width: 24, height: 24 }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#5D6679", fontSize: "16px" }}
                  primary={item.name}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Menu Items */}
      <Box>
        <List>
          {bottomItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() =>
                  item.name === "Log out" ? handleLogout() : navigate(item.path)
                }
                sx={{
                  color: "inherit",
                }}
              >
                <ListItemIcon>
                  <img
                    src={item.icon}
                    alt={item.name}
                    style={{ width: 24, height: 24 }}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#5D6679", fontSize: "16px" }}
                  primary={item.name}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <img src="/icons/Logo.svg" alt="Menu Icon" />
            </IconButton>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: { xs: "250px", sm: "400px" },
                padding: "4px 8px",
                borderRadius: "8px",
                boxShadow: "none",
                border: "1px solid #E0E0E0",
              }}
            >
              <img src="/icons/search.svg" alt="Search Icon" />
              <InputBase
                placeholder="Search product, supplier, order"
                sx={{ ml: 1, flex: 1, fontSize: "14px", color: "#6B7280" }}
              />
            </Paper>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img src="/icons/notification.svg" alt="Notification Icon" />
            <Avatar
              onClick={handleMenuOpen}
              sx={{ cursor: "pointer" }}
              src="../../icons/Avatar.svg"
              alt="User Avatar"
            />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: { mt: 1, p: 1 },
              }}
            >
              <MenuItem>
                <Typography variant="body1" fontWeight="bold">
                  {name || email || "No User Info"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="menu items"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#F0F1F3",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
