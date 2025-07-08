"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import styles from "./styles.module.scss";

type Props = {};

const Presentation = (props: Props) => {
  return (
    <section className={styles.presentation}>
      <img
        className={styles.image}
        src="https://images.pexels.com/photos/6337099/pexels-photo-6337099.jpeg"
        alt=""
      />

      <h2 className={styles.title}>
        Éduquer avec bienveillance, encadrer avec passion
      </h2>
      <p className={styles.description}>
        Nous croyons que chaque enfant mérite une attention unique pour révéler
        tout son potentiel. Notre école repose sur des valeurs fortes :
      </p>

      <div className={styles.values}>
        <p>Bienveillance</p>
        <p>Sécurité</p>
        <p>Excellence</p>
        <p>Inclusion</p>
      </div>
    </section>
  );
};

export default Presentation;
