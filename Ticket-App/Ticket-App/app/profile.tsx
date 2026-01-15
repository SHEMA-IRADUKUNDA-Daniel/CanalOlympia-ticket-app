import { View, TouchableOpacity, StatusBar, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { NavigationBar } from "@/components/navBar";

const Profile = () => {
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

      <Text className=" font-poppins-bold text-xl pt-20  text-white text-center">
        Profile
      </Text>
      <View>
        <View>
          <Feather name="user" size={24} color="white" />
        </View>
      </View>
      <View className="flex-1 justify-end ">
        <NavigationBar />
      </View>
    </View>
  );
};

export default Profile;
