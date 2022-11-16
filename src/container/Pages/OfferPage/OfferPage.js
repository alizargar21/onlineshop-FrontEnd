import Layout from "../../Layout/Layout";
import ListContainer from "../../../components/UI/ListContainer/ListContainer";
import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAsyncOffersProducts} from "../../../features/ProductsSlice/ProductsSlice";
import SortBar from "../../../components/Search and sort/SortBar";
import Spinner from "../../../common/Spinner/Spinner";
const AllOfferProducts = () => {
  const {products ,loading , error , filteredProducts} = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(()=>{
   dispatch(getAsyncOffersProducts())
   setRenderValue(products)
 }, [])
  const [renderValue , setRenderValue] = useState(null)
  
  return (
    <Layout>
      <SortBar setRenderValue={setRenderValue} error={error}/>
      {error && <p>{error}</p>}
    {loading && <Spinner />}
    {!loading && !error &&(   <ListContainer
             renderValue={
              filteredProducts.length === 0 ? products : filteredProducts
            }
        setRenderValue={setRenderValue}
      ></ListContainer>)}
    </Layout>
  );
};

export default AllOfferProducts;
