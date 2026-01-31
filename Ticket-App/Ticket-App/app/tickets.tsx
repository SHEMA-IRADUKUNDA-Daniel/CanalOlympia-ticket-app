import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationBar } from "@/components/navBar";
import { useState } from "react";
import Ticket from "@/components/ticket";
import EmptyState from "@/components/empytStateTicket";
import { TicketType } from "@/interface";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}
const TABS = ["upcoming", "reserved", "past"];

const Tickets = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [upcomingTickets, setUpcomingTickets] = useState<TicketType[]>([
    { id: "1" },
  ]);
  const handleDeleteTicket = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTimeout(() => {
      setUpcomingTickets((prev) => prev.filter((ticket) => ticket.id !== id));
    }, 300);
  };
  const renderContent = () => {
    if (activeTab === "upcoming") {
      return upcomingTickets.length ? (
        <FlatList
          data={upcomingTickets}
          keyExtractor={(_, index) => index.toString()}
          renderItem={(item) => (
            <Ticket onDelete={() => handleDeleteTicket(item.item.id)} />
          )}
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyState text="You don't have any upcoming tickets yet." />
      );
    }

    if (activeTab === "reserved") {
      return <EmptyState text="You don't have any reserved tickets yet." />;
    }

    return <EmptyState text="You don't have any past tickets yet." />;
  };

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
      <View className="flex-row justify-around px-4 ">
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
      <View className="flex-1 px-3">{renderContent()}</View>

      <View className="flex-1 justify-end ">
        <NavigationBar />
      </View>
    </View>
  );
};

export default Tickets;
