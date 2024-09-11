import React, { useRef } from "react";
import styles from "./styles.module.css";

const Slider = ({ children, step = 150 }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };

  const scrolRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrolRight} className={styles.arrow}>{`>`}</button>
    </div>
  );
};

export default Slider;
