import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bgIMG: {
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "615px",
        position: "relative",
        padding: "60px 0"

    },
    titleShoptify: {
        textAlign: "center",
        maxWidth:"65%",
        margin:"0px auto"
    },
    title: {
        fontSize: "24px",
        fontWeight: "700",
        lineHeight: "1.2s",
        margin:"10px 0"
    },
    subTitle: {
        fontWeight: "400",
        paddingTop: "14px",
        lineHeight: "1.6",
        color: "#777777",
        fontSize: "20px",
        margin:"10px 0 50px 0"
    }
})

export default useStyles;