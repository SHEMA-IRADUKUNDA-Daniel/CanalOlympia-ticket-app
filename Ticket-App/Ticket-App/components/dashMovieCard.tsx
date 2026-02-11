import { View, Text, Image } from "react-native";

const DashMovieCard = () => {
  return (
    <View className="flex-1 justify-center items-center ">
      <Text className="text-white">Avatar: Fire and Ash</Text>
      <Text className="text-gray-400 mb-5">
        Expected December 18, 2025 . 3h 17m
      </Text>
      <Image
        source={require("../assets/images/Avatar.jpg")}
        style={{ width: "70%", height: 320, borderRadius: 20 }}
        resizeMode="cover"
      ></Image>
    </View>
  );
};
export default DashMovieCard;
