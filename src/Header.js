

import logo from './images/koala-logo.png';
import toyLogo from './images/toy-logo.png';

function Header({gifts}) {
   
    return (
        <div>
         <img src={ logo } className='logo' alt='logo'/>
      <h2>
        <span className='c1'>B</span><span className='c2'>a</span><span className='c3'>b</span><span className='c1'>y</span> <span className='c2'>R</span><span className='c3'>e</span><span className='c1'>g</span><span className='c2'>i</span><span className='c3'>s</span><span className='c1'>t</span><span className='c2'>r</span><span className='c3'>y</span>
      </h2>
      <h1>{ gifts.length } ESSENTIALS</h1>
      <h3>to buy before a baby arrives</h3>
      <img src={ toyLogo } className="toyLogo" alt="toy logo"/>
    </div>
    )
    
}

export default Header;