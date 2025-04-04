import { useContext } from 'react';

import Card from "../ui/Card"
import classes from './MeetupItem.module.css';
import FavoritesContext from '../store/favorites-context';

const MeetupItem = ({image, id, title, address, description}) => {

   const favoritesCtx = useContext(FavoritesContext);

   const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(id);
        } else {
            favoritesCtx.addFavorite({
                id,
                title,
                description,
                image,
                address
            });
        }
    }

    return (
        <li key={id} className={classes.item}>
                <Card>
                <div className={classes.image}>
                    <img src={image} alt={title}/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite? `Remove fromFavorites` : `Add to Favorites`}
                    </button>
                </div>
        </Card>
            </li>
    )
}

export default MeetupItem;