import React from 'react'
import { Grid, Container } from '@material-ui/core';
import Style from './footer.module.css'

export default function Footer() {

    return (
        <footer className={Style.footerArea} >
            <div className="footerMenu">
            <Container>
                <Grid container>
                    <Grid item xs={3}>
                        <div className={Style.itemWidget}>
                            <h5>
                                CUSTOM LINKS
                            </h5>
                            <ul className={Style.usefullLinks}>
                                <li><a href="/#">Delivery</a></li>
                                <li><a href="/#">Legal Notice</a></li>
                                <li><a href="/#">About us</a></li>
                                <li><a href="/#">Secure payment</a></li>
                                <li><a href="/#">Contact us</a></li>
                                <li><a href="/#">Sitemap</a></li>
                            </ul>

                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={Style.itemWidget}>
                            <h5>
                                PRODUCTS
                            </h5>
                            <ul className={Style.usefullLinks}>
                                <li><a href="/#">Personal info</a></li>
                                <li><a href="/#">Orders</a></li>
                                <li><a href="/#">Credit slips</a></li>
                                <li><a href="/#">Addresses</a></li>
                                <li><a href="/#">Stores</a></li>
                                <li><a href="/#">FAQ</a></li>
                            </ul>

                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={Style.itemWidget}>
                            <h5>
                                OUR COMPANY
                            </h5>
                            <ul className={Style.usefullLinks}>
                                <li><a href="/#">Delivery</a></li>
                                <li><a href="/#">Legal Notice</a></li>
                                <li><a href="/#">About us</a></li>
                                <li><a href="/#">Secure payment</a></li>
                                <li><a href="/#">Contact us</a></li>
                                <li><a href="/#">Sitemap</a></li>
                            </ul>

                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={Style.itemWidget}>
                            <h5>
                                YOUR ACCOUNT
                            </h5>
                            <ul className={Style.usefullLinks}>
                                <li><a href="/#">Delivery</a></li>
                                <li><a href="/#">Legal Notice</a></li>
                                <li><a href="/#">About us</a></li>
                                <li><a href="/#">Secure payment</a></li>
                                <li><a href="/#">Contact us</a></li>
                                <li><a href="/#">Sitemap</a></li>
                            </ul>

                        </div>
                    </Grid>

                </Grid>
            </Container>
            </div>
            <div className="footerAddress">
                

            </div>
           
        </footer>
    )
}
