import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

interface SideBarItemProps {
  text: string;
  icon: any;
  href: string;
}

export default function SideBarItem({ text, icon, href }: SideBarItemProps) {
  return (
    <ListItem disablePadding>
      <Link href={href} passHref legacyBehavior>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
