import Products from "../../../components/Products/Products";
import ListContainer from "../../../components/UI/ListContainer/ListContainer";
import Layout from "../../Layout/Layout";
import { useFavorite , useFavoriteActions } from "../../../Provider/FavoriteProvider"; 
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Favorite = () => {
    const favoriteItems = useFavorite()
    const [renderValue , setRenderValue] = useState(null)
    const [originalValue , setOriginalValue] = useState(null)
    const getData = () => {
        setRenderValue(favoriteItems)
        setOriginalValue(favoriteItems)
    }
    useEffect(()=> {
        getData()   
      
    }, [])

    return ( <Layout>
        <ListContainer originalValue={originalValue} renderValue={renderValue} setRenderValue={setRenderValue}>
         
        <div className="w-full text-center mx-auto">
            <p className="text-[25px] text-rose-600 ">Favorite List Is Empty</p>    
        <Link to={"/categories"} className="">
            <p>Back To Categories?</p>
        </Link>
        
        </div>
        
        </ListContainer>
    </Layout> );
}
 
export default Favorite;   