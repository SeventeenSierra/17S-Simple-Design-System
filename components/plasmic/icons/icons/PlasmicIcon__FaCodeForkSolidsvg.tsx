// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaCodeForkSolidsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaCodeForkSolidsvgIcon(props: FaCodeForkSolidsvgIconProps) {
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
          "M80 104a24 24 0 100-48 24 24 0 100 48zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32v-38.7c-28.3-12.3-48-40.5-48-73.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96h-48v70.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288h-48c-53 0-96-43-96-96v-38.7C19.7 141 0 112.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 100-48 24 24 0 100 48zM248 432a24 24 0 10-48 0 24 24 0 1048 0z"
        }
      ></path>
    </svg>
  );
}

export default FaCodeForkSolidsvgIcon;
/* prettier-ignore-end */
