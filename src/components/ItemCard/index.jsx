import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import useStyles from "./useStyles";
import product from "../../img/Shoes_1.png";
import bg_nike from "../../img/bg_item.jpg";

export default function ItemCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image={bg_nike}
          title="Contemplative Reptile"
        />
        <div className={classes.areaItem}>
          <img className={classes.cusIMG} src={product} alt="" />
        </div>
      </CardActionArea>
      <CardContent className={classes.contentArea}>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          className={classes.brand}
        >
          Nike
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

      <CardActions className={classes.acCard}>
        <Button variant="contained" className={classes.cusButton}>
          999$ - ADD TO CARD
        </Button>
      </CardActions>
    </Card>
  );
}
