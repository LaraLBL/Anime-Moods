import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }){

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/noteworthy">
          New & Noteworthy
        </Link>
        <Link className="navbar-item" to="/mood">
          Mood
        </Link>
      </div>

      <div className="navbar-brand">
          <img src="./Logo.png" alt="Home"/>
      </div>

      <div className="navbar-end">
        <Link className="navbar-item" to="/search">
          <i class="fa fa-search" aria-hidden="true"></i>
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          <div className="navbar-dropdown">
            <span className="navbar-item">
              {user.name}
            </span>
            <Link className="navbar-item" to="/myanime">
              My Anime
            </Link>
            <hr className="navbar-divider"/>
              <Link className="navbar-item" to="" onClick={handleLogOut}>
                Log Out
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
