import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ResponsiveDialog from "../ResponsiveDialog/ResponsiveDialog";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 400,
    width: "100%",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
  },
  cardActionArea: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "flex-start"
  },
  cardImage: {
    marginTop: theme.spacing(2),
    objectFit: "contain"
  }
}));

const ProductCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container alignContent='center' alignItems='flex-start' spacing={7} >
      <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
        <Card className={classes.card} raised>
          <CardActionArea
            className={classes.cardActionArea}
          >
            <CardMedia
              component="img"
              alt={"product.name"}
              height="160"
              image={"product.imageURL"}
              title={"name"}
              className={classes.cardImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" align="center">
                {"name"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {"shortDescription"}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ResponsiveDialog />
            <Button size="small" color="primary">
              {"acquired"}
            </Button>
            <Button size="small" color="primary" >
              {"finish in"}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid >
  );
};

export default ProductCard;