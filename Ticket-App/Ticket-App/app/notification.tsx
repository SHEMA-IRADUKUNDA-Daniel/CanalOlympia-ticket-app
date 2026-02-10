import { View, TouchableOpacity, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";

const Notification = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
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
      <View className="flex-row px-3 pt-20 justify-between items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <View className="rounded-full overflow-hidden shadow-lg">
            <LinearGradient
              colors={["#BC002E", "#0D1F42"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="p-3 items-center justify-center"
            >
              <BlurView
                intensity={40}
                tint="light"
                className="absolute inset-0"
              />

              <Feather name="arrow-left" size={24} color="white" />
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-1  justify-center items-center">
        <MaterialCommunityIcons
          name="bell-off-outline"
          size={100}
          color="#BC002E"
        />
        <Text className="text-white mt-10 pb-20  font-poppins-600 font-bold text-center text-sm">
          You don&apos;t have any notifications yet.
        </Text>
      </View>
    </View>
  );
};

export default Notification;
