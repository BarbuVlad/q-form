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
    list:{  
        marginTop:20,
    },

    show_container: {
        backgroundColor:"#e6e6e6",
        minHeight:"95vh",
        //dividers
        borderRight: "3px solid black",
    },

    btn:{
        marginTop:10,
         marginBottom:20
    },

    /*Card Object */
    root: {
        minWidth: 150,
        maxWidth:450,
        marginBottom:20,

        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",

        backgroundColor:'#cccccc'
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      }


})
);

export default useStyles;