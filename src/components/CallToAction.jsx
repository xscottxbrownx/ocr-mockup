// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";

export default function CallToAction() {
  return (
    <Box
      sx={{
        minHeight: "20rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        padding: "3rem 15rem",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" component="h1" color="primary" mb={4}>
        MUDDY ADVENTURE AWAITS AT RUGGED MANIAC 2023
      </Typography>
      <Typography variant="body1" color="white" mb={8}>
        Rugged Maniac returns for 2023 with our muddiest year yet! We’re
        renewing our muddy vows, going back to the nitty gritty basics, and
        shouting our love for mud from the mountain tops. In fact, we’re
        unleashing both the World’s Largest Mud Pit and a “Muddy Back Guarantee”
        to ensure the most epic day of muddy glory. You won’t want to miss this!
      </Typography>
      <Button
        variant="contained"
        size="large"
        startIcon={<LocationOnOutlinedIcon />}
      >
        FIND AN EVENT
      </Button>
    </Box>
  );
}
