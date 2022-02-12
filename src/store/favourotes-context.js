import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourties: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemisFavourite: (meetupId) => {},
});
//arguments (initial value,)

 export const FavouritesContextProvider =(props)=>{
    const [userFavourites, setUserFavourites] = useState([])

    const addFavHandler = (favouriteMeetup)=> {
        setUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.concat(favouriteMeetup)
            
        })//need to use a function here
    }

    const deleteFavHandler = (meetupId) =>{
        setUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.filter(meetup => meetup.id !==meetupId)
        })
    }

    const itemIsFavHandler = (meetupId) => {
        return userFavourites.some(meetup=> meetup.id === meetupId)
    }

    const context = {
        favourites: userFavourites,
        totalFavourties: userFavourites.length,
        addFavourite: addFavHandler,
        removeFavourite: deleteFavHandler,
        itemIsFavourite: itemIsFavHandler
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;


