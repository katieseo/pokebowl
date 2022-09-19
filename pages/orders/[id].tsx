import styles from "../../styles/Order.module.scss";
import Image from "next/image";

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.customerInfo}>
          <div className={styles.item}>
            <h3>Order ID: 123456</h3>
            <p>Name: John Doe</p>
            <p>Address: Elton st. 212-33 LA</p>
            <div className={styles.orderDetails}>
              <h4>Order Details:</h4>
              <p>Honoruru x1</p>
            </div>
          </div>
        </div>
        <div className={styles.orderInfo}>
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
          <button>PAID</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
