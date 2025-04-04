import { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css';
import FavoritesContext from "../store/favorites-context";

export default function MainNavigation () {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
        <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <NavLink className={classes.navlink} to="/">All Meetups</NavLink>
                    </li>
                    <li className={classes.li}>
                        <NavLink className={classes.navlink} to="/NewMeetup">Add New Meetup</NavLink>
                    </li>
                    <li className={classes.li}>
                        <NavLink className={classes.navlink} to="/Favorites">My Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}