import { NavLink } from 'react-router-dom';

function Nav ({ changeQuery }) {
    return (
        <nav className="main-nav">
        <ul>
          <li onClick={() => changeQuery('cats')}><NavLink to='cats'>Cats</NavLink></li>
          <li onClick={() => changeQuery('dogs')}><NavLink to='dogs'>Dogs</NavLink></li>
          <li onClick={() => changeQuery('computers')}><NavLink to='computers'>Computers</NavLink></li>
        </ul>
      </nav>
    )
}

export default Nav;