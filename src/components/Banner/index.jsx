import React from 'react'
import {
    Grid,
    Container,
} from "@material-ui/core";
import useStyles from "./useStyles";


export default function Banner() {
    var classes = useStyles();
    return (
        <div className={classes.boxBanner}>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <div className="Banner1">
                            <a href="">
                                <img className={classes.customIMG} src="//cdn.shopify.com/s/files/1/0248/5823/0872/files/banner_1.3_69f40bca-477f-40bb-8874-c6ce572a4db6.jpg?v=1570252471  " alt="" />
                            </a>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className="Banner1">
                            <a href="">
                                <img className={classes.customIMG} src="//cdn.shopify.com/s/files/1/0248/5823/0872/files/banner_01.png?v=1571480855" alt="" />
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}
