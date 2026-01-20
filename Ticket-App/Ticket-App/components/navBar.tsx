import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";
export const NavigationBar = () => {
  const router = useRouter();
  return (
    <View className=" flex-row justify-between items-center px-10 pb-10">
      <TouchableOpacity
        className="bg-secondary p-2 rounded-full"
        onPress={() => router.push("/")}
      >
        <MaterialCommunityIcons
          name="movie-open-play"
          size={24}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity className="bg-white p-2 rounded-full">
        <MaterialCommunityIcons
          name="monitor-dashboard"
          size={24}
          color="#BC002D"
        ></MaterialCommunityIcons>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-white  p-2 rounded-full"
        onPress={() => router.push("/tickets")}
      >
        <Ionicons name="ticket" size={24} color="#BC002D" />
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-white  p-2 rounded-full"
        onPress={() => router.push("/profile")}
      >
        <MaterialIcons name="account-circle" size={24} color="#BC002D" />
      </TouchableOpacity>
    </View>
  );
};
