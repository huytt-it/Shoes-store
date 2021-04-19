import React from 'react';
import {
    Container,
} from "@material-ui/core";
import SlickSlider from '../SlickSlider';
import useStyles from "./useStyles";


export default function Shopify() {
    var classes = useStyles();
    return (
            <div className={classes.bgIMG} style={{ background: " #ffffff url(//cdn.shopify.com/s/files/1/0248/5823/0872/files/bg-new.jpg?v=1570102343) no-repeat scroll center center / cover" }}>              
                    <Container>
                        <div className={classes.titleShoptify}>
                            <h3 className={classes.title}>NEW ARRIVALS PRODUCTS</h3>
                            <h4 className={classes.subTitle}>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus, qui sequitur mutationem.</h4>
                        </div>
                        <SlickSlider row={1}  />
                    </Container>               
            </div>
    )
}
