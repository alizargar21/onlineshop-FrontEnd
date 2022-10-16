import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";


const FavoriteContext = createContext();
const FavoriteContextDispatcher = createContext();

export const LOCAL_STORAGE_FAVORITE_KEY = "Favorite_List";
const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  //component did mount ///

  useEffect(() => {
    const favData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVORITE_KEY)) || null;
    setFavoriteItems(favData);
  }, []);
  useEffect(() => {
    const favData = JSON.stringify(favoriteItems);
    localStorage.setItem(LOCAL_STORAGE_FAVORITE_KEY, favData);
  }, [favoriteItems]);

  return (
    <FavoriteContext.Provider value={favoriteItems}>
      <FavoriteContextDispatcher.Provider value={setFavoriteItems}>
        {children}
      </FavoriteContextDispatcher.Provider>
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;

export const useFavorite = () => useContext(FavoriteContext);
export const useFavoriteActions = () => {
  const favoriteItems = useContext(FavoriteContext);
  const setFavoriteItems = useContext(FavoriteContextDispatcher);
  const addToFavorite = (item) => {
    const cloneFavoriteItems = [...favoriteItems];
    const index = favoriteItems.findIndex((favItem) => favItem._id === item._id);
    if (index < 0) {
      setFavoriteItems([...cloneFavoriteItems, item]);
    }
    if (index >= 0) {
      cloneFavoriteItems.splice(index, 1);
      setFavoriteItems([...cloneFavoriteItems]);
    }
  };
  return { addToFavorite, setFavoriteItems };
};
