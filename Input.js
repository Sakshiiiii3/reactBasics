import React, {useState} from "react";

function Input(){
    const [print, setPrint] = useState(false);
    const [data,setData] = useState(null);
    function getData(val){
        console.warn(val.target.value)
         setData (val.target.value)
        }
   
    return(
        <div>
            {
        print? <h1>{data}</h1> : null
            }
     <input type="text" onChange={getData} />
     <button onClick={()=>
          setPrint(true)
     }>button</button>
     </div>
    )
}
export default Input;