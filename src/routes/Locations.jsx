// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Component Imports
import EventCard from "../components/EventCard";
import LOCATIONS from "../constants/LocationsList";
import PageTitle from "../components/PageTitle";

export default function Locations() {
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
      <PageTitle title="locations" />
      <Container>
        <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3 }}>
          {LOCATIONS.map((location) => {
            <Grid item key={location.id}>
              <EventCard
                imageSrc={location.image}
                location={location.name}
                date={location.date}
                blurb={location.blurb}
              />
            </Grid>;
          })}
        </Grid>
        {/* {LOCATIONS.map((location) => {
        <EventCard
          key={location.id}
          imageSrc={location.image}
          location={location.name}
          date={location.date}
          blurb={location.blurb}
        />;
      })} */}
        {/* <Stack
          direction="column"
          spacing={2}
          my={6}
          sx={{ justifyContent: "space-between" }}
        >
          {LOCATIONS.map((location) => (
            <EventCard
              key={location.id}
              imageSrc={location.image}
              location={location.name}
              date={location.date}
              blurb={location.blurb}
            />
          ))}
        </Stack> */}
      </Container>
    </Box>
  );
}
