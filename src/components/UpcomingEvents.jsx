// React Router Imports
import { Link as RouterLink } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Component Imports
import EventCard from "./EventCard";

export default function UpcomingEvents() {
  return (
    <Box
      sx={{
        minHeight: "40rem",
        width: "100vw",
        padding: "3rem 10rem",
        textAlign: "center",
        backgroundColor: "tertiary.main",
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" color="secondary">
          UPCOMING EVENTS
        </Typography>
        <Divider sx={{ borderBottomWidth: 4, bgcolor: "black", mt: 1 }} />
        <Stack
          direction="row"
          spacing={2}
          my={6}
          sx={{ justifyContent: "space-between" }}
        >
          <EventCard
            imageSrc="my-image.png"
            location="Portland"
            date="July 15"
            blurb="The city of endless nicknames - PDX, Rose City, Rip City, Bridge City, Stumptown..."
          />
          <EventCard
            imageSrc="my-image.png"
            location="Seattle"
            date="July 29"
            blurb="The mud is thicker here in this city along the Puget Sound."
          />
          <EventCard
            imageSrc="my-image.png"
            location="Vancouver, BC"
            date="August 12"
            blurb="Come join us across the border!"
          />
          {/* <Button
            variant="contained"
            component={RouterLink}
            to="/Locations"
            endIcon={<ChevronRightOutlinedIcon />}
          >
            VIEW ALL EVENTS
          </Button> */}
        </Stack>
        <Button
          variant="contained"
          component={RouterLink}
          to="/Locations"
          endIcon={<ChevronRightOutlinedIcon />}
        >
          VIEW ALL EVENTS
        </Button>
      </Container>
    </Box>
  );
}
