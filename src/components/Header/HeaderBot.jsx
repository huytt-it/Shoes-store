import React from 'react'
import {
    Grid,
    Container,
    Badge
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from "./useStyles";
import ListItemHover from "./ListItemHover";
import hover from '../../event/hover'

export default function HeaderBot() {
    var classes = useStyles();
    const [hoverRef1, isHovered1] = hover();
    const [hoverRef2, isHovered2] = hover();
    const [hoverRef3, isHovered3] = hover();
    return (
        <Container className={classes.headerBot}>
            <Grid container className={classes.itemInHeaderBot}>
                <Grid item xs={2}>
                    <div className={classes.brand}>
                        <a href="#">
                            <img src="//cdn.shopify.com/s/files/1/0248/5823/0872/files/logo_150x.png?v=1562839006" alt="" />
                        </a>
                    </div>
                </Grid>
                <Grid item xs={7} className={classes.pdTB10}>
                    <ul className={classes.menuArea}>

                        <li className={classes.listMenu} ref={hoverRef1}> 
                            <a className={classes.customTaga} href="#">HOME <ExpandMoreIcon style={{ fontSize: 17 }}/></a>
                             <ListItemHover isHover={isHovered1}/>                          
                        </li>


                        <li className={classes.listMenu} ref={hoverRef2}> 
                            <a className={classes.customTaga} href="#">SHOP <ExpandMoreIcon style={{ fontSize: 17 }}/></a>
                            <ListItemHover isHover={isHovered2}/>  
                        </li>
                        <li className={classes.listMenu} ref={hoverRef3}> 
                            <a className={classes.customTaga} href="#">PRODUCT <ExpandMoreIcon style={{ fontSize: 17 }}/></a>
                            <ListItemHover isHover={isHovered3}/>  
                        </li>
                        <li className={classes.listMenu}>
                            <a className={classes.customTaga} href="#">BLOG</a>
                        </li>
                        <li className={classes.listMenu} > 
                            <a className={classes.customTaga} href="#">CONTACT US </a>
                          
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={3} className={classes.pdTB10}>
                    <ul className={classes.headerRight}>
                        <li className={classes.listHeaderRight}>
                            <a href="#" className={classes.customTaga}><SearchIcon style={{ fontSize: 30 }} /></a>

                        </li>
                        <li className={classes.listHeaderRight}>
                            <a href="#" className={classes.customTaga} >
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon style={{ fontSize: 30 }} />
                                </Badge>
                            </a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    )
}
