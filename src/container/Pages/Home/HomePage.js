import Layout from "../../Layout/Layout";
import BannerComponent from "../../../components/Banner/Banner";

import './homepage.css'
import Landing from "../../../components/Landing/Landing";
const HomePage = () => {
  return (
    <Layout>
   
     <Landing/>
      <BannerComponent/>
      <BannerComponent/>
    </Layout>
  );
};

export default HomePage;
