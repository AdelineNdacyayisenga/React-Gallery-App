import { NavLink } from 'react-router-dom';

function Nav ({changeQuery}) {

  function handleClick (e) {
    changeQuery(e.target.innerText)
  }
    return (
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/food' onClick={(e) => handleClick(e)}>Food</NavLink></li>
          <li><NavLink to='/dogs' onClick={(e) => handleClick(e)}>Dogs</NavLink></li>
          <li><NavLink to='/computers' onClick={(e) => handleClick(e)}>Computers</NavLink></li>
        </ul>
      </nav>
    )

}
//onClick={() => changeQuery('cats')}

export default Nav;