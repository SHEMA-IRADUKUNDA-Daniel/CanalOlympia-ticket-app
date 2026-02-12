import React from "react";
import Svg, { Ellipse, Text as SvgText } from "react-native-svg";

const MTNIcon = ({ width = 50, height = 30 }) => (
  <Svg width={width} height={height} viewBox="0 0 100 60">
    <Ellipse cx="50" cy="30" rx="50" ry="30" fill="#FFCC00" />{" "}
    <SvgText
      x="50"
      y="38"
      fontSize="24"
      fontWeight="bold"
      fill="#0033A0"
      textAnchor="middle"
    >
      MTN
    </SvgText>
  </Svg>
);

export default MTNIcon;
