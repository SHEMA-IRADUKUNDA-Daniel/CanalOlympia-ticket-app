import { LinearGradient } from "expo-linear-gradient";

const LinearBackground = () => {
  return (
    <LinearGradient
      colors={[
        "transparent",
        "rgba(217, 217, 217, 0.1)",
        "rgba(0, 0, 0, 0.30)",
        "rgba(13, 31, 66, 1)",
      ]}
      locations={[0, 0.4, 0.7, 1]}
      className="absolute top-0 left-0 right-0 bottom-0"
    />
  );
};

export default LinearBackground;
