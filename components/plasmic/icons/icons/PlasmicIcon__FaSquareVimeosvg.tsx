// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSquareVimeosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSquareVimeosvgIcon(props: FaSquareVimeosvgIconProps) {
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
          "M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96zM318.5 309.5c-43.5 56.5-80.3 84.8-110.4 84.8-18.7 0-34.4-17.2-47.3-51.6-3.8-13.9-7.3-26.9-10.5-39-18.2-68.3-28.6-107.4-46.2-107.4-2.4 0-10.8 5-25.1 15.1L64 192c7-6.1 13.9-12.4 20.6-18.5 29.1-26.3 55.6-50.3 73.5-51.9 24.9-2.4 40.2 14.6 46 51.1 20.5 129.6 29.6 149.2 66.8 90.5 13.4-21.2 20.6-37.2 21.5-48.3 3.4-32.8-25.6-30.6-45.2-22.2 15.7-51.5 45.8-76.5 90.1-75.1 32.9 1 48.4 22.4 46.5 64-1.4 31.1-23.2 73.8-65.3 127.9z"
        }
      ></path>
    </svg>
  );
}

export default FaSquareVimeosvgIcon;
/* prettier-ignore-end */