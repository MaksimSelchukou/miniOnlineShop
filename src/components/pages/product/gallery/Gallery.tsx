import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import cn from "clsx";

type GalleryType = {
  images: Array<string>;
};

export const Gallery = ({ images }: GalleryType) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  return (
    <div className={styles.gallery}>
      <img className={styles.mainImag} src={images[currentIndex]} alt={"img"} />

      <div className={styles.list}>
        {images.map((img, ind) => (
          <button
            key={img}
            className={cn(styles.galItem, {
              [styles.active]: ind === currentIndex,
            })}
            onClick={() => setCurrentIndex(ind)}
          >
            <img className={styles.image} src={img} alt={"img"} />
          </button>
        ))}
      </div>
    </div>
  );
};
