import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const styles= StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Platform.OS === "android" ? 25:0,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'powderblue'
      },
      input:{
        backgroundColor:'white',
        shadowColor:'black',
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.1,
        elevation:3,
        borderRadius:40,
        padding:15,
        width:270,
        justifyContent:'center',
        alignItems:'center'
        
      }

})
