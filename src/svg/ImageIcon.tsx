import * as React from "react";
import Svg, { Defs, Path, G, Mask, Use, Rect } from "react-native-svg";
const ImageIcon = (props: any) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    {...props}
  >
    <Defs>
      <Path
        id="image-a"
        d="M4,4 C2.8954305,4 2,3.1045695 2,2 C2,0.8954305 2.8954305,0 4,0 C5.1045695,0 6,0.8954305 6,2 C6,3.1045695 5.1045695,4 4,4 Z M0.497558594,15 L4.07592773,10.7578125 L6.02026367,12.2731934 L13.4494629,2.51928711 L16,5.45703125 L16,15 L0.497558594,15 Z"
      />
      <Path
        id="image-c"
        d="M18,6.97348874 L18,2 L2,2 L2,15.5476712 L6.04883416,10.4166727 C6.41808601,9.94872797 7.11213264,9.90569713 7.53635945,10.3244463 L9.54496213,12.3071135 L14.8746293,5.31817463 C15.2514017,4.82410259 15.9827874,4.78961411 16.4043805,5.24603924 L18,6.97348874 Z M18,9.92107486 L15.7430352,7.47763974 L10.4462935,14.4234025 C10.0808144,14.9026653 9.37757149,14.9521101 8.9486259,14.5287032 L6.92665827,12.5328435 L2.61256422,18 L18,18 L18,9.92107486 Z M2,0 L18,0 C19.1045695,0 20,0.8954305 20,2 L20,18 C20,19.1045695 19.1045695,20 18,20 L2,20 C0.8954305,20 0,19.1045695 0,18 L0,2 C0,0.8954305 0.8954305,0 2,0 Z M7,9 C5.34314575,9 4,7.65685425 4,6 C4,4.34314575 5.34314575,3 7,3 C8.65685425,3 10,4.34314575 10,6 C10,7.65685425 8.65685425,9 7,9 Z M7,7 C7.55228475,7 8,6.55228475 8,6 C8,5.44771525 7.55228475,5 7,5 C6.44771525,5 6,5.44771525 6,6 C6,6.55228475 6.44771525,7 7,7 Z"
      />
    </Defs>
    <G fill="none" fillRule="evenodd" transform="translate(2 2)">
      <G transform="translate(3 4)">
        <Mask id="image-b" fill="#ffffff">
          <Use xlinkHref="#image-a" />
        </Mask>
        <Use fill="#D8D8D8" xlinkHref="#image-a" />
        <G fill="#FFA0A0" mask="url(#image-b)">
          <Rect width={24} height={24} transform="translate(-5 -6)" />
        </G>
      </G>
      <Mask id="image-d" fill="#ffffff">
        <Use xlinkHref="#image-c" />
      </Mask>
      <Use fill="#000000" fillRule="nonzero" xlinkHref="#image-c" />
      <G fill="#7600FF" mask="url(#image-d)">
        <Rect width={24} height={24} transform="translate(-2 -2)" />
      </G>
    </G>
  </Svg>
);
export default ImageIcon;