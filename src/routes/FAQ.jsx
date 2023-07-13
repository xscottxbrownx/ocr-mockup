// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// Component Imports
import PageTitle from "../components/PageTitle";

export default function FAQ() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "tertiary.main",
        textAlign: "center",
        paddingTop: "7rem",
      }}
    >
      <PageTitle title="FAQ" />
      <Container>
        <Typography variant="h4">STUFF</Typography>
      </Container>
    </Box>
  );
}
