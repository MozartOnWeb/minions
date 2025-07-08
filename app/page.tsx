"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "@/sections/home/hero/hero";
import styles from "./page.module.scss";
import Presentation from "@/sections/home/presentation/presentation";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={styles.page}>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Presentation />
        </div>
      </div>
    </div>
  );
}
