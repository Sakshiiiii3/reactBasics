import React from "react";
function Arrow(){
    function call(){
        alert("hello");
    }
    return (
        <div>
        <button onClick={call()}>Button</button>
        <button onClick={call}>Button</button> 
        <button onClick={()=>call()}>Button</button>
        </div>
    );
}
export default Arrow;