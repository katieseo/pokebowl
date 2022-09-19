import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/MenuItem.module.scss";

type MenuType = {
  menu: {
    id: number;
    img: string;
    title: string;
    description: string;
    price: number;
  };
};

const MenuItem = ({ menu }: MenuType) => {
  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
    >
      <div className={styles.container}>
        <div className={styles.img}>
          <Image
            src={`/img/${menu.img}`}
            title={menu.title}
            alt={menu.title}
            layout="fill"
          />
        </div>
        <div className={styles.title}>
          <span>{menu.title}</span>
        </div>
        <div className={styles.description}>{menu.description}</div>
        <div className={styles.price}>${menu.price}</div>
      </div>
    </motion.div>
  );
};

export default MenuItem;
