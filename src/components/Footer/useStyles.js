import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bgFooter:{
        background: "black",
        padding:"20px 50px"
    },
    title:{
        color:"white",
        paddingLeft:35,
        borderBottom: "2px white solid",
        width:"60%"
        
    },
    menu:{
        color:"white",
        listStyle:"none"
    },
    listContent:{
        padding:"5px 0"

    },
    content:{
        color:"white",
        textDecoration:"none",
        
    }

})


export default useStyles;