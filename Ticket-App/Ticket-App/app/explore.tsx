import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Platform,
  UIManager,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationBar } from "@/components/navBar";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Tickets = () => {
  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

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

      <View className="flex-row px-3 pt-20 justify-between items-center ">
        <TouchableOpacity className="bg-white p-3 rounded-2xl">
          <MaterialCommunityIcons name="map-marker" size={24} color="#BC002E" />
        </TouchableOpacity>
        <View className="flex-col justify-center items-center bg-primary space-y-1 px-4 py-3 rounded-2xl ">
          <TouchableOpacity className="flex-row items-center space-x-1   ">
            <Text className="text-[#767577]">Cinema location</Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color="#767577"
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <Text className="text-white">CanalyOlympia Rebero</Text>
        </View>
      </View>

      <View className="flex-1 justify-end ">
        <NavigationBar />
      </View>
    </View>
  );
};

export default Tickets;
