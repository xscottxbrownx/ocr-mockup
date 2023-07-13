// React Router Imports
import { Link as RouterLink } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";

export default function CallToAction() {
  return (
    <Box
      sx={{
        minHeight: "35rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        padding: "3rem",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" color="primary" mb={4}>
          MUDDY ADVENTURE AWAITS
          <br />
          AT RUGGED MANIAC 2023
        </Typography>
        <Typography variant="body1" color="white" mb={8}>
          Rugged Maniac returns for 2023 with our muddiest year yet!
          <br />
          We&apos;re renewing our muddy vows, going back to the nitty gritty
          basics, and shouting our love for mud from the mountain tops.
          <br />
          In fact, we&apos;re unleashing both the World&apos;s Largest Mud Pit
          and a “Muddy Back Guarantee” to ensure the most epic day of muddy
          glory.
          <br />
          You won&apos;t want to miss this!
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/Locations"
          startIcon={<LocationOnOutlinedIcon />}
        >
          FIND AN EVENT
        </Button>
      </Container>
    </Box>
  );
}
