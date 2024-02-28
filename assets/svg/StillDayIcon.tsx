import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const StillDayIcon = () => (
  <Svg width={12} height={16} fill="none">
    <Mask
      id="a"
      width={12}
      height={16}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M11.333 0H0v16h11.333V0Z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#fff"
        d="M10.389 0H.944C.423 0 0 .398 0 .889c0 .49.423.889.944.889h9.445c.522 0 .944-.398.944-.89 0-.49-.422-.888-.944-.888ZM10.389 14.222H.944c-.521 0-.944.398-.944.89 0 .49.423.888.944.888h9.445c.522 0 .944-.398.944-.889 0-.49-.422-.889-.944-.889ZM9.444 2.667H1.89C.846 2.667 0 3.463 0 4.445v7.11c0 .982.846 1.778 1.889 1.778h7.555c1.044 0 1.89-.796 1.89-1.777V4.445c0-.982-.846-1.778-1.89-1.778Z"
      />
      <Path
        fill="#000"
        d="M6.135 5.333c-.01 0-.02 0-.03.002a.313.313 0 0 0-.154.055.356.356 0 0 0-.094.085L3.847 7.95a.313.313 0 0 0-.03.347.365.365 0 0 0 .32.183l1.035.007-.326 1.785a.33.33 0 0 0 .212.368.386.386 0 0 0 .142.027.338.338 0 0 0 .275-.138l2.012-2.682a.313.313 0 0 0 .03-.347.364.364 0 0 0-.319-.183l-1.035-.002.322-1.569a.3.3 0 0 0 .01-.078c0-.18-.154-.328-.348-.334h-.012Z"
      />
    </G>
  </Svg>
)
export default StillDayIcon
