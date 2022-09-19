import React, { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "../icons/icons";
import styles from "../styles/Featured.module.scss";
import Image from "next/image";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  const images = ["/img/f2.jpeg", "/img/f4.jpeg", "/img/f2566.jpeg"];
  let moved = false;

  const handleArrow = (dir: "prev" | "next") => {
    if (dir === "prev") {
      setIndex(index === 0 ? images.length - 1 : index - 1);
    } else if (dir === "next") {
      setIndex(index === images.length - 1 ? 0 : index + 1);
    }
  };

  const handleSlide = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    action: "down" | "up" | "move"
  ) => {
    let slideStartX = 0;
    let movedX = 0;

    if (action === "down") {
      setPressed(true);
      slideStartX = e.clientX;
    } else if (action === "up") {
      setPressed(false);
      if (moved) {
        movedX = e.clientX;
        if (slideStartX > movedX) {
          handleArrow("prev");
          moved = false;
        } else {
          handleArrow("next");
          moved = false;
        }
      }
    } else if (action === "move") {
      e.preventDefault();
      moved = true;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.arrowLeft} onClick={() => handleArrow("prev")}>
          <IconArrowLeft />
        </div>
        <div
          className={styles.wrapper}
          style={{
            transform: `translateX(${-100 * index}vw)`,
            cursor: pressed ? "grabbing" : "auto",
          }}
          onMouseDown={(e) => handleSlide(e, "down")}
          onMouseUp={(e) => handleSlide(e, "up")}
          onMouseMove={(e) => handleSlide(e, "move")}
        >
          {images.map((img, i) => {
            return (
              <div className={styles.featureImg} key={i}>
                <Image src={img} layout="fill" alt="feture images" priority />
              </div>
            );
          })}
        </div>
        <div className={styles.arrowRight} onClick={() => handleArrow("next")}>
          <IconArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Featured;
