// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaFileZipperRegularsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaFileZipperRegularsvgIcon(
  props: FaFileZipperRegularsvgIconProps
) {
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
          "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16h48v80c0 17.7 14.3 32 32 32h80v288c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C262.7 6.7 246.5 0 229.5 0H64zm48 112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16zm-6.3 71.8l-23.6 88.1c-1.4 5.4-2.1 10.9-2.1 16.4 0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8h-14.9c-14.5 0-27.2 9.7-30.9 23.8zM128 336h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
        }
      ></path>
    </svg>
  );
}

export default FaFileZipperRegularsvgIcon;
/* prettier-ignore-end */
