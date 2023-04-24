import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }){

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/noteworthy">New & Noteworthy</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/mood">Mood</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/home"><img src="./Logo.png" alt="Home" className="logo"/></Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/search" className='search'><i class="fa fa-search" aria-hidden="true"></i></Link>
      &nbsp;&nbsp;&nbsp;
      <div className="navbar-item has-dropdown is-hoverable">
      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <div className="navbar-dropdown">
          <span>{user.name}</span>
          <Link to="/myanime" className='profile'>My Anime</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>      
    </nav>
  );
}
