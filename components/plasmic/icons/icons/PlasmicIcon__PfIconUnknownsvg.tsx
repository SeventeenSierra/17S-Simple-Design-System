// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconUnknownsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconUnknownsvgIcon(props: PfIconUnknownsvgIconProps) {
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
          "M520.923 1097.362c-53.467 0-94.135-16.896-131.438-54.199l-332.8-332.142C19.163 673.499 1.389 633.343-.001 584.63c-1.609-64.439 32.475-98.523 59.685-125.952l324.315-326.144c25.6-25.6 67.218-59.465 133.705-59.465h2.267c58.734.658 96.475 30.427 128.658 62.391l320.439 323.657c44.544 50.542 53.979 79.799 54.199 126.171.439 59.173-12.581 83.237-53.467 126.83l-322.267 323.438c-26.77 26.77-60.123 60.123-120.247 61.513-2.048.219-4.315.219-6.363.219zm-8.704-894.39c-13.239 0-20.334 5.047-36.352 19.163L146.724 549.01c-21.943 21.943-21.943 29.257-21.723 37.23.439 13.239 5.486 19.675 21.065 35.182l329.582 329.582c13.239 12.361 19.456 18.505 36.133 18.505 17.847 0 25.819-6.656 38.4-18.066L878.154 622.3c21.943-21.943 20.773-22.821 20.773-36.571 0 0 .439-16.018-21.723-37.522L547.622 220.454c-21.065-16.457-26.99-17.627-35.401-17.627-.439 0 .219 0 0 0zm71.534 446.171c22.162-8.923 39.058-18.066 55.735-32.695 16.457-14.409 29.477-29.038 39.058-48.421 9.582-19.237 14.409-34.962 14.409-56.027s-4.827-40.667-14.409-59.173-22.601-34.523-39.058-48.201-35.913-24.43-58.075-32.475c-22.162-7.973-45.714-7.314-70.656-7.314-75.63 0-122.075 16.018-144.896 48.201s-35.182 60.123-37.522 93.038c0 3.438 1.39 5.705 3.877 6.875s5.925 1.829 9.801 1.829h87.113c2.341 0 5.047-.439 7.973-1.829 3.218-1.17 6.363-3.657 6.363-7.753-.219-23.552 23.771-29.696 67.218-29.915 38.619-.219 74.021 10.313 74.021 36.791 0 13.019-5.486 25.381-16.677 37.01s-40.887 18.066-57.344 19.237c-17.115 1.17-35.401 4.096-50.542 8.923s-22.601 17.115-22.601 37.01v29.038c0 7.973 2.048 13.019 5.925 15.287 3.877 2.267 10.021 3.438 17.847 3.438h51.419c24.942.439 48.713-4.096 70.875-12.8zm2.268 99.401c0-2.487-.439-4.535-1.39-6.437s-2.048-3.657-3.218-5.486c-1.829-1.829-3.657-3.218-5.486-4.096s-4.096-1.39-6.363-1.39h-115.2c-2.487 0-4.535.439-6.363 1.39s-3.657 2.267-5.486 4.096c-1.17 1.829-2.267 3.657-3.218 5.486s-1.39 4.096-1.39 6.437v74.971c0 2.487.439 4.827 1.39 6.875s2.048 3.877 3.218 5.047c1.829 1.829 3.657 3.218 5.486 4.096s4.096 1.39 6.363 1.39h115.2c2.487 0 4.535-.439 6.363-1.39s3.657-2.267 5.486-4.096c1.17-1.17 2.267-2.999 3.218-5.047s1.39-4.535 1.39-6.875v-74.971z"
        }
      ></path>
    </svg>
  );
}

export default PfIconUnknownsvgIcon;
/* prettier-ignore-end */