// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaVSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaVSolidsvgIcon(props: FaVSolidsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 384 512"}
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
          "M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7l-160-384c-6.8-16.3.9-35 17.2-41.8z"
        }
      ></path>
    </svg>
  );
}

export default FaVSolidsvgIcon;
/* prettier-ignore-end */