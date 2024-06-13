import React,{useState} from "react";
function Login(){
    const [logiId, setLoginId] = useState();
    const [password,setPassword] = useState();
    const[userError, setUserError]= useState(false);
    const[passError, setPassError] = useState(false);
    function LoginHandle(e){
       e.preventDefault()
       if(logiId.length<3 && password.length<3){
        alert("enter correct values");
       }
    }
    function userHandle(e){
       let val = e.target.value;
       if(val.length<3){
        setUserError(true);
        
       }else{
        setUserError(false);
       }
    }
    function passHandle(e){
        let val = e.target.value;
        if(val.length<3){
         setPassError(true);
         
        }else{
         setPassError(false);
        }
     }
     return(
        <div>
             <h1>Login Page</h1>
            <form onSubmit={LoginHandle}>
           
            <input type="text" placeholder="Enter your Id" onChange={userHandle} />{userError ? <span>User Not Valid </span> : null}
            <br></br>
            <input type="text" placeholder="Enter your password" onChange={passHandle} />{passError ? <span>Password Not Valid </span> : null}
            <br></br>
            <button type="submit">Submit</button>
            </form>
        </div>
     )
}
export default Login;