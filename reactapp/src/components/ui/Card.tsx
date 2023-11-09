import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
interface cardProps {
  title: string;
  message: string;
  img: string;
}

export default function MediaControlCard(props: cardProps) {
  const { title, message, img } = props;
  return (
    <Card>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <CardMedia component="img" sx={{ width: 110 }} image={img} />
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" component="div">
                {title}
              </Typography>
              <Typography
                component="div"
                variant="h5"
                style={{ color: "#19857b" }}
              >
                {message}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
