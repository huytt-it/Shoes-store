import React from 'react'
import useStyles from "./useStyles";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

import {
    Grid,
    Container,
} from "@material-ui/core";
export default function ContentSlider({isCurrent}) {
    var classes = useStyles();
    
    return (
        <div className={classes.cutomeIMGSlider} style={{ backgroundImage: "url(https://cdn.shopify.com/s/files/1/0248/5823/0872/files/home2-slide2_1661cc9a-9564-44d1-99d8-68b107a2bc58.jpg?v=1571481741)" }} >

            <Grid className={classes.containerText} >
                <Container xs={12}>
                    <div className={classes.showText}>
                        <h1 className={isCurrent?classes.slideTitle:classes.hiddenTitle}>New</h1>
                        <h2 className={isCurrent?classes.slideSubTitle:classes.hiddenSubTitle}> Running Sneakers <br /> <span>Men's like plex</span> </h2>
                        <QRCode value="hey" size={150} includeMargin={true} />;
                    </div>
                  
                </Container>              
            </Grid>                   
        </div>
    )
}
