import React, { useState } from "react";
import styles from "../../styles/Product.module.scss";
import Images from "next/image";
import Base from "../../components/Base";

const Product = () => {
  const [size, setSize] = useState(0);
  const [bowlBase, setBowlBase] = useState("White_Rice");
  const [qty, setQty] = useState(1);

  const poke = {
    id: 1,
    img: "/img/1.jpeg",
    name: "Honolulu Dream",
    price: [16, 19],
    description:
      "Marinated Salmon, Ahi Tuna, Crabmeat, Cucumber, Avocado, Carrot, Tamago, Green Onion, Furikake, Spicy Mayo, Unagi Sauce, Sesame Seeds",
  };

  return (
    <div className={styles.container}>
      <div className={styles.productImg}>
        <div className={styles.imgContainer}>
          <Images
            src={poke.img}
            alt={poke.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.productDetail}>
        <h2 className={styles.title}>{poke.name}</h2>
        <div className={styles.price}>$ {poke.price[size] * qty}</div>
        <div className={styles.description}>{poke.description}</div>
        <h3>Size</h3>
        <div className={styles.size}>
          <input
            type="radio"
            name="size"
            id="regularSize"
            value="regular"
            onClick={() => setSize(0)}
            checked={size === 0}
          />
          <label htmlFor="regularSize">Regular</label>
          <input
            type="radio"
            name="size"
            id="largeSize"
            value="large"
            onClick={() => setSize(1)}
            checked={size === 1}
          />
          <label htmlFor="largeSize">Large</label>
        </div>
        <h3>Choose Your Base</h3>
        <div className={styles.base}>
          <Base
            base="White_Rice"
            bowlBase={bowlBase}
            setBowlBase={setBowlBase}
          />
          <Base
            base="Sushi_Rice"
            bowlBase={bowlBase}
            setBowlBase={setBowlBase}
          />
          <Base
            base="Brown_Rice"
            bowlBase={bowlBase}
            setBowlBase={setBowlBase}
          />
          <Base
            base="Mixed_Green"
            bowlBase={bowlBase}
            setBowlBase={setBowlBase}
          />
        </div>
        <div className={styles.addToCart}>
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => {
              setQty(Number(e.target.value));
            }}
          />
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
