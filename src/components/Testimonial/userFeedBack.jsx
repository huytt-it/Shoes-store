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
            style={{display:"none"}}
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
            style={{display:"none"}}
        >

            <NavigateBeforeIcon style={{ fontSize: 27, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
    );
}

function TestimonialItem() {
    return (
        <div className={style.testimonialArea} >
            <h3 className={style.testimonialDesc}>
                "When potential customers are researching you online,
                they're getting to know you by way of the content of your website. "
            </h3>
            <div className={style.author}>
                <img className={style.imgAuthor} src="//cdn.shopify.com/s/files/1/0248/5823/0872/files/team-member-3_442x442_045d4cce-ebf0-4079-b75e-f114d2e838e1_100x.jpg?v=1567487066" alt="" />
            </div>
            <h6 class={style.authorDesignation}>Nirob Khan</h6>


        </div>
    )
}

export default function SlickSlider({ row }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        rows: row,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,


    };
    return (
        <div className={style.customerSlick}>
            <Slider  {...settings}  >
                <div className={style.boxItem} >
                    <TestimonialItem />
                </div>
                <div className={style.boxItem} >
                    <TestimonialItem />
                </div>
            </Slider>
        </div>
    )
}
