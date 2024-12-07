import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import menuItems from "../data/menuItems.json"; // JSON dosyasından menü öğelerini içe aktar

const drawerWidth = 280;

const Layout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePath, setActivePath] = useState("/"); // Varsayılan rota
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (path?: string) => {
    if (path) {
      setActivePath(path);
      navigate(path); // Menüye tıklandığında rota değiştir
    } else {
      console.log("Logging out...");
      localStorage.removeItem("userToken"); // Örnek: Logout işlemi
      navigate("/login"); // Giriş sayfasına yönlendirme
    }
    setMobileOpen(false); // Mobilde menüyü kapat
  };
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("name");
    localStorage.removeItem("userPassword");
    navigate("/");
  };

  // Menü öğelerini ayır
  const mainMenuItems = menuItems.filter(
    (item) => item.name !== "Settings" && item.name !== "Log out"
  );
  const bottomMenuItems = menuItems.filter(
    (item) => item.name === "Settings" || item.name === "Log out"
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Menü açma fonksiyonu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Menü kapama fonksiyonu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const nameStorage = localStorage.getItem("name");
  const emailStorage = localStorage.getItem("userEmail");
  const drawer = (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <List>
        <ListItem sx={{ pr: 3 }}>
          <ListItemIcon>
            <img src="../icons/logo.svg" width="48px" height="48px" />
          </ListItemIcon>
          <Typography
            sx={{
              color: "#1570EF",
              fontSize: "20px",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            KANBAN
          </Typography>
        </ListItem>
      </List>
      <List sx={{ flexGrow: 1 }}>
        {mainMenuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ p: 1 }}>
            <ListItemButton
              selected={activePath === item.path}
              onClick={() => handleMenuClick(item.path)}
              sx={{
                color: activePath === item.path ? "#0F50AA" : "inherit", // Yazı rengi
                "& .MuiListItemIcon-root img": {
                  filter:
                    activePath === item.path
                      ? "invert(34%) sepia(59%) saturate(444%) hue-rotate(194deg) brightness(94%) contrast(88%)"
                      : "none", // İkon rengi
                },
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
                primary={item.name}
                sx={{
                  color: activePath === item.path ? "#0F50AA" : "inherit", // Yazı rengi
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        {bottomMenuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ p: 1 }}>
            <ListItemButton
              selected={activePath === item.path}
              onClick={() =>
                item.name === "Log out"
                  ? handleLogout()
                  : handleMenuClick(item.path)
              }
              sx={{
                color: activePath === item.path ? "#0F50AA" : "inherit", // Yazı rengi
                "& .MuiListItemIcon-root img": {
                  filter:
                    activePath === item.path
                      ? "invert(34%) sepia(59%) saturate(444%) hue-rotate(194deg) brightness(94%) contrast(88%)"
                      : "none", // İkon rengi
                },
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
                primary={item.name}
                sx={{
                  color: activePath === item.path ? "#0F50AA" : "inherit", // Yazı rengi
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <img src="../../icons/logo.svg" alt="Menu Icon" />
            <Typography
              sx={{
                color: "#1570EF",
                fontSize: "14px",
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              KANBAN
            </Typography>
          </IconButton>
          {/* Search Bar */}
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: 400,
              padding: "4px 8px",
              borderRadius: "8px",
              boxShadow: "none",
              border: "1px solid #E0E0E0",
            }}
          >
            <img src="../icons/search.svg" />
            <InputBase
              placeholder="Search product, supplier, order"
              sx={{
                ml: 1,
                flex: 1,
                fontSize: "14px",
                color: "#6B7280",
              }}
            />
          </Paper>

          {/* Right Side Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Notification Icon */}
            <img src="../icons/notification.svg" />
            {/* User Avatar */}
            <Avatar
              src="../icons/Avatar.svg"
              alt="User"
              onClick={handleMenuOpen}
              sx={{ width: 36, height: 36 }}
            />
            {/* Menü */}
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  p: 1,
                },
              }}
            >
              {/* localStorage'dan gelen bilgileri göster */}
              <MenuItem>
                <Typography variant="body1" fontWeight="bold">
                  {nameStorage || emailStorage || "No User Info"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#D0D3D9",
          minHeight: "100vh", // Tam ekran yüksekliği
        }}
      >
        <Toolbar />
        <Outlet /> {/* Sayfaların içeriği burada gösterilecek */}
      </Box>
    </Box>
  );
};

export default Layout;
