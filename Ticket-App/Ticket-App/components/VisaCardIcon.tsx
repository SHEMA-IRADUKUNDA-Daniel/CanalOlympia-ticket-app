import React from "react";
import Svg, { Rect, Text as SvgText } from "react-native-svg";

const VisaIcon = ({ width = 50, height = 30 }) => (
  <Svg width={width} height={height} viewBox="0 0 50 30">
    <Rect width="50" height="30" rx="5" fill="#1A1F71" />
    <SvgText
      x="25"
      y="20"
      fontSize="14"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      VISA
    </SvgText>
  </Svg>
);
export default VisaIcon;
