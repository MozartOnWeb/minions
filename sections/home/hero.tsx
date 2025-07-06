"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import styles from "./styles.module.scss";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className={styles.hero}>
      <img
        className={styles.image_1}
        src="https://images.pexels.com/photos/7026049/pexels-photo-7026049.jpeg"
        alt=""
      />

      <div className={styles.content}>
        <div className={styles.headings}>
          <h1>Un lieu d’épanouissement</h1>
          <h1>Pour chaque enfant</h1>
        </div>

        <p className={styles.description}>
          Notre nouvel établissement accueille vos enfants dans un cadre
          moderne, sécurisé et bienveillant. Grâce à une équipe attentionnée et
          à des services adaptés, y compris un accompagnement spécialisé pour
          les besoins particuliers, nous plaçons leur bien-être et leur
          développement au cœur de notre mission. Ensemble pour progresser.
        </p>

        <div className={styles.buttons}>
          <button>Programmes</button>
          <button>Préinscription</button>
        </div>
      </div>

      <img
        className={styles.image_2}
        src="https://images.pexels.com/photos/6966341/pexels-photo-6966341.jpeg"
        alt=""
      />
    </div>
  );
};

export default Hero;
