import { Link } from 'react-router-dom'


export default function NavBar(){
    return (
        <nav>
            <Link to="">New & Noteworthy</Link>
            <Link to="">Mood</Link>&nbsp;
            <Link to=""><img src="./logo192.png" alt="Home" /></Link>&nbsp;
            <Link to="">Search</Link>&nbsp;
            <Link to="">MyAnime</Link>
        </nav>
    );
}
