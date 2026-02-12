import { LinearGradient } from "expo-linear-gradient";

const Screen = () => {
  return (
    <LinearGradient
      colors={["rgba(188,0,46,0.6)", "transparent"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{
        width: "80%",
        height: 80,
        marginTop: -2,
        opacity: 10,
      }}
      className="self-center rounded-2xl shadow-secondary shadow-lg"
    />
  );
};
export default Screen;
