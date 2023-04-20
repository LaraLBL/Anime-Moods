import { Link } from 'react-router-dom'


export default function NavBar(){
    return (
        <nav>
            <Link to="">New & Noteworthy</Link>
            &nbsp;&nbsp;
            <Link to="">Mood</Link>
            &nbsp;&nbsp;
            <Link to=""><img src="./logo192.png" alt="Home" /></Link>
            &nbsp;&nbsp;
            <Link to="">Search</Link>
            &nbsp;&nbsp;
            <Link to="">MyAnime</Link>
        </nav>
    );
}
