// Material UI Imports
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
// Material UI Imports
import Stack from "@mui/material/Stack";
// Material Image Imports
import Image from "mui-image";

export default function CallToAction2() {
  return (
    <Box
      sx={{
        minHeight: "40rem",
        width: "100vw",
        padding: "3rem 10rem",
        textAlign: "center",
      }}
    >
      <Box>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={4}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src="my-image.png" width={300} showLoading shift="left" />
            <Typography variant="h4" component="h3" color="primary" mt={2}>
              CHOOSE YOUR CHALLENGE
            </Typography>
            <Typography variant="h5" component="p" mt={2} textAlign="center">
              Getting Rugged? Challenge accepted! The course is designed so you
              can choose your own destiny and difficulty &#8208; whether
              that&apos;s traversing over every obstacle at blistering speeds or
              skipping one when you need to &#8208; victory awaits at the finish
              line no matter what.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "50%",
            }}
          >
            <Image src="my-image.png" width={300} showLoading shift="left" />
            <Typography variant="h4" component="h3" color="primary" mt={2}>
              MUDDY BACK GUARANTEE
            </Typography>
            <Typography variant="h5" component="p" mt={2} textAlign="center">
              This year, we are offering a Muddy Back Guarantee – where we
              guarantee everyone who participates will get muddier than any
              Rugged Maniac event they&apos;ve ever attended! If you don&apos;t
              get muddy, we&apos;ll get you covered. Let our staff know and
              you&apos;ll be automatically upgraded to Rugged Maniac X on race
              day (meaning you can run the event again, and track through even
              more mud!).
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
