import  { useRef } from "react";
import Home from "./Home";

function Login(){
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value ==="admin"&&password.current.value==="admin"){
            localStorage.setItem("emailData","admin")
            localStorage.setItem("passwordData","admin")
        }
    }
    
    return(
        <>

            {
                getEmail&&getPassword?
                <Home/>:
            <form onSubmit={handleSubmit}>
                <div>
                  <h2 className="fw-bold mb-2 text-uppercase">Hey, there</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
                </div>
                <div>
                    <input type="text" ref={email} />
                </div>
                <div>
                    <input type="password" ref={password} />
                </div>
                <button className="btn btn-primary btn-lg btn-block">Login</button>
            </form>
            }

    </>
    
    );
}
export default Login;