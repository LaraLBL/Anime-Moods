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
      <nav className="container links">
          <div><Link className="mood" to="/mood">Mood</Link></div>
          <div><Link className="my-anime"to="/myanime">My Anime</Link></div>
          <div><img className="logo" src="./Logo.png" alt="logo"/></div>
          <div className="profile">{user.name + " "}
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          </div>
          <div><Link className="log-out" to="" onClick={handleLogOut}>Log Out</Link></div>
      </nav>
    </header>
  );
}
