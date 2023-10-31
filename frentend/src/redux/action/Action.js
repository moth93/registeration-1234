import axios from "axios"
import { ADD } from "../action-type/Action-type"

export const AddUser=(data)=>async(dispatch)=>{

   try {
       const res=await axios.post('/user/adduser',data)
       dispatch({type:ADD,payload:res.data})
   } catch (error) {
    console.log(error)
   }

}