import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchIcon = () => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="m17 17 4 4"
      stroke="#CCC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      stroke="#CCC"
      strokeWidth={2}
    />
  </Svg>
);
export default SearchIcon;
