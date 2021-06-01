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
        flexGrow: 1,
        //backgroundColor:"grey"
      },

      main_view: {
        display: "flex",
        flexDirection: "column",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",

      },

      dual_container: {
        justifyContent: "center",
        alignItems: "flex-start",
        alignSelf:"center",
        flexDirection: "row",
        flexGrow: 1,

      //  backgroundColor:"grey",
        marginTop:50,

        backgroundColor:"#e6e6e6",
        minHeight:"95vh",
        
    },

    show_container: {
        //backgroundColor:"#e6e6e6",
        //minHeight:"95vh",
        //dividers
        //borderRight: "1px solid black",
    },
    show_container_second: {
      //backgroundColor:"#e6e6e6",
      //minHeight:"95vh",
      //dividers
      borderLeft: "2px solid black",
  },


    q_show_container: {
       // backgroundColor:"#dbdbdb",
        flexDirection: "row"

    },


})
);

export default useStyles;