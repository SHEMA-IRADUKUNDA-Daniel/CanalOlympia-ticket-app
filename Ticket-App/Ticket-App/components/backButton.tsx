import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View } from "react-native";
import { backButtonType } from "@/interface";

const BackButton = ({ onPress }: backButtonType) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="rounded-full overflow-hidden shadow-lg">
        <LinearGradient
          colors={["#BC002E", "#0D1F42"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="p-3 items-center justify-center"
        >
          <BlurView intensity={40} tint="light" className="absolute inset-0" />

          <Feather name="arrow-left" size={24} color="white" />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
