// import { Route, Router } from "react-router-dom";
// import Favourites from "./Favourites";
import { Stories } from "./stories/Stories";

function Home() {

    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    
    return (
        <div style={{background: "#6a11cb"}}>

            <h1 className="fw-bold mb-2 text-uppercase text-white">Hacker News WebApp</h1>
            <button className="btn btn-lg px-5 bg-dark mb-4 text-white" onClick={handleClick}>Logout</button> <br></br>
            <a className="w-bold mb-2 text-uppercase text-white" href="/src/components/Favourites.js">See Your Bookmarks Here! </a>
            {/* <Router>
                <Route path="/Favourites" component={<Favourites />} />
             </Router> */}

            <div className="row">
            <Stories style={{background: "#6a11cb"}}/>
            </div>
        </div>
    )
}
export default Home;