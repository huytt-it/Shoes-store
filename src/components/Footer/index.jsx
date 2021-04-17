import React from 'react'
import Grid from '@material-ui/core/Grid';
import useStyles from "./useStyles";

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.bgFooter} >
            <div >
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={3}>
                        <h3 className={classes.title} >SUPPORT</h3>
                        <ul style={{padding: "0px"}}>
                            <li className={classes.listContent}><a className={classes.content} href="">Help Customer Service</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">FAQ</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Store Finder</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Returns and Refunds</a></li>
                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <h3 className={classes.title} >ABOUT US</h3>
                        <ul style={{padding: "0px"}}>
                            <li className={classes.listContent}><a className={classes.content} href="">CompanyInfo</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Careers</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Press</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Hotline</a></li>
                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <h3 className={classes.title} >SERVICE</h3>
                        <ul style={{padding: "0px"}}>
                            <li className={classes.listContent}><a className={classes.content} href="">Shipping and Delivery</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Customer service</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Service Discount</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Student DIscount</a></li>
                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <h3 className={classes.title} >CONTACT</h3>
                        <ul style={{padding: "0px"}}>
                            <li className={classes.listContent}><a className={classes.content} href="">Facebook</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Intagram</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Twitter</a></li>
                            <li className={classes.listContent}><a className={classes.content} href="">Zalo</a></li>
                        </ul>
                    </Grid>
                </Grid>
            </div>

        </footer>
    )
}
