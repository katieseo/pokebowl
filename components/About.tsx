import { motion } from "framer-motion";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className={styles.content}
      >
        <div className={styles.intro}>
          <h2>The Best Poke in Town</h2>
          <p>
            Poke Bowl is a healthy fast casual restaurant that offers a broad
            selection of freshly and daily prepared raw fish or grilled meat in
            grain, noodle or salad bowl.
          </p>
          <p className={styles.deco}>Fresh + Healthy + Tasty</p>
          <p>
            We are committed to deliver the faithful quality of our food,
            service, people and profit, while taking extraordinary care of our
            guests and staff. We will strive to be recognized as a leader of the
            service industry by consciously focusing on our continuous
            improvement. We will provide a clean and well-maintained environment
            for our guests to enjoy. We will ensure that all guests and staff
            are treated with respect. We will dedicate ourselves to communicate
            and motivate our staff to build a place where they can come to work
            with happiness and fun.
          </p>
        </div>
        <div className={styles.contact}>
          <h3>Located in:</h3>
          <p> 2116 Blanshard Victoria, BC V8W 2H9</p>
          <h3>Phone:</h3>
          <p>250-812-8900</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
