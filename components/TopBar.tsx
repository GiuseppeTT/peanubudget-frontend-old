import GitHubIcon from "@mui/icons-material/GitHub";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const handleClick = () => window.open(process.env.NEXT_PUBLIC_SOURCE_CODE_LINK);

export default function TopBar() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          PeanuBudget
        </Typography>
        <IconButton onClick={handleClick} color="inherit" sx={{ padding: 0 }}>
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
