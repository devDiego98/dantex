import type { CSSProperties, SVGProps } from "react";

export default function BimSvg(props: SVGProps<SVGSVGElement>) {
  const { style, ...rest } = props;
  return (
    <svg
      data-framer-name="Chart 1"
      {...rest}
      role="presentation"
      viewBox="0 0 40 40"
      style={{
        ...({
          "--1nka5qh": 0.5,
          "--1xd7i1b": "rgb(255, 255, 255)",
          "--wvx9zi": "rgb(255, 255, 255)",
        } as CSSProperties),
        transform: "perspective(1200px)",
        ...style,
      }}
    >
      <g
        d="M 5.333 0 L 16 0 C 20.412 0 21.333 0.932 21.333 5.4 L 21.333 36 L 15.111 36 L 15.111 28.8 C 15.111 27.103 15.111 26.255 14.59 25.727 C 14.069 25.2 13.232 25.2 11.556 25.2 L 9.778 25.2 C 8.101 25.2 7.264 25.2 6.743 25.727 C 6.222 26.255 6.222 27.103 6.222 28.8 L 6.222 36 L 0 36 L 0 5.4 C 0 0.932 0.921 0 5.333 0 Z M 16 0 L 5.333 0 C 0.921 0 0 0.932 0 5.4 L 0 36 L 21.333 36 L 21.333 5.4 C 21.333 0.932 20.412 0 16 0 Z M 26.667 10.8 L 21.333 10.8 L 21.333 36 L 32 36 L 32 16.2 C 32 11.732 31.079 10.8 26.667 10.8 Z M 8.889 7.2 L 12.444 7.2 M 8.889 12.6 L 12.444 12.6 M 8.889 18 L 12.444 18 M 15.111 36 L 15.111 28.8 C 15.111 27.103 15.111 26.255 14.59 25.727 C 14.069 25.2 13.232 25.2 11.556 25.2 L 9.778 25.2 C 8.101 25.2 7.264 25.2 6.743 25.727 C 6.222 26.255 6.222 27.103 6.222 28.8 L 6.222 36"
        fill="transparent"
        height="36.000000241655414px"
        id="E2aptZRNe"
        transform="translate(4 2)"
        width="32.00000036983448px"
      >
        <g opacity="0.2">
          <path
            d="M 5.333 0 L 16 0 C 20.412 0 21.333 0.932 21.333 5.4 L 21.333 36 L 15.111 36 L 15.111 28.8 C 15.111 27.103 15.111 26.255 14.59 25.727 C 14.069 25.2 13.232 25.2 11.556 25.2 L 9.778 25.2 C 8.101 25.2 7.264 25.2 6.743 25.727 C 6.222 26.255 6.222 27.103 6.222 28.8 L 6.222 36 L 0 36 L 0 5.4 C 0 0.932 0.921 0 5.333 0 Z"
            fill="var(--1xd7i1b, var(--token-019d6403-e4d9-4bb5-a03c-838bbc44d3f7, rgb(0, 96, 96)))"
            height="35.99999826238647px"
            id="RczqbPbMm"
            width="21.333332801436597px"
          ></path>
        </g>
        <path
          d="M 16 0 L 5.333 0 C 0.921 0 0 0.932 0 5.4 L 0 36 L 21.333 36 L 21.333 5.4 C 21.333 0.932 20.412 0 16 0 Z M 26.667 10.8 L 21.333 10.8 L 21.333 36 L 32 36 L 32 16.2 C 32 11.732 31.079 10.8 26.667 10.8 Z"
          fill="transparent"
          height="35.99999826238647px"
          id="xS1ueztUs"
          stroke="var(--wvx9zi, var(--token-427e2ca6-3ebc-422d-b39c-d55ce8dc33b1, rgb(71, 132, 133)))"
          stroke-dasharray="181.64572143554688 181.64572143554688"
          stroke-linecap="butt"
          stroke-linejoin="round"
          stroke-width="var(--1nka5qh, 2)"
          width="32.00000036983448px"
          stroke-dashoffset="0"
        ></path>
        <path
          d="M 0 0 L 3.556 0 M 0 5.4 L 3.556 5.4 M 0 10.8 L 3.556 10.8"
          fill="transparent"
          height="10.800000190734863px"
          id="ZwU3yqzsv"
          stroke="var(--wvx9zi, var(--token-427e2ca6-3ebc-422d-b39c-d55ce8dc33b1, rgb(71, 132, 133)))"
          stroke-dasharray="10.668000221252441 10.668000221252441"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="var(--1nka5qh, 2)"
          transform="translate(8.889 7.2)"
          width="3.5555554555297135px"
          stroke-dashoffset="0"
        ></path>
        <path
          d="M 8.889 10.8 L 8.889 3.6 C 8.889 1.903 8.889 1.055 8.368 0.527 C 7.847 0 7.01 0 5.333 0 L 3.556 0 C 1.879 0 1.042 0 0.521 0.527 C 0 1.055 0 1.903 0 3.6 L 0 10.8"
          fill="transparent"
          height="10.79999947871596px"
          id="ux0DSsgfP"
          stroke="var(--wvx9zi, var(--token-427e2ca6-3ebc-422d-b39c-d55ce8dc33b1, rgb(71, 132, 133)))"
          stroke-dasharray="28.86264991760254 28.86264991760254"
          stroke-linecap="butt"
          stroke-linejoin="round"
          stroke-width="var(--1nka5qh, 2)"
          transform="translate(6.222 25.2)"
          width="8.888888667265235px"
          stroke-dashoffset="0"
        ></path>
      </g>
    </svg>
  );
}
