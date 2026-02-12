import { ButtonProps } from "@/interface";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ name, text, onPress, className }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={
        className
          ? className
          : "flex-row justify-between  p-5 bg-secondary rounded-3xl w-full self-center mt-10"
      }
    >
      <Text className="text-white font-poppins-bold text-base">{name}</Text>
      <Text className="text-white font-poppins-bold text-base">{text} Rwf</Text>
    </TouchableOpacity>
  );
};
export default Button;
