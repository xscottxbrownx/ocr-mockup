// Material UI Imports
import { Box, Container, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// React Icons Imports
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { IconContext } from "react-icons";
// Component Imports
import ROUTES from "../constants/NavlinkList";

export default function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <footer
      style={{
        // minHeight: "20rem",
        width: "100vw",
        backgroundColor: "black",
        textAlign: "center",
        paddingTop: "3.5rem",
        paddingBottom: "2rem",
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={6}
        >
          <Box sx={{ display: "flex", gap: "20px" }}>
            <IconContext.Provider value={{ color: "#DFDFDF", size: "2rem" }}>
              <BiLogoInstagramAlt style={{ cursor: "pointer" }} />
              <BiLogoFacebook style={{ cursor: "pointer" }} />
              <BiLogoTwitter style={{ cursor: "pointer" }} />
              <BiLogoYoutube style={{ cursor: "pointer" }} />
            </IconContext.Provider>
          </Box>
          <Typography variant="h6" component="div" color="#DFDFDF">
            RACE LOGO
          </Typography>
        </Stack>

        <Stack
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          mb={6}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: isSmallScreen ? "3.5rem" : null,
            }}
          >
            <Typography variant="h5" color="#BA2F1F">
              Links
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              {ROUTES.map((item) => (
                <Typography
                  key={item}
                  color="#DFDFDF"
                  sx={{ marginLeft: item === ROUTES[0] ? null : "2rem" }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" color="#BA2F1F">
              Sponsorship Opportunities
            </Typography>
            <Typography color="#DFDFDF">
              Interested in sponsoring a race location, or multiple?
            </Typography>
            <Typography color="#DFDFDF">
              Wanting to advertise at a location?
            </Typography>
            <Typography color="#DFDFDF">
              Contact us{" "}
              <span style={{ color: "#BA2F1F", cursor: "pointer" }}>here</span>.
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="#707070">
            © 2023 Race Name Inc.
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="body2"
            color="#707070"
            sx={{ cursor: "pointer" }}
          >
            Privacy Policy
          </Typography>
          <Typography variant="body2" color="#707070" sx={{ mx: "0.5rem" }}>
            |
          </Typography>
          <Typography
            variant="body2"
            color="#707070"
            sx={{ cursor: "pointer" }}
          >
            Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </footer>
  );
}
