// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeBitcoinsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeBitcoinsvgIcon(props: PeBitcoinsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.52 13.67c-.27 1.09-2.1.5-2.7.35l.48-1.93c.6.15 2.5.44 2.22 1.58zm-1.56-4.22l-.44 1.75c.5.12 2.03.63 2.28-.36.25-1.03-1.34-1.27-1.84-1.39zm7.8 4.48c-1.07 4.28-5.41 6.89-9.7 5.83-4.28-1.07-6.9-5.41-5.83-9.69 1.07-4.29 5.41-6.89 9.7-5.83 4.28 1.07 6.9 5.41 5.83 9.69zm-10.39-.59c-.04.11-.15.27-.4.21-.04 0-.64-.16-.64-.16l-.44 1 1.14.28c.22.06.42.11.63.17l-.36 1.45.87.22.36-1.44c.24.07.47.12.7.18l-.36 1.43.88.22.36-1.45c1.5.28 2.63.17 3.1-1.19.38-1.09-.02-1.72-.81-2.13.57-.13 1-.51 1.12-1.29.16-1.06-.65-1.64-1.76-2.01l.36-1.45-.88-.22-.35 1.4c-.23-.06-.47-.11-.71-.17l.35-1.41-.87-.22-.36 1.44c-.19-.04-.38-.09-.56-.13l-1.21-.31-.23.94s.64.15.64.16c.35.09.41.32.41.51l-.99 3.95.01.02z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PeBitcoinsvgIcon;
/* prettier-ignore-end */