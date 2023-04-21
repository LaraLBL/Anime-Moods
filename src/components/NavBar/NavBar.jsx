import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }){

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/noteworthy">New & Noteworthy</Link>
      &nbsp;&nbsp;
      <Link to="/mood">Mood</Link>
      &nbsp;&nbsp;
      <Link to="/home"><img src="./Logo.png" alt="Home" /></Link>
      &nbsp;&nbsp;
      <Link to="/search"><i class="fa fa-search" aria-hidden="true"></i></Link>
      &nbsp;&nbsp;
      <Link to="/myanime"><i class="fa fa-user-circle-o" aria-hidden="true"></i></Link>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
