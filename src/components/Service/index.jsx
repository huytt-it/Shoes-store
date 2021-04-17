import React from 'react'
import {
    Grid,
    Container,
} from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import HeadsetIcon from '@material-ui/icons/Headset';
import useStyles from "./useStyles";

export default function Service() {
    var classes = useStyles();

    return (
        <div className={classes.mainService}>
            <Container className={classes.containerService}>
                <Grid container spacing={2} className={classes.listCardService} >
                    <Grid item xs={3} >
                        <div className={classes.card}>
                            <div className={classes.icon}>
                                <FavoriteBorderIcon style={{ fontSize: 47, height: "100%", objectFit: "cover" }} />

                            </div>
                            <div className="Text">
                                <h4 className={classes.serviceTitle}>Great Value</h4>
                                <p className={classes.serviecDesc}>Nunc id ante quis tellus faucibus dictum in eget metus.</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3} >
                        <div className={classes.card}>
                            <div className={classes.icon}>
                                <LocalShippingIcon style={{ fontSize: 47, height: "100%", objectFit: "cover" }} />

                            </div>
                            <div className="Text">
                                <h4 className={classes.serviceTitle}>Worldwide Delivery</h4>
                                <p className={classes.serviecDesc}>Nunc id ante quis tellus faucibus dictum in eget metus.</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3} >
                        <div className={classes.card}>
                            <div className={classes.icon}>
                                <CreditCardIcon style={{ fontSize: 47, height: "100%", objectFit: "cover" }} />

                            </div>
                            <div className="Text">
                                <h4 className={classes.serviceTitle}>Safe Payment</h4>
                                <p className={classes.serviecDesc}>Nunc id ante quis tellus faucibus dictum in eget metus.</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={3} >
                        <div className={classes.card}>
                            <div className={classes.icon}>
                                <HeadsetIcon style={{ fontSize: 47, height: "100%", objectFit: "cover" }} />

                            </div>
                            <div className="Text">
                                <h4 className={classes.serviceTitle}>24/7 Help Center</h4>
                                <p className={classes.serviecDesc}>Nunc id ante quis tellus faucibus dictum in eget metus.</p>
                            </div>
                        </div>

                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}
