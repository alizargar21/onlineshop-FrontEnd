import Layout from "../../Layout/Layout";
import BannerComponent from "../../../components/Banner/Banner";
import Landing from "../../../components/Landing/Landing";
import OfferBox from "../../../components/OfferBox/OfferBox";
import Possibilities from "../../../components/Possibilities/Possibilities";
import Background from "../../../components/background/Background";
import SpecialOffer from "../../../components/SpecialOffer/SpecialOffer";

const HomePage = ({ products }) => {
  return (
    <Layout>
      <Landing />

      <SpecialOffer data={products} />
      <Background />
      <OfferBox products={products} />
      <Possibilities />
    </Layout>
  );
};

export default HomePage;
