import Layout from "../../Layout/Layout";
import ListContainer from "../../../components/UI/ListContainer/ListContainer";
import { useEffect , useState} from "react";
const AllOfferProducts = ({products}) => {
  const [renderValue , setRenderValue] = useState(null)
  const [originalValue , setOriginalValue] = useState(null)
const  getData = ()=> {
  const offerList = products.filter(item => item.discount >0)
  setRenderValue(offerList)
  setOriginalValue(offerList)
}
  useEffect(()=> {
  getData()
  }, [products])
  return (
    <Layout>
      <ListContainer
        
        originalValue={originalValue}
        renderValue={renderValue}
        setRenderValue={setRenderValue}
      ></ListContainer>
    </Layout>
  );
};

export default AllOfferProducts;
