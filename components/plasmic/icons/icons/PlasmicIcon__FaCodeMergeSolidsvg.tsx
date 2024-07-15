// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaCodeMergeSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaCodeMergeSolidsvgIcon(props: FaCodeMergeSolidsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 448 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M80 56a24 24 0 110 48 24 24 0 110-48zm32.4 97.2c28-12.4 47.6-40.5 47.6-73.2 0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3v205.4C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V272c26.7 20.1 60 32 96 32h86.7c12.3 28.3 40.5 48 73.3 48 44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48H208c-49.9 0-91-38.1-95.6-86.8zM80 408a24 24 0 110 48 24 24 0 110-48zm264-136a24 24 0 1148 0 24 24 0 11-48 0z"
        }
      ></path>
    </svg>
  );
}

export default FaCodeMergeSolidsvgIcon;
/* prettier-ignore-end */