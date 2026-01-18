import { View, Switch, StatusBar, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { NavigationBar } from "@/components/navBar";
import { Feather } from "@expo/vector-icons";

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

      <Text className=" font-poppins-bold text-xl pt-20 mb-10  text-white text-center">
        My Tickets
      </Text>
      <View className=" flex-1 px-3">
        <View className="flex-row justify-between px-3 ">
          <TouchableOpacity>
            <Text className="text-white pb-3 border-b-2 border-gray-500">
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white">Reserved</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white">Past</Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={["#000", "#BC002D"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="w-150 h-40 top-10 rounded-2xl"
        >
          <View className="flex-row p-5 justify-between">
            <View>
              <Text className="text-white mb-2">Avatar: Fire and ash</Text>
              <Text className="text-gray-300">
                Thursday 18,December 2025 8:00 PM
              </Text>
            </View>
            <Feather name="more-vertical" size={24} color="white" />
          </View>
        </LinearGradient>
      </View>
      <View className="flex-1 justify-end ">
        <NavigationBar />
      </View>
    </View>
  );
};

export default Tickets;
