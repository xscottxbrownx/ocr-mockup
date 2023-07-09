// Material UI Imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// Material Image Imports
import Image from "mui-image";

export default function EventCard({ imageSrc, location, date, blurb }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component={Image}
          height="140"
          image={imageSrc}
          alt={`${location} Event`}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="secondary"
          >
            {location}
          </Typography>
          <Chip label={date} color="primary" />
          <Typography variant="body2" color="text.secondary" mt={1}>
            {blurb}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
