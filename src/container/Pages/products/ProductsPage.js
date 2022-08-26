import styles from "./productspage.module.css";
import { Link , useNavigate} from "react-router-dom";
import Layout from "../../Layout/Layout";
import LayoutTwo from "../../Layout/LayoutTwo";
const ProductsPage = () => {
  return (
    <LayoutTwo>
      
      <section className={styles.productsCategories}>
        <article className={styles.category}>
          <Link to="/laptops">
            <h4>Laptops</h4>
            <div className={styles.imageContainer}>
              <img
                src={require("../../../images/mc/laptop/14b0e9cb08c90108cb085a729d06ee3207cb52b1_1645858432.jpg")}
                className={styles.imageDiv}
              />
              <img
                src={require("../../../images/mc/laptop/79f4b1e3c31fb22fa193ea1393e2cb8e8a5863cc_1605085571.jpg")}
                className={styles.imageDiv}
              />
              <img
                src={require("../../../images/mc/laptop/522caeefa14460199ddd4e3df6796f419d5b6b08_1645858426.jpg")}
                className={styles.imageDiv}
              />
              <img
                src={require("../../../images/mc/laptop/6969c6df7ef275fbfce054beecb546a970b6341f_1637680475.jpg")}
                className={styles.imageDiv}
              />
            </div>
          </Link>
        </article>

        <article className={styles.category}>
          <Link to="/mobiles">
            <h4>Mobiles</h4>
            <div className={styles.imageContainer}>
              <img
                src={require("../../../images/mc/mobile/2 (1).jpg")}
                className={styles.imageDiv}
              />
              <img
                src={require("../../../images/mc/mobile/2 (10).jpg")}
                className={styles.imageDiv}
              />
              <img
                src={require("../../../images/mc/mobile/2 (12).jpg")}
                className={styles.imageDiv}
              />
              <img
                src={require("../../../images/mc/mobile/2 (4).jpg")}
                className={styles.imageDiv}
              />
            </div>
          </Link>
        </article>
        <article className={styles.category}>
          <Link to="/cases">
            <h4>Cases</h4>
            <div className={styles.imageContainer}>
              <img
                src={require("../../../images/mc/case/3 (1).jpg")}
                className={styles.imageDiv}
              />
              <img
                src={require("../../../images/mc/case/3 (2).jpg")}
                className={styles.imageDiv}
              />
              <img
                src={require("../../../images/mc/case/3 (4).jpg")}
                className={styles.imageDiv}
              />
              <img
                src={require("../../../images/mc/case/3 (5).jpg")}
                className={styles.imageDiv}
              />
            </div>
          </Link>
        </article>
      </section>
    </LayoutTwo>
  );
};

export default ProductsPage;
