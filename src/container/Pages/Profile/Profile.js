import { useAuth } from "../../../Provider/AuthProvider";
import Layout from "../../Layout/Layout";
import styles from "./profile.module.css";
const ProfilePage = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <Layout>
      <div className={styles.profilePage}>
        <section className={styles.container}>
          <h2>Wellcome dear </h2>
          <div>
            <p><a href="">Recently visits </a></p>
            <p><a href="">Recent Orders </a></p>
            <p><a href="">Your Scores</a></p>
            <p><a href="">Your Comments</a></p>
          </div>
        </section>
        <aside className={styles.editProfile}>
          <h4>Information</h4>
          <div>
            <p>user name : ali zargar</p>
            <p>user name : mrzargar1995@gmail.com</p>
            <p>user name : 09353643914</p>
            <p>address : kokd slaadj ookdw22 3434 koqqsd</p>
          </div>
          <button className="btn">Edit Profile</button>
        </aside>
      </div>
    </Layout>
  );
};

export default ProfilePage;
