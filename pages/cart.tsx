import Link from "next/link";
import styles from "../styles/Cart.module.scss";
import Image from "next/image";

const cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.summary}>
          <div className={styles.item}>
            <Image
              src="/img/1.jpeg"
              alt="honolulu"
              height="100px"
              width="150px"
            />
            <div className={styles.itemInfo}>
              <h3>Honolulu</h3>
              <p>Size: Regular</p>
              <p>Qty: 2</p>
            </div>
            <div className={styles.itemPrice}>$16</div>
            <div className={styles.itemDelete}>X</div>
          </div>
          <div className={styles.item}>
            <Image
              src="/img/1.jpeg"
              alt="honolulu"
              height="100px"
              width="150px"
            />
            <div className={styles.itemInfo}>
              <h3>Honolulu</h3>
              <p>Size: Regular</p>
              <p>Qty: 2</p>
            </div>
            <div className={styles.itemPrice}>$16</div>
            <div className={styles.itemDelete}>X</div>
          </div>
        </div>
        <div className={styles.checkout}>
          <div className={styles.wrapper}>
            <h2>Cart Total</h2>
            <div className={styles.priceInfo}>
              <p>
                <b>Subtotal:</b> <span>$79.60</span>
              </p>
              <p>
                <b>Discount:</b> <span>$0.00</span>
              </p>
              <p className={styles.total}>
                <b>Total:</b> <span>$79.60</span>
              </p>
            </div>
            <Link href="/orders/1.tsx">
              <button>Check Out</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
