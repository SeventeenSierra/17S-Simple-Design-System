// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaHSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaHSolidsvgIcon(props: FaHSolidsvgIconProps) {
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
          "M320 256v192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H64V64c0-17.7-14.3-32-32-32S0 46.3 0 64v384c0 17.7 14.3 32 32 32s32-14.3 32-32V256h256z"
        }
      ></path>
    </svg>
  );
}

export default FaHSolidsvgIcon;
/* prettier-ignore-end */
