import React from "react";
import Svg, { Circle } from "react-native-svg";

const MastercardIcon = ({ size = 50 }) => (
  <Svg width={size} height={size} viewBox="0 0 50 50">
    <Circle cx="20" cy="25" r="15" fill="#EB001B" />
    <Circle cx="35" cy="25" r="15" fill="#F79E1B" />
  </Svg>
);

export default MastercardIcon;
