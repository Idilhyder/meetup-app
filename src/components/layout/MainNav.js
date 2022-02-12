import { Link } from "react-router-dom";
import classes from './MainNav.module.css'



const MainNav = () => {
  return (
    <header className = {classes.header}>
      <div className = {classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="new-meetup"> New Meetups</Link>
          </li>
          <li>
            <Link to="favourites">My Favourties</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
