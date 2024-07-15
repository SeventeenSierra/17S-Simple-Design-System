// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconServiceCatalogsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconServiceCatalogsvgIcon(
  props: PfIconServiceCatalogsvgIconProps
) {
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
          "M172.16 916.236c79.573-8.96 188.373 3.84 305.707 80.213v66.56S204.8 916.449 102.4 1060.876c0 0-99.627 19.2-102.4-61.867V239.542s0-61.867 68.267-64v818.773s41.173-72.32 103.893-78.08zm299.947-58.026c-5.973 0-11.947-4.693-12.8-10.667l-7.04-91.307c-11.307-3.413-12.16-2.987-22.4-8.107l-63.147 58.88c-2.133 2.133-5.547 2.987-8.533 2.987-3.413 0-6.4-1.28-8.96-3.413-11.093-10.24-61.653-56.107-61.653-68.48 0-2.987 1.28-5.547 2.987-8.107 12.373-16.213 43.733-51.84 56.107-68.48-5.973-11.733-5.12-7.893-8.96-19.84l-89.6-5.76c-5.973-.853-10.24-6.4-10.24-12.373V544.61c0-5.547 4.267-11.947 9.813-12.8l88.747-4.267c3.413-11.307 2.56-16.213 8.107-26.88-11.947-17.067-41.6-44.8-55.253-61.013-1.707-2.56-2.987-5.547-2.987-8.533s.853-5.973 2.987-8.533c8.533-11.52 56.533-63.36 68.907-63.36 3.413 0 6.4 1.28 8.96 2.987l65.92 57.813c10.88-5.547 9.813-6.4 21.333-10.24 2.133-21.547-.64-67.84 4.907-88.747 1.707-5.973 6.827-10.24 12.8-10.24h3.627v-66.133c-111.36-71.68-255.787-120.533-339.2-136.107v757.12c61.227-16.853 112.213-12.373 205.653 4.267 49.92 8.747 103.467 49.067 133.547 56.32v-68.053h-3.627zm379.733 58.026c-79.573-8.96-188.373 3.84-305.707 80.213v66.56s273.067-146.56 375.467-2.133c0 0 99.627 19.2 102.4-61.867V239.542s0-61.867-68.267-64v818.773s-41.173-72.32-103.893-78.08zM551.893 858.21c5.973 0 11.947-4.693 12.8-10.667l7.04-91.307c11.307-3.413 12.16-2.987 22.4-8.107l63.147 58.88c2.133 2.133 5.547 2.987 8.533 2.987 3.413 0 6.4-1.28 8.96-3.413 11.093-10.24 61.653-56.107 61.653-68.48 0-2.987-1.28-5.547-2.987-8.107-12.373-16.213-43.733-51.84-56.107-68.48 5.973-11.733 5.12-7.893 8.96-19.84l89.6-5.76c5.973-.853 10.24-6.4 10.24-12.373V544.61c0-5.547-4.267-11.947-9.813-12.8l-88.747-4.267c-3.413-11.307-2.56-16.213-8.107-26.88 11.947-17.067 41.6-44.8 55.253-61.013 1.707-2.56 2.987-5.547 2.987-8.533s-.853-5.973-2.987-8.533c-8.533-11.52-56.533-63.36-68.907-63.36-3.413 0-6.4 1.28-8.96 2.987l-65.92 57.6c-10.88-5.547-9.813-6.4-21.333-10.24-2.133-21.547.64-67.84-4.907-88.747-1.707-5.973-6.827-10.24-12.8-10.24h-3.627v-66.133c111.36-71.467 255.787-120.32 339.2-135.893v757.12c-61.227-16.853-112.213-12.373-205.653 4.267-49.92 8.747-103.467 49.067-133.547 56.32v-68.053h3.627zm68.907-268.8c0 60.096-48.704 108.8-108.8 108.8s-108.8-48.704-108.8-108.8 48.704-108.8 108.8-108.8 108.8 48.704 108.8 108.8z"
        }
      ></path>
    </svg>
  );
}

export default PfIconServiceCatalogsvgIcon;
/* prettier-ignore-end */
