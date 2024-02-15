import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Arrow = ({color}) => (
  <Svg width={12} height={9} xmlns="http://www.w3.org/2000/svg" fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M7.25 1 11 5m0 0L7.25 9M11 5H1"
    />
  </Svg>
)
export default Arrow
