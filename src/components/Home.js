
// import { useEffect , useState } from "react";
import { Stories } from "./stories/Stories";

// import { getStories  , getStory} from './api'
// import {Story} from './stories/Story'
// stories array 

function Home() {


    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }



    
    return (
        <>

            <h1>Home Page</h1>
            <button onClick={handleClick}>Logout</button>
            <div className="stories">
                <div className="row">

                
            <Stories />
            </div>
            </div>
        </>
    )
}
export default Home;