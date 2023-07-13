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
import LOCATIONS from "../constants/LocationsList";

export default function UpcomingEvents() {
  const firstThreeEvents = LOCATIONS.slice(0, Math.min(LOCATIONS.length, 3));
  return (
    <Box
      sx={{
        minHeight: "35rem",
        width: "100vw",
        padding: "3rem",
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
          {firstThreeEvents.map((location) => {
            const { id, image, name, date, blurb } = location;
            return (
              <EventCard
                key={id}
                imageSrc={image}
                location={name}
                date={date}
                blurb={blurb}
              />
            );
          })}
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
