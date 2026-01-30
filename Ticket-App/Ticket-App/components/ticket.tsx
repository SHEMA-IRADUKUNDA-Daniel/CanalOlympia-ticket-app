import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const Ticket = () => {
  const [showDeleteMenu, setShowDeleteMenu] = useState(false);
  return (
    <LinearGradient
      colors={["#000", "#BC002D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="w-150 h-40 top-10 rounded-2xl"
    >
      <View className="flex-row p-5 justify-between">
        <View>
          <Text className="text-white mb-2 font-poppins-bold text-xs">
            Avatar: Fire and ash
          </Text>
          <Text className="text-gray-300 font-roboto-medium text-xs">
            Thursday 18,December 2025 8:00 PM
          </Text>
        </View>
        <TouchableOpacity onPress={() => setShowDeleteMenu(!showDeleteMenu)}>
          <Feather name="more-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {showDeleteMenu && (
        <TouchableOpacity className="absolute top-12 right-0 bg-primary/50 p-4 rounded-full transition-all shadow-lg shadow-black z-10">
          <Text className="text-white font-poppins-bold text-xs ">
            Delete ticket
          </Text>
        </TouchableOpacity>
      )}
      <View className="flex-row px-5 mt-5 justify-between w-9/12">
        <View className="flex-1 justify-start items-start">
          <Text className="text-gray-300 font-poppins-semibold text-xs">
            Tickets
          </Text>
          <Text className="text-white font-poppins-semibold text-xs">2</Text>
        </View>
        <View className="flex-col justify-start  items-center">
          <Text className="text-gray-300 font-poppins-semibold text-xs">
            Seat
          </Text>
          <Text className="text-white font-poppins-semibold text-xs ml-10 mr-9">
            D7,D8
          </Text>
        </View>
        <View>
          <Text className="text-gray-300 font-poppins-semibold text-xs">
            Total
          </Text>
          <Text className="text-white font-poppins-semibold text-xs">
            12,000 Rwf
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Ticket;
