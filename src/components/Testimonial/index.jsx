import React from 'react'
import style from './testimonial.module.css';
import SlickSlider from '../SlickSlider'
import UserFeedBack from './userFeedBack';
import Brand from './brand'
import {Grid,Container,} from "@material-ui/core";
export default function Testimonial() {
    return (
        <div className={style.testimonialArea}>          
            <Container >           
                <UserFeedBack row={1}/>
                <Brand row={1}/>           
            </Container>          
        </div>
    )
}
