import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }){

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <header>
      <nav className="container">
        <ul className="links">
          <li><Link className="mood" to="/mood">Mood</Link></li>
          <li><img className="logo" src="./Logo.png" alt="logo"/></li>
          <li className="profile">{user.name}<i className="fa fa-user-circle-o" aria-hidden="true"></i></li>
          <li><Link className="my-anime"to="/myanime">My Anime</Link></li>
          <li><Link className="log-out" to="" onClick={handleLogOut}>Log Out</Link></li>
        </ul>
      </nav>
    </header>
  );
}
