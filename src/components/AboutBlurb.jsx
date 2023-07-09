// React Router Imports
import { Link as RouterLink } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// Material Image Imports
import Image from "mui-image";

export default function AboutBlurb() {
  return (
    <Box
      sx={{
        minHeight: "30rem",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "tertiary.main",
        padding: "3rem 10rem",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography variant="h3" component="h2" color="secondary">
          WHAT IS RUGGED MANIAC?
        </Typography>
        <Divider sx={{ borderBottomWidth: 4, bgcolor: "black", mt: 1 }} />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          mt={6}
        >
          <Box>
            <Image src="my-image.png" width={500} showLoading shift="left" />
          </Box>
          <Box>
            <Typography variant="h4" component="h3" color="primary">
              25+ EPIC OBSTACLES
            </Typography>
            <Typography variant="h5" component="p" mb={4} mt={2}>
              Simply put, Rugged Maniac is the greatest obstacle course race
              ever concocted. With the most obstacles per mile of any race on
              the planet, you and your friends will have more fun than kids on a
              playground. And the best part? Anyone can participate, from first
              time runners to seasoned athletes.
            </Typography>
            {/* <Link
              variant="h5"
              component={RouterLink}
              to="/Obstacles"
              style={{
                textDecoration: "none",
                color: "primary",
              }}
            >
              Check out our 25+ obstacle arsenal.
            </Link> */}
            <Button
              variant="contained"
              component={RouterLink}
              to="/Obstacles"
              size="large"
              startIcon={<VisibilityOutlinedIcon />}
            >
              VIEW THE OBSTACLES
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
