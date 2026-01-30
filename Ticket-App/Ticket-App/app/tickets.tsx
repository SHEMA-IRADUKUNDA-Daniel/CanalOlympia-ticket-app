import { View, StatusBar, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationBar } from "@/components/navBar";

import { useState } from "react";
import Ticket from "@/components/ticket";
import { Ionicons } from "@expo/vector-icons";

const Tickets = () => {
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
        {activeTab === "upcoming" && (
          <View className="mt-6 space-y-4">
            <Ticket />
          </View>
        )}

        {activeTab === "reserved" && (
          <View className="mt-20 space-y-4 items-center justify-center">
            <Ionicons name="ticket" size={65} color="white" />
            <Text className="font-poppins-bold text-sm text-white/70">
              You don&apos;t have any reserved tickets yet.
            </Text>
          </View>
        )}
        {activeTab === "past" && (
          <View className="mt-20 space-y-4 items-center justify-center">
            <Ionicons name="ticket" size={65} color="white" />
            <Text className="font-poppins-bold text-sm text-white/70">
              You don&apos;t have any past tickets yet.
            </Text>
          </View>
        )}
      </View>
      <View className="flex-1 justify-end ">
        <NavigationBar />
      </View>
    </View>
  );
};

export default Tickets;
