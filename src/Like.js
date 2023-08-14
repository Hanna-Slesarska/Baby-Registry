import React, { useState } from 'react';
import likeIcon from './images/likeIcon.png';
import unLikeIcon from './images/unlikeIcon.png';


function Like({cards}) {
    
    const [like, setLike] = useState(0);

    return (
        
        <div>
            <button className='btnLike' onClick={() => setLike((prev) => !prev)}>
            {like ? <img className='imgIcon' src={likeIcon} alt="icon"/> : <img className='imgIcon' src={unLikeIcon} alt="icon"/>}
            </button>
        </div>
    )
}

export default Like;

