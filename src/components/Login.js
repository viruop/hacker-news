import  { useRef } from "react";
import Home from "./Home";

function Login(){
    const username=useRef()
    const password=useRef()
    const getUsername=localStorage.getItem("usernameData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(username.current.value ==="admin"&&password.current.value==="admin"){
            localStorage.setItem("usernameData","admin")
            localStorage.setItem("passwordData","admin")
        }
    }
    
    return(
        <>
            {
                getUsername&&getPassword?
                <Home/>:
            <form onSubmit={handleSubmit}>
                <div className="vh-100 gradient-custom" style={{background: "#6a11cb"}}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">Please enter your username and password!</p>
                                <div className="form-outline form-white mb-4">
                                    <input type="username"  className="form-control form-control-lg" ref={username} />Username
                                </div>
                                <div className="form-outline form-white mb-4">
                                    <input type="password"  className="form-control form-control-lg" ref={password} /> Password
                                </div>
                                <button className="btn btn-outline-light btn-lg px-5" type="submit" onSubmit={handleSubmit}>Login</button>
                                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                                    <a href="https://github.com/viruop" className="text-white"><i className="fab fa-github fa-lg mx-4 px-2" /></a>
                                    <a href="https://www.linkedin.com/in/viraj-rai-7b9249230/" className="text-white"><i className="fab fa-linkedin fa-lg" /></a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
            }

    </>
    
    );
}
export default Login;

