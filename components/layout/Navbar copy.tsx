import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Navbar.module.scss";
import { IconPhone, IconCart } from "../../icons/icons";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const router = useRouter();
  let toggleMenu = menuOpened ? styles.opened : "";

  const handleScroll = (menu: string) => {
    router.push(`/#${menu}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav className={`${styles.nav} ${toggleMenu}`}>
          <div
            className={styles.menuIcon}
            onClick={() => setMenuOpened(!menuOpened)}
            aria-label="Open the menu"
          >
            <span></span>
          </div>
          <ul>
            <li onClick={() => handleScroll("about")}>About</li>
            <li onClick={() => handleScroll("menu")}>Menu</li>
            <li onClick={() => handleScroll("contact")}>Contact</li>
          </ul>
        </nav>
        <div className={styles.logo}>
          <div className={styles.logoDefault}>
            <Link href="/">
              <Image
                src="/img/pokebowl-logo.png"
                title="Poke Bowl Logo"
                alt="Poke Bowl Logo"
                layout="fill"
              />
            </Link>
          </div>
          <div className={styles.logoHover}>
            <Link href="/">
              <Image
                src="/img/pokebowl-logo-hover.png"
                title="Poke Bowl Logo"
                alt="Poke Bowl Logo"
                layout="fill"
              />
            </Link>
          </div>
        </div>
        <div className={styles.cart}>
          <Link href="/cart">
            <a>
              <IconCart />
            </a>
          </Link>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
