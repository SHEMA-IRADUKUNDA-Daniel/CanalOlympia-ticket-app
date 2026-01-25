import { View, Switch, StatusBar, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationBar } from "@/components/navBar";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const Tickets = () => {
  const [showDeleteMenu, setShowDeleteMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");

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
          {["upcoming", "reserved", "past"].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text
                className={`text-white pb-3 border-b-2  font-roboto text-sm ${
                  activeTab === tab ? "border-b-2 border-gray-500" : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
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
            <TouchableOpacity
              onPress={() => setShowDeleteMenu(!showDeleteMenu)}
            >
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
              <Text className="text-white font-poppins-semibold text-xs">
                2
              </Text>
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
      </View>
      <View className="flex-1 justify-end ">
        <NavigationBar />
      </View>
    </View>
  );
};

export default Tickets;
