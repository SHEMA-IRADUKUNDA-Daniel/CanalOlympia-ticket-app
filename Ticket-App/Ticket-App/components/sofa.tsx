import { sofaType } from "@/interface";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const Sofa = ({ text, color }: sofaType) => {
  return (
    <View className="flex-row space-x-1  items-center ">
      <MaterialCommunityIcons name="sofa" size={24} color={color} />
      <Text className="text-white  ">{text} </Text>
    </View>
  );
};
export default Sofa;
