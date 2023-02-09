import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

export default function DownloadAccountError() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Alert severity="error" sx={{ width: "fit-content" }}>
        Failed to download account data. Try realoading the page
      </Alert>
    </Box>
  );
}
