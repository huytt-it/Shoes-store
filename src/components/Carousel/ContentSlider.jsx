import React from "react";
import useStyles from "./useStyles";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

import { Grid, Container } from "@material-ui/core";
export default function ContentSlider({ isCurrent, imageQR, video }) {
  var classes = useStyles();
  return (
    <div
      className={classes.cutomeIMGSlider}
      style={{
        backgroundImage:
          "url(https://cdn.shopify.com/s/files/1/0248/5823/0872/files/home2-slide2_1661cc9a-9564-44d1-99d8-68b107a2bc58.jpg?v=1571481741)",
      }}
    >
      <Container className={classes.containerIframeQr}>
        <div className={classes.ifameclass}>
          <iframe
            width="920"
            height="545"
            src={video}
          ></iframe>
        </div>

        <Container xs={12}>
          <div className={classes.qrClass}>
          <img src={imageQR} alt="Qr"/>

          </div>
        </Container>
      </Container>
    </div>
  );
}
