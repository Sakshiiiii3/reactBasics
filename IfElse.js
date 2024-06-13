import React,{useState} from 'react';
function IfElse(){
    const [loggedIn, SetLoggedIn] = useState(1);

        return(
            <div>
                {
                    loggedIn===1 ? <h1>Hello User 1</h1> :  
                    loggedIn===2 ? <h1>Hello Guest 2</h1> :
                     <h1>Hello Guest 3</h1>
                }
            </div>
        )

}

export default IfElse;