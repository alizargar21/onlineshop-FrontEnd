import styles from "./singleProduct.module.css";
import { useParams } from "react-router-dom";
import data from "../../../../data/db.json";
import { useEffect, useRef, useState } from "react";
import LayoutTwo from "../../../Layout/LayoutTwo";
import { BiCheck } from "react-icons/bi";
import { useCart, useCartActions } from "../../../../Provider/CartProvider";

const { products } = data;
const SingleProduct = () => {
  const [state , setState] = useState(null)
  const params = useParams();

  const dispatch = useCartActions();
  const cart = useCart()
  const allProducts = [
    ...products.laptop,
    ...products.mobile,
    ...products.cases,
  ];
  let x = []
  
  const selectedProduct = allProducts.find(
    (item) => item.id.toString() === params.id
  );
  const colors = selectedProduct.colors;
  useEffect(() => {
    console.log(x);
    console.log(cart);
    


  }, [x]);
  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: selectedProduct });
  };
  const handleSelectColor = (e) => {
    const value = e.target.value
    x.unshift(value)
  
    console.log(x)
    setState(e.target.value)
    selectedProduct.selectedColor = x

  };
  return (
    <>
      <LayoutTwo>
        <section className={styles.container}>
          <article className={styles.descriptionsProduct}>
            <h3>{selectedProduct.name}</h3>
            
            <div className={styles.descriptions}>
              <div className={styles.descDiv}>
                {selectedProduct.attributes.map((item, index) => (
                  <div className={styles.dis} key={index}>
                    <p className={styles.attr}>{Object.keys(item)} :</p>
                    <p className={styles.desc}>{Object.values(item)}</p>
                  </div>
                ))}
              </div>
         
            </div>
          </article>
          <aside className={styles.imageProduct}>
            <img src={selectedProduct.image} alt={selectedProduct.name} className={styles.image} />
            <div className={styles.checkStyle}>
              Colors :
              {colors.map((item, index) => (
                <div key={index} className={styles.colorsContainer} onChange={(e)=>handleSelectColor(e)}>
                  <input
                    type="radio"
                    name="color"

                    // onClick={()=>handleSelectColor(item)}
                    style={{border:`10px solid ${item}` }}
                    value={item}
                 />
                 
                </div>
              ))}
 
            </div>
            <button className="btn"disabled={selectedProduct.selectedColor === undefined} onClick={() => handleAddToCart()}>
               {state? "Add To Cart": "Select Color"}
              </button>
          </aside>
        </section>
          <article className={styles.intro}>
            <p>{selectedProduct.introduction}</p>
          </article>
      </LayoutTwo>
    </>
  );
};

export default SingleProduct;
