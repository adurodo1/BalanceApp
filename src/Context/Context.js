import React, { useState, createContext, useEffect } from 'react';

const DaysContext = createContext();

const DaysProvider=({children})=>{
    //create array for 7 days input
    let initialDays=[
        {id: "1", cost: 0},
        {id: "2", cost: 0},
        {id: "3", cost: 0},
        {id: "4", cost: 0},
        {id: "5", cost: 0},
        {id: "6", cost: 0},
        {id: "7", cost: 0},
      ];
    const [days,setDays]=useState(initialDays);//state to manage 7 days
   const [total,setTotal]= useState(0);// state to manage total
    return(
        <DaysContext.Provider value={{total,setTotal,days,setDays}}>
        {children}
        </DaysContext.Provider>
    )

}

export {DaysContext,DaysProvider}