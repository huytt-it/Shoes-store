import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cutomeIMGSlider: {
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "750px",
    position:"relative"
  },
  customPrevArrow: {
    fontSize: "0",
    lineHeight: "0",
    position: "absolute",
    top: "50%",
    display: "block",
    padding: "0",
    transform: "translate(0, -50%)",
    cursor: "pointer",
    color: "white ",
    border: "none",
    outline: "none",
    background: "transparent",
    zIndex: "100",    
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    transition:"all 0.4s",
    '&:hover':{
      background: "transparent",
      color: "black",
      transition:"all 0.4s",
    }    
  },
  customNextArrow: {
    fontSize: "0",
    lineHeight: "0",
    position: "absolute",
    top: "50%",
    display: "block",
    padding: "0",
    transform: "translate(0, -50%)",
    cursor: "pointer",
    color: "white ",
    border: "none",
    outline: "none",
    background: "transparent",
    zIndex: "100",
    right:"1px",
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    transition:"all 0.4s",
    '&:hover':{
      background: "transparent",
      color: "black",
      transition:"all 0.4s",
    }    
  },
  containerText:{
    position:"absolute",
    bottom:"0%",
    width:"100%",
    height:"75%"   
  },
  slideTitle:{
    fontWeight:"900",
    color:"#faec07",
    fontSize:"150px",
    margin:"0px",
    transition:"all 1.7s",
    opacity:"1"
  },
  hiddenTitle:{
    transform: "translateX(50px)",
    opacity:"0",
    fontWeight:"900",
    color:"#faec07",
    fontSize:"150px",
    margin:"0px",
    transition:"all 0.5s",
  },
  slideSubTitle:{
    color:"white",
    fontSize:"30px",
    fontWeight:"500",
    lineHeight:"1.1",
    margin:"0px",
    marginBottom:"45px",
    opacity:"1",
    transition:"all 1.8s",
  },
  hiddenSubTitle:{
    color:"white",
    fontSize:"30px",
    fontWeight:"500",
    lineHeight:"1.1",
    margin:"0px",
    marginBottom:"45px",
    transform: "translateX(40px)",
    opacity:"0",
    transition:"all 0.5s",

  },
  shopNow:{
    marginTop:"20px",
    color:"white",
    backgroundColor:"black",
    textDecoration:"none",
    padding:"15px 30px",
    borderRadius:"50px",
    fontSize:"17px",
    fontWeight:"700",
    transition:"all 1.8s",
    '&:hover':{
      background: "#87b106",
      color: "white",
      transition:"all 0.4s",
    }    
  },
  hiddenShopNow:{
    marginTop:"20px",
    color:"white",
    backgroundColor:"black",
    textDecoration:"none",
    padding:"15px 30px",
    borderRadius:"50px",
    fontSize:"17px",
    fontWeight:"700",
    transition:"all 0.8s",
    opacity:"0"

  },
  hiddenText:{
    opacity:0,
  },
  showText:{
    opacity:1,
    transition:"all 0.4s",
  },


  containerIframeQr:{
    position:"relative"

  },

  ifameclass:{
    position:"absolute",
    right:"162px",
    top:"150px"

  },

  qrClass:{
    position:"absolute",
    right:"162px",
    top:"150px"
  },


});



export default useStyles;