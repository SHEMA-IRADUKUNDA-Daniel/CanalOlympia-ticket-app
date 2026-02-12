import React from "react";
import Svg, { Ellipse, Text as SvgText } from "react-native-svg";

const AirtelIcon = ({ width = 50, height = 30 }) => (
  <Svg width={width} height={height} viewBox="0 0 100 60">
    <Ellipse cx="50" cy="30" rx="50" ry="30" fill="#E60000" />{" "}
    <SvgText
      x="50"
      y="38"
      fontSize="20"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      Airtel
    </SvgText>
  </Svg>
);

export default AirtelIcon;
