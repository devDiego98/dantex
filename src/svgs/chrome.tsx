import type { CSSProperties, SVGProps } from "react";

export default function ChromeSvg(props: SVGProps<SVGSVGElement>) {
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
        d="M 18 36 C 8.059 36 0 27.941 0 18 C 0 8.059 8.059 0 18 0 C 27.941 0 36 8.059 36 18 L 23.841 18 C 23.84 14.776 21.226 12.162 18.001 12.163 C 14.777 12.163 12.163 14.777 12.163 18.001 C 12.162 21.226 14.776 23.84 18 23.841 Z M 12.6 12.6 L 5.4 5.4 M 25.2 18 L 36 18 M 18 25.2 L 18 36 M 10.8 18 C 10.8 14.024 14.024 10.8 18 10.8 C 21.976 10.8 25.2 14.024 25.2 18 C 25.2 21.976 21.976 25.2 18 25.2 C 14.024 25.2 10.8 21.976 10.8 18 Z M 0 18 C 0 8.059 8.059 0 18 0 C 27.941 0 36 8.059 36 18 C 36 27.941 27.941 36 18 36 C 8.059 36 0 27.941 0 18 Z"
        fill="transparent"
        height="35.99999967736798px"
        id="OY_QCqcOh"
        transform="translate(1.93 2.052) rotate(1 18 18)"
        width="35.999999723716826px"
      >
        <g opacity="0.2">
          <path
            d="M 18 36 C 8.059 36 0 27.941 0 18 C 0 8.059 8.059 0 18 0 C 27.941 0 36 8.059 36 18 L 23.841 18 C 23.84 14.776 21.226 12.162 18.001 12.163 C 14.777 12.163 12.163 14.777 12.163 18.001 C 12.162 21.226 14.776 23.84 18 23.841 Z"
            fill="var(--1xd7i1b, var(--token-019d6403-e4d9-4bb5-a03c-838bbc44d3f7, rgb(0, 96, 96)))"
            height="35.99999967736798px"
            id="v9Gn_oDrR"
            width="35.999999718744164px"
          ></path>
        </g>
        <path
          d="M 7.2 7.2 L 0 0 M 19.8 12.6 L 30.6 12.6 M 12.6 19.8 L 12.6 30.6"
          fill="transparent"
          height="30.59999915151215px"
          id="Zssq4gfv4"
          stroke="var(--wvx9zi, var(--token-427e2ca6-3ebc-422d-b39c-d55ce8dc33b1, rgb(71, 132, 133)))"
          stroke-dasharray="31.782339096069336 31.782339096069336"
          stroke-linecap="round"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-width="var(--1nka5qh, 2)"
          transform="translate(5.4 5.4)"
          width="30.599999151512236px"
          stroke-dashoffset="0"
        ></path>
        <path
          d="M 0 7.2 C 0 3.224 3.224 0 7.2 0 C 11.176 0 14.4 3.224 14.4 7.2 C 14.4 11.176 11.176 14.4 7.2 14.4 C 3.224 14.4 0 11.176 0 7.2 Z"
          fill="transparent"
          height="14.399999885935557px"
          id="vGdZFrjbu"
          stroke="var(--wvx9zi, var(--token-427e2ca6-3ebc-422d-b39c-d55ce8dc33b1, rgb(71, 132, 133)))"
          stroke-dasharray="45.244503021240234 45.244503021240234"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-width="var(--1nka5qh, 2)"
          transform="translate(10.8 10.8)"
          width="14.399999885935529px"
          stroke-dashoffset="0"
        ></path>
        <path
          d="M 0 18 C 0 8.059 8.059 0 18 0 C 27.941 0 36 8.059 36 18 C 36 27.941 27.941 36 18 36 C 8.059 36 0 27.941 0 18 Z"
          fill="transparent"
          height="35.99999967736798px"
          id="RAaMD1KqJ"
          stroke="var(--wvx9zi, var(--token-427e2ca6-3ebc-422d-b39c-d55ce8dc33b1, rgb(71, 132, 133)))"
          stroke-dasharray="113.11304473876953 113.11304473876953"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-width="var(--1nka5qh, 2)"
          width="35.999999718744164px"
          stroke-dashoffset="0"
        ></path>
      </g>
    </svg>
  );
}
