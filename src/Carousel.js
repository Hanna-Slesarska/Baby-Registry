import { useState } from 'react';



function Carousel({images}) {


    const [slider, setSlider] = useState(0);


    
    const previousPhoto = () => {

    
    
       setSlider ((slider => {
        slider -- ;
        if (slider < 0 ) {
            slider = 3;
        }
        return slider;
    }));

      }

      const nextPhoto = () => {
  

        
        setSlider((slider => {
         slider++;
         if (slider > 3) {
             slider = 0;
             }
             return slider;
        }))
    
      }



    return (
        <div>
            <img src={images[slider]} alt="product" id="slide" />
            <div>
                <button className='btnSlide' onClick={ () => previousPhoto() } >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24">
                        <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/>
                    </svg>
                </button>
                
                <button className='btnSlide' onClick={ () => nextPhoto()} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24">
                        <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
                </button>
            </div>
        </div>
            )
}

export default Carousel;