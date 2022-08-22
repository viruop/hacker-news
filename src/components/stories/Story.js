import { useEffect, useState , useRef} from 'react';
import { getStory } from '../api';
import { AiOutlineHeart , AiFillHeart } from 'react-icons/ai';

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});
    const ref = useRef(null);
    const [favourite , setFavourite] = useState(false)

    useEffect(() => {
      getStory(storyId).then((data) => {
        if (data && data.url) {
          setStory(data);
        }
      });
    });

    const { title, id, url ,by } = story;

    
    const handleFavourite = ()=>{
        setFavourite(!favourite)
    }
        
        return story && url ? (
            <>
              <div className='col-sm-4 p-4' >
                <div  id={id}  ref={ref} className="card">
                  <div className='favourite' onClick={handleFavourite}>
                     { favourite ? <AiFillHeart /> : <AiOutlineHeart />}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title" >Title : <a href={url}> {title}</a></h5>
                    <p className="card-text">Author : {by}</p>
                    <a>Blog Link : </a> <a href={url} className="card-link"> {url}</a>
                  </div>
                </div>
              </div>
            </>
    ) : <h2>loading...</h2> ;
}

