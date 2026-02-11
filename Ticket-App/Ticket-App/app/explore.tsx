import {
  View,
  StatusBar,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationBar } from "@/components/navBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Days from "@/components/dayComp";
import { useState } from "react";
import { dashboardMoviesType } from "@/interface";
import DashMovieCard from "@/components/dashMovieCard";

const TABS = ["Showing now", "Upcoming"];
const Explore = () => {
  const [activeTab, setActiveTab] = useState("Showing now");
  const [ShowingMovies, setShowingMovies] = useState<dashboardMoviesType[]>([
    { id: "1" },
  ]);
  const renderContent = () => {
    if (activeTab === "Showing now") {
      return ShowingMovies.length ? (
        <FlatList
          data={ShowingMovies}
          keyExtractor={(_, index) => index.toString()}
          renderItem={() => <DashMovieCard />}
        />
      ) : (
        <Text>Hi</Text>
      );
    } else {
      return <Text className="text-white">Hi</Text>;
    }
  };
  const days = [
    { day: "Mon", date: "12" },
    { day: "Tue", date: "13" },
    { day: "Wed", date: "14" },
    { day: "Thu", date: "15" },
    { day: "Fri", date: "16" },
    { day: "Sat", date: "17" },
    { day: "Sun", date: "18" },
  ];
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
            <Text className="text-[#767577] font-roboto-bold text-sm">
              Cinema location
            </Text>
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color="#767577"
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <Text className="text-white font-poppins-bold text-sm">
            Canal Olympia Rebero
          </Text>
        </View>
      </View>
      <View className="flex-row justify-between  px-4">
        {days.slice(1, 7).map((item) => (
          <Days key={item.date} day={item.day} date={item.date} />
        ))}
      </View>
      <View className="flex-row justify-around px-4 mt-5 ">
        {TABS.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className="py-3 flex-1 items-center"
              activeOpacity={0.8}
            >
              <Text
                className={`font-roboto-bold text-sm ${
                  isActive ? "text-white" : "text-white/60"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>

              {isActive && (
                <View className="mt-2 h-0.5 w-8 bg-gray-400 rounded-full" />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <View className="px-4">{renderContent()}</View>
      <View className="flex-1 justify-end ">
        <NavigationBar />
      </View>
    </View>
  );
};

export default Explore;
