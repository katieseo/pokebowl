import styles from "../styles/Menu.module.scss";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menus = [
    {
      id: 1,
      img: "1.jpeg",
      title: "HONOLULU DREAM",
      description:
        "MARINATED SALMON, AHI TUNA, CRABMEAT, CUCUMBER, AVOCADO, CARROT, TAMAGO, GREEN ONION, FURIKAKE, SPICY MAYO, UNAGI SAUCE",
      price: 16,
    },
    {
      id: 2,
      img: "2.jpeg",
      title: "ISLAND DYNAMITE",
      description:
        "SPICY TUNA, BABY SHRIMP, CRABMEAT, CUCUMBER, AVOCADO, CORN, MASAGO, GREEN ONION, NORI FLAKE, CRUNCH, SPICY CHOJANG, GARLIC UMAMI, MISO AIOLI",
      price: 16,
    },
    {
      id: 3,
      img: "3.jpeg",
      title: "HAWAIIAN BREEZE",
      description:
        "AHI TUNA, TAKO, WAKAME, PINEAPPLE, CARROT, JALAPENO, EDAMAME, TOBIKO, GARLIC UMAMI, SPICY MAYO, PONZU",
      price: 17,
    },
    {
      id: 4,
      img: "4.jpeg",
      title: "DRAGON BOWL",
      description:
        "BBQ EEL, SALMON, TAMAGO, GRAPE TOMATO, CARROT, CUCUMBER, PURPLE CABBAGE, TOBIKO, RAMEN EGGS, GREEN ONION, NORI FLAKE, WASABI MAYO, SPICY MAYO, UNAGI SAUCE",
      price: 17,
    },
    {
      id: 5,
      img: "5.jpeg",
      title: "OSAKA ABURI",
      description:
        "SEARED SALMON, ROASTED SCALLOPS, CUCUMBER, ONIONS, PURPLE CABBAGE, MASAGO, RAMEN EGGS GREEN ONION, NORI FLAKE GARLIC UMAMI, SPICY MAYO, SPICY CHOJANG",
      price: 18,
    },
    {
      id: 6,
      img: "6.jpeg",
      title: "MAUI CHIRASHI",
      description:
        "SALMON, TUNA, TAKO, SCALLOP, SHRIMP, CUCUMBER, ONION, CARROT, TAMAGO, TOBIKO, NORI FLAKE, GREEN ONION, NORI FLAKE, SPICY CHOJANG, GARLIC UMAMI",
      price: 23,
    },
  ];

  return (
    <div className={styles.container} id="menu">
      <div className={styles.content}>
        <h2 className={styles.title}>Menus</h2>
        <div className={styles.wrapper}>
          {menus.map((menu) => (
            <MenuItem menu={menu} key={menu.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
