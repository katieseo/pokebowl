import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaYelp } from "react-icons/fa";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.socialIcons}>
          <BsInstagram />
          <BsFacebook />
          <FaYelp />
        </div>
        <div className={styles.footerinfo}>
          <div className="service">
            <h3>Service options:</h3>
            Dine-in · Curbside pickup · Delivery
          </div>
          <div className="location">
            <h3>Located in:</h3>
            2116 Blanshard Victoria, BC V8W 2H9
            <h3>Phone:</h3>
            250-812-8900
          </div>
          <div className="hours">
            <h3>Hours:</h3>
            Mon-Sun 11a.m.-8p.m.
          </div>
        </div>

        <div className={styles.copyright}>
          @ 2022 <b>Poke Bowl</b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
