import { View, Switch, StatusBar, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { NavigationBar } from "@/components/navBar";
import { useRouter } from "expo-router";

const Profile = () => {
  const [accountNotifications, setAccountNotifications] = useState(false);
  const [announcements, setAnnouncements] = useState(false);

  const router = useRouter();

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

      <Text className=" font-poppins-bold text-xl pt-20 mb-20  text-white text-center">
        Profile
      </Text>
      <View className=" flex-1 px-3">
        <View className="items-center justify-center self-center">
          <View className="items-center justify-center bg-primary rounded-full w-24 h-24">
            <MaterialIcons name="account-circle" size={40} color="white" />
          </View>
          <TouchableOpacity className="absolute bottom-0 right-0 bg-white rounded-full w-8 h-8 items-center justify-center">
            <MaterialIcons name="camera-alt" size={18} color="#1e3a5f" />
          </TouchableOpacity>
        </View>
        <Text className="text-center text-white mt-3 text-lg font-poppins-semibold">
          SHEMA IRADUKUNDA Daniel
        </Text>
        <View>
          <View className="mx-3 mt-7 space-y-5">
            <Text className="text-white font-poppins-semibold text-lg">
              Notifications
            </Text>

            <View className="flex-row justify-between items-center px-4">
              <MaterialCommunityIcons name="bell" size={24} color="#767577" />
              <Text className="text-white font-roboto-medium text-base flex-1 ml-6">
                Account notifications
              </Text>
              <Switch
                style={{ transform: [{ scale: 0.8 }] }}
                trackColor={{ false: "#767577", true: "#BC002E" }}
                thumbColor="#f4f3f4"
                ios_backgroundColor="#3e3e3e"
                onValueChange={setAccountNotifications}
                value={accountNotifications}
              />
            </View>

            <View className="flex-row justify-between items-center px-4">
              <MaterialCommunityIcons
                name="bullhorn"
                size={24}
                color="#767577"
              />
              <Text className="text-white font-roboto-medium text-base  flex-1 ml-6">
                Announcement
              </Text>
              <Switch
                style={{ transform: [{ scale: 0.8 }] }}
                trackColor={{ false: "#767577", true: "#BC002E" }}
                thumbColor="#f4f3f4"
                ios_backgroundColor="#3e3e3e"
                onValueChange={setAnnouncements}
                value={announcements}
              />
            </View>
          </View>
          <View className="mx-3 mt-7 space-y-5">
            <Text className="text-white font-poppins-semibold text-lg">
              Account
            </Text>
            <TouchableOpacity className="flex-row justify-between align-center items-center px-4">
              <MaterialIcons name="contact-support" size={24} color="#767577" />
              <Text className="text-white flex-1 font-roboto-medium text-base  ml-6 ">
                Contact us
              </Text>
              <Feather name="chevron-right" size={16} color="#767577" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between align-center items-center px-4">
              <MaterialIcons name="report" size={24} color="#767577" />
              <Text className="text-white  flex-1 font-roboto-medium text-base  ml-6  ">
                Report a problem
              </Text>
              <Feather name="chevron-right" size={16} color="#767577" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          className="flex-row justify-evenly align-center bg-primary mx-10 p-3 items-center px-4 mt-10 rounded-full shadow-lg"
          onPress={() => router.push("/login")}
        >
          <MaterialIcons name="logout" size={24} color="#BC002E" />
          <Text className="text-white   font-roboto-medium   ">Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 justify-end ">
        <NavigationBar />
      </View>
    </View>
  );
};

export default Profile;
