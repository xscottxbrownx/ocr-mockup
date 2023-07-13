// React Imports
import { useState } from "react";
import PropTypes from "prop-types";
// React Router Imports
import { NavLink } from "react-router-dom";
// Material UI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// Component Imports
import ROUTES from "../constants/NavlinkList";

export default function DrawerAppBar({ window }) {
  // Drawer State
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", marginTop: "3rem" }}
    >
      <NavLink
        to="/Home"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "red" : "black",
            textDecoration: "none",
          };
        }}
      >
        <Typography variant="h6">RACE LOGO</Typography>
      </NavLink>
      <Divider />
      <List>
        {ROUTES.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <NavLink
              key={item}
              to={`/${item}`}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "red" : "black",
                  textDecoration: "none",
                };
              }}
            >
              {item}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <NavLink
            to="/Home"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Typography variant="h6" component="div">
              RACE LOGO
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {ROUTES.map((item) => {
              return (
                <NavLink
                  key={item}
                  to={`/${item}`}
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "black" : "white",
                      textDecoration: "none",
                      margin: "0 10px",
                    };
                  }}
                >
                  {item}
                </NavLink>
              );
            })}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = { window: PropTypes.object };
