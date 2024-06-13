import React,{useState} from "react";
function FormNew(){
    const [name,setName] = useState("");
    const [tnc,setTnc] = useState(false);
    const [interest,setInterest] = useState();
    function getFormData(e){
           e.preventDefault()
           console.log(name);
           console.log(tnc);
           console.log(interest);
    }
    return(
        
        <div>
            <h1>Form</h1>
            <form onSubmit={getFormData}>
            <input type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} />
            <br />
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Male</option>
                <option>Female</option>
            </select>
            <br/>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept terms and conditions</span>
            <br />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FormNew;