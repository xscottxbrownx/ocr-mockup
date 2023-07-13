// Material UI Imports
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// Material Image Imports
import Image from "mui-image";
import PropTypes from "prop-types";

export default function ObstacleCard({ name, imageSrc, blurb }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component={Image}
          height="140"
          image={imageSrc}
          alt={`${name} Obstacle`}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="secondary"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            {blurb}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ObstacleCard.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  blurb: PropTypes.string,
};
