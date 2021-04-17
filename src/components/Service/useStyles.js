import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    mainService: {
        position: "relative",
        height: "300px"

    },
    containerService: {
        position: "relative",
    },
    listCardService: {
        position: "absolute",
        top: "-120px",
        left: "-3px",
        
    },

    card: {
        textAlign: "center",
        backgroundColor: "white",
        borderColor: "#e5e5e5",
        border: "1px solid #e5e5e5",
        padding: "75px 15px",
        transition: "all 0.4s",
        '&:hover': {
            boxShadow: "0 5px 20px 0 rgb(195 195 195 / 60%)",
        }
    },
    icon: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#87b106",
        margin: "0px auto",
        color: "white",
        position: "relative",
        '&::after': {
            content: `''`,
            width: "calc(100% + 10px)",
            height: "calc(100% + 10px)",
            position: "absolute",
            border: "2px dashed #87b106",
            top: "-7px",
            left: "-7px",
            borderRadius:"50%",
            animationName: "thiss",
            animation: "spin 10s infinite linear",

        }
    },
    '@keyframes thiss':{
       " 0% ":{ transform:" rotate(0deg)" },
       " 100% ":{ transform:" rotate(360deg)" },

    },
    serviceTitle: {
        fontSize: "20px",
        fontWeight: "400",
        marginBottom: "20px"
    },
    serviecDesc: {
        color: "#777777",
        fontSize: "16px",
        lineHeight: "1.2",
    }
}
)



export default useStyles;