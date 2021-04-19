import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CardProduct from '../CardProduct';
import style from './slick.module.css';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={style.customNextArrow}
            onClick={onClick}
        >
            <NavigateNextIcon style={{ fontSize: 27, width: "100%", height: "100%", objectFit: "cover" }} />


        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={style.customPrevArrow}
            onClick={onClick}
        >

            <NavigateBeforeIcon style={{ fontSize: 27, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
    );
}

function Brand(){
    return (

        <div >
            <div className={style.brandItem}>
                <img src="//cdn.shopify.com/s/files/1/0248/5823/0872/files/6_235x.png?v=1567487918" alt=""/>
            </div>
        </div>
    )
}

export default function SlickSlider({row}) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        rows:row,


    };
    return (
        <div className={style.customerSlick}>
            <Slider  {...settings}  >
                <div className={style.boxItem} >
                    <Brand />
                </div>

                <div className={style.boxItem} >
                    <Brand />
                </div>

                <div className={style.boxItem} >
                    <Brand />
                </div>

                <div className={style.boxItem} >
                    <Brand />
                </div>

                <div className={style.boxItem} >
                    <Brand />
                </div>
                
            </Slider>
        </div>
    )
}
