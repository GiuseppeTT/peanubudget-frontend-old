import SideBarItem from "@/components/SideBarItem";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CategoryIcon from "@mui/icons-material/Category";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

export default function SideBar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <SideBarItem
            text="Transactions"
            icon={<PaidIcon />}
            href="/transaction"
          />
          <SideBarItem
            text="Categories"
            icon={<CategoryIcon />}
            href="/category"
          />
          <SideBarItem text="Payees" icon={<PersonIcon />} href="/payee" />
          <SideBarItem
            text="Accounts"
            icon={<AccountBalanceIcon />}
            href="/account"
          />
        </List>
      </Box>
    </Drawer>
  );
}
