import { makeStyles } from "@material-ui/core/styles";
/*
1. Create a hook called useStyles
2. useStyles = function call of makeStyles
3. makeStyles has a callback function ()=>{...
4. callback f. returnes an object with all the styles
+ (theme)=>...
is optional, it offers more styling options 

Material UI is using this CSS in JS syntax
 */
const useStyles = makeStyles((theme)=>({
    root: {
        display:"grid",
        placeItems:"center",
        marginTop:100
       // backgroundColor:"green"
      },

      dual_container: {
        justifyContent: "center",
        alignItems: "stretch",
        alignSelf:"stretch",
        flexDirection: "row",
        flexGrow: 1,
        
    },

    q_form_container: {
      //  backgroundColor:"#e6e6e6",
    },

    form: {
        //padding:"10%",
        marginTop: "45px",
    },

    form_title:{
        textDecoration: "underline",
        marginBottom: "5px"
    },

    answer: {
        marginTop: "30px",
        marginButtom: "15px",
        marginLeft: "15px",
        marginRight:"15px",
        width:"75%"
       // alignSelf:"flex-end"

    },

    answer_checkbox: {
        marginTop: "27px",
        marginButtom: "10px",
        marginRight:"15px"

    },

    q_show_container: {
       // backgroundColor:"#dbdbdb",
        flexDirection: "row"

    },


    container: {
       // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4,0,6) //multiply by 8 -> 64px 0px 48px
    },

    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },

})
);

export default useStyles;