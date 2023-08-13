/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";


import { HiOutlineBars3 } from "react-icons/hi2";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [

    {
      text: "About",
      id: "about",
      icon: <InfoIcon />,
    },
    {
      text: "Problems",
      id: "problems",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      id: "contact",
      icon: <PhoneRoundedIcon />,
    },
 
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        {/* <img src={Logo} alt="" /> */}
        <h1>TECH</h1>
      </div>
      <div className="navbar-links-container">
        <a href="/#about">About</a>
        <a href="/#problems">Problems</a>
        <a href="/#contact">Contact</a>

        <button className="primary-button"  ><a href="/#testimonial" style={{color:"black",margin:"auto"}}>Register Now</a></button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={`#${item.id}`}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;