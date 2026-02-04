import { View, TouchableOpacity } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { useRouter, usePathname } from "expo-router";

export const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  const activeBg = "bg-secondary";
  const inactiveBg = "bg-white";

  const activeColor = "white";
  const inactiveColor = "#BC002D";

  return (
    <View className=" flex-row justify-between items-center px-10 pb-10">
      <TouchableOpacity
        disabled={isActive("/")}
        className={`${isActive("/") ? activeBg : inactiveBg} p-2 rounded-full`}
        onPress={() => router.push("/")}
      >
        <MaterialCommunityIcons
          name="movie-open-play"
          size={24}
          color={isActive("/") ? activeColor : inactiveColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isActive("/explore")}
        className={`${isActive("/explore") ? activeBg : inactiveBg} p-2 rounded-full`}
        onPress={() => router.push("/explore")}
      >
        <MaterialCommunityIcons
          name="monitor-dashboard"
          size={24}
          color={isActive("/explore") ? activeColor : inactiveColor}
        ></MaterialCommunityIcons>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={isActive("/tickets")}
        className={`${isActive("/tickets") ? activeBg : inactiveBg} p-2 rounded-full`}
        onPress={() => router.push("/tickets")}
      >
        <Ionicons
          name="ticket"
          size={24}
          color={isActive("/tickets") ? activeColor : inactiveColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isActive("/profile")}
        className={`${isActive("/profile") ? activeBg : inactiveBg}  p-2 rounded-full`}
        onPress={() => router.push("/profile")}
      >
        <MaterialIcons
          name="account-circle"
          size={24}
          color={isActive("/profile") ? activeColor : inactiveColor}
        />
      </TouchableOpacity>
    </View>
  );
};
