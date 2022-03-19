import React from "react";
import { Grid, Container } from "@material-ui/core";
import Style from "./footer.module.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
export default function Footer() {
  return (
    <footer className={Style.footerArea}>
      <div className="footerMenu">
        <Container>
          <Grid container>
            <Grid item xs={3}>
              <div className={Style.itemWidget}>
                <h5>CUSTOM LINKS</h5>
                <ul className={Style.usefullLinks}>
                  <li>
                    <a href="/#">Delivery</a>
                  </li>
                  <li>
                    <a href="/#">Legal Notice</a>
                  </li>
                  <li>
                    <a href="/#">About us</a>
                  </li>
                  <li>
                    <a href="/#">Secure payment</a>
                  </li>
                  <li>
                    <a href="/#">Contact us</a>
                  </li>
                  <li>
                    <a href="/#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div className={Style.itemWidget}>
                <h5>PRODUCTS</h5>
                <ul className={Style.usefullLinks}>
                  <li>
                    <a href="/#">Personal info</a>
                  </li>
                  <li>
                    <a href="/#">Orders</a>
                  </li>
                  <li>
                    <a href="/#">Credit slips</a>
                  </li>
                  <li>
                    <a href="/#">Addresses</a>
                  </li>
                  <li>
                    <a href="/#">Stores</a>
                  </li>
                  <li>
                    <a href="/#">FAQ</a>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div className={Style.itemWidget}>
                <h5>OUR COMPANY</h5>
                <ul className={Style.usefullLinks}>
                  <li>
                    <a href="/#">Delivery</a>
                  </li>
                  <li>
                    <a href="/#">Legal Notice</a>
                  </li>
                  <li>
                    <a href="/#">About us</a>
                  </li>
                  <li>
                    <a href="/#">Secure payment</a>
                  </li>
                  <li>
                    <a href="/#">Contact us</a>
                  </li>
                  <li>
                    <a href="/#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div className={Style.itemWidget}>
                <h5>YOUR ACCOUNT</h5>
                <ul className={Style.usefullLinks}>
                  <li>
                    <a href="/#">Delivery</a>
                  </li>
                  <li>
                    <a href="/#">Legal Notice</a>
                  </li>
                  <li>
                    <a href="/#">About us</a>
                  </li>
                  <li>
                    <a href="/#">Secure payment</a>
                  </li>
                  <li>
                    <a href="/#">Contact us</a>
                  </li>
                  <li>
                    <a href="/#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={Style.footerAddress}>
        <Container>
          <Grid container>
            <Grid item xs={6}>
              <div className={Style.addressBlock}>
                <div className={Style.footerLogo}>
                  <a href="/#">
                    <img
                      src="//cdn.shopify.com/s/files/1/0248/5823/0872/files/logo.png?v=1562839006"
                      alt=""
                    />
                  </a>
                </div>
                <address>
                  <LocationOnIcon style={{ color: "#87b106" }} />
                  <p>
                    <span> ADDRESS : </span>
                    No 40 Baria Sreet 15/2 NewYork City, NY, United States.
                  </p>
                </address>
              </div>
            </Grid>

            <Grid item xs={3}>
              <address className={Style.blockAddress}>
                <LocationOnIcon style={{ color: "#87b106" }} />
                <p>
                  <span> EMAIL : </span>
                  demo@gmail.com
                </p>
              </address>
            </Grid>

            <Grid item xs={3}>
              <address className={Style.blockAddress}>
                <LocationOnIcon style={{ color: "#87b106" }} />
                <p>
                  <span> PHONE : </span>
                  +550123456789
                </p>
              </address>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={Style.footerBrach}>
        <Container>
          <div className={Style.paymentMethodList}>
            <img
              src="//cdn.shopify.com/s/files/1/0248/5823/0872/files/payment.png?v=1566988082"
              alt=""
            />
          </div>

          <div className={Style.footerLink}>
            <a href="#">Delivery</a>
            <a href="#">Legal Notice</a>
            <a href="#">About us</a>
            <a href="#">Secure payment</a>
            <a href="#">Contact us</a>
            <a href="#">Sitemap</a>
          </div>

          <span class={Style.copyright}>
            <p>
              Copyright ©{" "}
              <a href="https://99shopify.com/" title="https://99shopify.com/">
                99Shopify
              </a>{" "}
              All Right Reserved.
            </p>
          </span>
        </Container>
      </div>
    </footer>
  );
}
