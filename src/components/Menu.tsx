import { Box, Divider, IconButton, Link, Drawer, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export type MenuItemType = {
    name: string,
    url: string
}

export const MobileMenu = ({menuItems}: {menuItems: MenuItemType[]}) => {
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open: boolean) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event.type === "keydown" && event.shiftKey) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };
  const toggleDrawerClick = (open: boolean) => (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (event.type === "keydown" && event.shiftKey) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };
    return (
        <>
        <Box ml='auto'>
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
                mr: 2,
                display: {
                    xs: "block",
                }
            }}
      >
        <MenuIcon />
      </IconButton>

      {/* The outside of the drawer */}
      <Drawer
        //from which side the drawer slides in
        anchor="right"
        //if open is true --> drawer is shown
        open={open}
        //function that is called when the drawer should close
        onClose={toggleDrawer(false)}
        //function that is called when the drawer should open
        //onOpen={toggleDrawer(true)}
      >
        {/* The inside of the drawer */}
        <Box
          sx={{
            p: 2,
            height: 1
          }}
        >
          {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
          <IconButton sx={{ mb: 2 }}>
            <CloseIcon onClick={toggleDrawerClick(false)} />
          </IconButton>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
          {menuItems.map(m => (
            <ListItemButton  key={m.url}>
                <Link href={m.url} underline='none' color='inherit'>
                    <ListItemText primary={m.name} />
                </Link>
            </ListItemButton>
            ))}

          </Box>
          </Box>
          </Drawer>
          </Box>
          </>
    )
}

export const DesktopMenu = ({menuItems}: {menuItems: MenuItemType[]}) => {
    return <>
                {menuItems.map(m => (
                    <MenuItem key={m.url}>
                        <Link href={m.url} underline='none' color='inherit'>
                            <Typography sx={{textTransform: 'uppercase'}}>{m.name}</Typography>
                        </Link>
                    </MenuItem>
            ))}

    </>
}

