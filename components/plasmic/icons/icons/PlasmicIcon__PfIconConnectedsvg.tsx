// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconConnectedsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconConnectedsvgIcon(props: PfIconConnectedsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 64 1024 1024"}
      aria-hidden={"true"}
      role={"img"}
      style={{
        verticalAlign: '-.125em"',

        ...(style || {}),
      }}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M300.48 776.846c-14.377 0-28.526-6.766-37.417-19.406-35.543-50.514-54.331-109.966-54.331-171.931 0-61.897 18.743-121.303 54.24-171.794 14.514-20.663 43.04-25.646 63.68-11.109 20.663 14.514 25.646 43.04 11.109 63.68-24.594 35.017-37.6 76.229-37.6 119.223 0 43.017 13.029 84.297 37.691 119.314 14.537 20.64 9.577 49.166-11.086 63.703-8.023 5.623-17.211 8.32-26.286 8.32zm421.257.32c-9.12 0-18.309-2.72-26.331-8.366-20.617-14.56-25.531-43.086-10.971-63.703 24.777-35.086 37.851-76.434 37.851-119.566 0-43.429-13.257-85.029-38.331-120.251-14.651-20.571-9.829-49.12 10.72-63.749 20.571-14.629 49.12-9.829 63.749 10.72 36.16 50.811 55.291 110.72 55.291 173.28 0 62.126-18.88 121.714-54.606 172.297-8.891 12.594-23.017 19.337-37.371 19.337zm-99.703-192.343c0 60.777-49.257 110.034-110.034 110.034S401.966 645.6 401.966 584.823 451.223 474.789 512 474.789s110.034 49.257 110.034 110.034zm240.663 346.606c-12.366 0-24.8-4.251-34.949-12.937-22.514-19.314-25.12-53.211-5.806-75.749 61.463-71.68 95.314-163.269 95.314-257.829 0-95.611-34.514-187.954-97.189-260-19.474-22.377-17.12-56.32 5.28-75.771 22.377-19.474 56.297-17.12 75.771 5.28 79.68 91.589 123.566 208.96 123.566 330.514 0 120.206-43.04 236.617-121.189 327.771-10.606 12.366-25.646 18.72-40.8 18.72zm-699.223 3.04c-14.971 0-29.874-6.217-40.48-18.4C42.948 824.389-1.143 706.766-1.143 584.915c0-84.731 21.463-168.549 62.057-242.4a505.682 505.682 0 0161.509-88.114c19.474-22.377 53.394-24.731 75.771-5.28s24.731 53.394 5.28 75.771a397.367 397.367 0 00-48.434 69.371c-31.886 58.034-48.754 123.977-48.754 190.651 0 95.863 34.674 188.389 97.623 260.503 19.52 22.354 17.211 56.274-5.143 75.794-10.171 8.891-22.766 13.257-35.291 13.257z"
        }
      ></path>
    </svg>
  );
}

export default PfIconConnectedsvgIcon;
/* prettier-ignore-end */
