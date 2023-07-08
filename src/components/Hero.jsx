import Box from "@mui/material/Box";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "tertiary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>HERO SECTION</h2>
    </Box>
  );
}
