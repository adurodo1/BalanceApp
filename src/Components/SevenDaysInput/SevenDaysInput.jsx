import react,{useState,useEffect,useContext} from "react";
import { DaysContext } from "../../Context/Context";


const SevenDaysInput=()=>{
    
 
const {total,setTotal,days,setDays}= useContext(DaysContext);

const updateCost=(e)=>{
    //get the new value
//rebuild based on key 
//debugger;
    const newWeeklyCost = days.map(obj => {
        // 👇️ if id equals 2, update country property
 
        if (obj.id ===e.target.getAttribute('data-key')) {
          return {id:e.target.getAttribute('data-key'), cost:e.target.value};
        }
        else
        return obj
      });
      console.log(newWeeklyCost);
     setDays(newWeeklyCost);

}

  useEffect(
    ()=>{
//debugger;

//on evety change days the total value must be updated
      var total=  days.reduce(
            (accumulator, currentValue) => accumulator + Number(currentValue.cost) 
         ,0 );

 

console.log(total);
setTotal(total)
    },[days,setTotal]
);  
 
return(
    <>
   
               
 
{
    days.map(
        (data,k)=>{
            <br></br>
            return(
               
             
                <input type="number" key={data.id} data-key={data.id} value={data.cost}
            onChange={(e)=>updateCost(e)}/> 
                 
              
               
            );

        }
    )
}
  
    </>
)

}

export default SevenDaysInput;