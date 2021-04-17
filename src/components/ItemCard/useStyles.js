import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 290,
      height:470,
      position:"relative",
    },
    media: {
      width:"100%",
      height:"100%",
      opacity:"0.8",
      backgroundColor:"black"
    },
    itemShoe:{
        position:"absolute",
        height:"100%"
    },
    actionArea:{
      position:"relative",
      width:"100%",
      height:"210px",
    },
    areaItem:{
      width:"75%",
      height:"95%",
      position:"absolute",
      bottom:"5%",
      left:"15%",
    },
    cusIMG:{
      width: "100%",
    },
    contentArea:{
      textAlign:"center"
    },
    brand:{
      color:"#D4D4D4"
    },
    desc:{
      textAlign:"left",
    },
    acCard:{
      margin:"10px auto",
      width:"80%",
      display:"flex,",
      justifyContent:"center"
    },
    cusButton:{
      color:"white",
      background:"black",
    },
   
  });
  

export default useStyles;