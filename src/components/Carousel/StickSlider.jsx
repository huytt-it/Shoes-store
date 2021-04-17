import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from "./useStyles";
import ContentSlider from './ContentSlider';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function SamplePrevArrow(props) {
  var classes = useStyles();

  const {style, onClick } = props;
  return (
    <div
      className={classes.customPrevArrow}

      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <NavigateBeforeIcon style={{ fontSize: 27, width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { style, onClick } = props;
  var classes = useStyles();
  return (
    <div
      className={classes.customNextArrow}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <NavigateNextIcon style={{ fontSize: 27, width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}





export default function StickSlider() {

  const [current,setCurrent] = React.useState(0);
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:  <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, 
    beforeChange: (current,next) => setCurrent(next)
  };

  const classes = useStyles();
  return (
    
   
      <Slider  {...settings} className={{ 'slick-track': { height: "720px" } }}  >
        <div >
          <ContentSlider isCurrent={current ===0?true:false} />
        </div>

        <div className={classes.settingSlick}>
          <ContentSlider isCurrent={current ===1?true:false} />
        </div>
      </Slider>


   

  );

}