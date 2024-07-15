// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PfIconDomainsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PfIconDomainsvgIcon(props: PfIconDomainsvgIconProps) {
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
          "M866.971 501.257c7.086-7.086 10.743-15.771 10.743-25.829V109.942c0-9.829-3.657-18.286-10.971-26.057-7.086-7.086-15.771-10.743-25.829-10.743h-219.2c-9.829 0-18.286 3.657-25.829 10.971-7.086 7.086-10.743 15.771-10.743 25.829v365.486c0 9.829 3.429 18.286 10.743 25.829 7.086 7.086 15.771 10.743 25.829 10.743h219.429c9.829 0 18.514-3.429 25.829-10.743zm-62.4-135.543H658.285v-73.143h146.286v73.143zm0-146.285h-73.143v-73.143h73.143v73.143zM548.343 585.143h-219.2c-9.829 0-18.286 3.657-25.829 10.971-7.086 7.086-10.743 15.771-10.743 25.6v439.314c0 9.829 3.429 18.286 10.743 25.6 7.086 7.086 15.771 10.743 25.829 10.743h219.429c9.829 0 18.286-3.429 25.829-10.743 7.086-7.086 10.743-15.771 10.743-25.6V621.485c0-9.829-3.657-18.286-10.971-25.829-7.086-6.857-16-10.514-25.829-10.514zM512 877.714H365.714v-73.143H512v73.143zm0-146.285h-73.143v-73.143H512v73.143zM512 1024H365.714v-73.143H512V1024zM292.571 109.943c0-9.829-3.657-18.514-10.971-26.057-7.086-7.086-15.771-10.743-25.6-10.743H36.114c-9.829 0-18.286 3.657-25.6 10.971C3.657 91.428 0 100.114 0 109.943v292.343c0 9.829 3.429 18.514 10.743 25.829 7.086 7.086 15.771 10.743 25.6 10.743h220.114c9.829 0 18.286-3.429 25.6-10.743 7.086-7.086 10.743-15.771 10.743-25.829V109.943zm-73.142 255.771H73.143v-73.143h146.286v73.143zm0-146.285h-73.143v-73.143h73.143v73.143zM512 216v-66.743h-1.6c-50.743 0-99.429 8.686-144.686 24.457v72C410.057 226.743 458.971 216 510.4 216h1.6zM150.857 511.772H79.543c-4.114 24.229-6.4 49.371-6.4 74.971 0 129.829 56.457 246.4 146.286 326.4V805.714C172.115 744 144 666.743 144 582.857c0-24.229 2.286-48 6.857-71.086zm653.714 289.6v108.571c88-80 143.314-195.2 143.314-323.657v-.914h-70.857c-.686 81.143-27.429 155.657-72.457 216zm146.286-656.229H1024V440h-73.143V145.143zM658.286 658.286h73.143V1024h-73.143V658.286z"
        }
      ></path>
    </svg>
  );
}

export default PfIconDomainsvgIcon;
/* prettier-ignore-end */