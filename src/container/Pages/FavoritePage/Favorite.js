import ListContainer from "../../../components/UI/ListContainer/ListContainer";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const LOCAL_STORAGE_FAVORITE_KEY = "Favorite_List";

const Favorite = () => {
  const { favoriteList } = useSelector((state) => state.favorite);
  useEffect(() => {

  }, [favoriteList]);
  return (
    <Layout>
     
        {favoriteList.length === 0 ? (
          <div className="w-full text-center mx-auto mb-80">
            <p className="text-[25px] text-gray-800 dark:text-gray-200">Favorite List Is Empty</p>
            <Link to={"/products"} className="">
              <p className="hover:text-rose-700 duration-200 dark:text-gray-200 dark:hover:text-rose-700">Back To See Products?</p>
            </Link>
          </div>
        ) : (
          <ListContainer renderValue={favoriteList} />
        )}

    </Layout>
  );
};

export default Favorite;
