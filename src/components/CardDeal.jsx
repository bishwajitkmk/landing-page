import React from "react";
import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => {
  return (
    <>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Find a better card deal <br className="sm:block hidden" /> in few
            easy steps.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            doloremque voluptatum nisi illo repellendus dolor ullam placeat
            provident. Ab, optio!
          </p>
          <Button styles="mt-10" text="Get Started" />
        </div>
        <div className={layout.sectionImg}>
          <img
            src={card}
            alt="card"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default CardDeal;
