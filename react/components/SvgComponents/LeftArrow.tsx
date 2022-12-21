import React from "react"
import { SVGProps } from "react"

const LeftSvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
    <path
      d="M14 23.992h28M26 36 14 24l12-12M5 36V12"
      stroke="#4b4b4b"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export { LeftSvgComponent }
