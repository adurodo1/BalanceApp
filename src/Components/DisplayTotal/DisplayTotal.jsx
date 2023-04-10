import react,{useState,useContext} from "react";
import { DaysContext } from "../../Context/Context";


const DisplayTotal=()=>{

    //get state of total from use context
    //the value of total is dependent on the adjustments made in the Sefen days input Component
 const{total}=useContext(DaysContext)


return(
    <>
     <p>

       Total Inputs ::  {total}
     </p>
  
    </>
)

}

export default DisplayTotal;