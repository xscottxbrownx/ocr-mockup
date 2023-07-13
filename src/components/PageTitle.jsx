// React Imports
import PropTypes from "prop-types";
// Material UI Imports
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function PageTitle({ title }) {
  return (
    <Container>
      <Typography variant="h3" component="h2" color="secondary">
        {title.toUpperCase()}
      </Typography>
      <Divider sx={{ borderBottomWidth: 4, bgcolor: "black", mt: 1 }} />
    </Container>
  );
}

PageTitle.propTypes = { title: PropTypes.string };
