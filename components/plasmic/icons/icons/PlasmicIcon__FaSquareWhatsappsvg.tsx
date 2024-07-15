// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaSquareWhatsappsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaSquareWhatsappsvgIcon(props: FaSquareWhatsappsvgIconProps) {
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
          "M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4.9-47.5-9.9-36.8-15.9-61.8-51.5-66.9-58.7-.4-.6-.7-.9-.8-1.1-2-2.6-16.2-21.5-16.2-41 0-18.4 9-27.9 13.2-32.3.3-.3.5-.5.7-.8 3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1h.8c2.3 0 5.2 0 8.1 6.8 1.2 2.9 3 7.3 4.9 11.8 3.3 8 6.7 16.3 7.3 17.6 1 2 1.7 4.3.3 6.9-3.4 6.8-6.9 10.4-9.3 13-3.1 3.2-4.5 4.7-2.3 8.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8.4 1.5.7 2.1 1 2.8 1.4 4.7 2.3 5.5 3.6.9 1.9.9 9.9-2.4 19.1-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5-26.6 0-52.7-6.7-75.8-19.3z"
        }
      ></path>
    </svg>
  );
}

export default FaSquareWhatsappsvgIcon;
/* prettier-ignore-end */
