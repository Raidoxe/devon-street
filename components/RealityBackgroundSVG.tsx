"use client";

import styles from "/app/page.module.css";
import { useSpring, animated, useInView } from "@react-spring/web";

export default function RealityBackgroundSVG() {
  const [ref, springs] = useInView(
    () => ({
      from: { fill: "#000" },
      to: { fill: "#fff" },
    }),
    { amount: 0.8 }
  );

  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1921 1081.52"
      ref={ref}
    >
      <rect
        className={styles.cls1}
        x="733.5"
        y="313.76"
        width="453"
        height="453"
      />
      <image
        width="3000"
        height="3000"
        transform="translate(733.5 313.76) scale(.15)"
        href="/AlbumPhoto18bit.png"
      />
      <animated.polygon
        points=".5 .76 733.5 313.76 733.5 766.76 .5 1080.76 .5 .76"
        style={{
          stroke: "#fff",
          strokeMiterlimit: 10,
          ...springs,
        }}
      />
      <animated.polygon
        points="1186.5 313.76 1920.5 .76 1920.5 1080.76 1186.5 766.76 1186.5 313.76"
        style={{
          stroke: "#fff",
          strokeMiterlimit: 10,
          ...springs,
        }}
      />
      <text className={styles.cls3} transform="translate(51.21 326.86)">
        <tspan x="0" y="0">
          D
        </tspan>
        <tspan x="0" y="30">
          {" "}
        </tspan>
        <tspan x="0" y="37.5">
          E
        </tspan>
        <tspan x="0" y="67.5">
          {" "}
        </tspan>
        <tspan x="0" y="75">
          V
        </tspan>
        <tspan x="0" y="105">
          {" "}
        </tspan>
        <tspan x="0" y="112.5">
          O
        </tspan>
        <tspan x="0" y="142.5">
          {" "}
        </tspan>
        <tspan x="0" y="150">
          N
        </tspan>
        <tspan x="0" y="180">
          {" "}
        </tspan>
        <tspan x="0" y="202.5">
          S
        </tspan>
        <tspan x="0" y="232.5">
          {" "}
        </tspan>
        <tspan x="0" y="240">
          T
        </tspan>
        <tspan x="0" y="270">
          {" "}
        </tspan>
        <tspan x="0" y="277.5">
          R
        </tspan>
        <tspan x="0" y="307.5">
          {" "}
        </tspan>
        <tspan x="0" y="315">
          E
        </tspan>
        <tspan x="0" y="345">
          {" "}
        </tspan>
        <tspan x="0" y="352.5">
          E
        </tspan>
        <tspan x="0" y="382.5">
          {" "}
        </tspan>
        <tspan x="0" y="390">
          T
        </tspan>
      </text>
    </svg>
  );
}
