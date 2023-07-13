// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
// Component Imports
import PageTitle from "../components/PageTitle";
import OBSTACLES from "../constants/ObstacleList";
import ObstacleCard from "../components/ObstacleCard";

export default function Obstacles() {
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
      <PageTitle title="obstacles" />
      <Container>
        <Stack
          direction="row"
          spacing={2}
          my={6}
          sx={{ justifyContent: "space-between" }}
        >
          {OBSTACLES.map((obstacle) => {
            <ObstacleCard
              key={obstacle.id}
              name={obstacle.name}
              imageSrc={obstacle.image}
              blurb={obstacle.blurb}
            />;
          })}
        </Stack>
      </Container>
    </Box>
  );
}
