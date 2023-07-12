// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";

export default function Newsletter() {
  return (
    <Box
      sx={{
        backgroundColor: "#BA2F1F",
        minHeight: "10rem",
        width: "100vw",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" color="#DFDFDF">
              STAY CONNECTED
            </Typography>
            <Typography variant="body1" color="#DFDFDF">
              *By entering my email address, I agree to the terms and policy
            </Typography>
          </Box>

          <TextField
            type="email"
            variant="outlined"
            label="Enter Email"
            // helperText="*By entering my email address, I agree to the terms and policy"
            color="secondary"
            margin="normal"
            sx={{
              width: "400px",
              // backgroundColor: "#5D1810",
              // border: "2px solid",
              // borderColor: "black",
            }}
          />

          <Button
            variant="contained"
            size="large"
            startIcon={<ForwardToInboxOutlinedIcon />}
            sx={{
              borderRadius: "500px",
              width: "200px",
              backgroundColor: "#DFDFDF",
              color: "black",
              // px: "2rem",
            }}
          >
            SUBMIT
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
