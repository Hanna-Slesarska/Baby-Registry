import { useState } from 'react';
import { data } from './data';
import Carousel from './Carousel';
import Header from './Header';
import Like from './Like';



function Gifts() {
    const [gifts, setGifts] = useState(data);

  const removeItem = (id) => {
    let newGifts = gifts.filter(element => element.id !== id);
    setGifts(newGifts);
  };
 
  
 
    return (
    <div>
      <Header gifts={gifts}/>
      {gifts.map((item => {
        const {id, gifty, image, like } = item;
        //const index = gifts.indexOf(item);
        return (
          <div className='element' key={ id }>
            <div className='line'>
              <hr />
              <h4>{ id }</h4>
              <hr />
            </div>
            
            <Carousel images={image}/>
            <p className='giftName'>{ gifty }</p>
        <div className='cta'>
            <Like cards={like}/>
           
            <button className='btnRemove' onClick={ ()=> removeItem(id) }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"  fill="currentColor">
              <path d="M5.755 20.283 4 8h16l-1.755 12.283A2 2 0 0 1 16.265 22h-8.53a2 2 0 0 1-1.98-1.717zM21 4h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"/>
            </svg>
            </button>
        </div>
            
          </div>
        )
      }))}

      <div>
        <button className='btnDelete' onClick={() => setGifts([])}>Delete All</button>
      </div>
    
      </div>
    )
}

export default Gifts;