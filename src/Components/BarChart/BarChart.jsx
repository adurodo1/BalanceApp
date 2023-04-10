import react,{useState,useContext} from "react";
import { DaysContext } from "../../Context/Context";
import './style.css';
 


const BarChart=()=>{

    //get state of days from use context
    //state of days must be updated as it can be adjusted in the SevenDaysInput component
const{days} = useContext(DaysContext)


return(
    <>

    {
        days.map((data,key)=>{
            return(
              <div  key={"a"+`${key}`}  >
                <div className="bar"style={{
                    height:(data.cost *10) ,
                    marginLeft:(150*key)
                }}> </div>
                    <div className="bar-label" 
                    style={{
                      
                        marginLeft:(150*key)
                    }}
                    >{data.cost}</div>
              </div>
                
            )
        })
    }
     <p>

        
     </p>
  
    </>
)

}

export default BarChart;