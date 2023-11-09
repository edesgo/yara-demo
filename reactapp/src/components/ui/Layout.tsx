
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

interface MenuItem {
    text: string;
    component: JSX.Element;
  }
  
  interface ResponsiveDrawerProps {
    itemsMenu: MenuItem[];
  }

export default function ResponsiveDrawer({ itemsMenu }: ResponsiveDrawerProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectTitle, setSelectTitle] = React.useState(itemsMenu[0].text);
  const [selectComponent, setSelectComponent] = React.useState(itemsMenu[0].component);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  function OptionSelected(val: string) {
    const idx = itemsMenu.findIndex(item => item.text === val);
    setSelectTitle(itemsMenu[idx].text);
    setSelectComponent(itemsMenu[idx].component);
  }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {itemsMenu.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => OptionSelected(item.text)}>
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {selectTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
      
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
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
              width: drawerWidth
            }
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
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        { selectComponent }
      </Box>
    </Box>
  );
}
