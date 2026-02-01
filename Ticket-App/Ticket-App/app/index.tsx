import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  TextInput,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationBar } from "@/components/navBar";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useState, useRef } from "react";

const { height } = Dimensions.get("window");

const Index = () => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const searchAnim = useRef(new Animated.Value(0)).current;
  const handleSearchPress = () => {
    if (showSearch) {
      Animated.timing(searchAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start(() => setShowSearch(false));
    } else {
      setShowSearch(true);
      Animated.timing(searchAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  };
  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" />

      <Image
        source={require("../assets/images/Avatar.jpg")}
        className="absolute w-full"
        style={{ height: height }}
        resizeMode="cover"
      />

      <LinearGradient
        colors={[
          "transparent",
          "rgba(217, 217, 217, 0.3)",
          "rgba(0, 0, 0, 0.63)",
          "rgba(13, 31, 66, 1)",
        ]}
        locations={[0, 0.25, 0.6, 1]}
        className="absolute top-0 left-0 right-0 bottom-0"
      />
      <View className="flex-row px-3 pt-20 justify-between items-center">
        <TouchableOpacity onPress={() => router.push("/notification")}>
          <View className="rounded-full overflow-hidden shadow-lg">
            <LinearGradient
              colors={["#FFFBFB", "#BC002E"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="p-3 items-center justify-center"
            >
              <BlurView
                intensity={40}
                tint="light"
                className="absolute inset-0"
              />

              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="white"
              />
            </LinearGradient>
          </View>
        </TouchableOpacity>
        <Animated.View
          style={{
            width: searchAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 300],
            }),
            borderRadius: searchAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [25, 30],
            }),
            overflow: "hidden",
          }}
        >
          {showSearch ? (
            <LinearGradient
              colors={["#FFFBFB", "#BC002E"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="p-3 flex-row  items-center justify-center"
            >
              <BlurView
                intensity={40}
                tint="light"
                className="absolute inset-0"
              />
              <Feather name="search" size={24} color="white" />
              <TextInput
                autoFocus
                placeholder="Search your favorite movie..."
                placeholderTextColor="white"
                className=" px-3 text-black font-roboto-bold text-base"
              />
              <TouchableOpacity onPress={handleSearchPress}>
                <Feather name="x" size={24} color="white" />
              </TouchableOpacity>
            </LinearGradient>
          ) : (
            <TouchableOpacity onPress={handleSearchPress}>
              <LinearGradient
                colors={["#FFFBFB", "#BC002E"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className=" p-3 rounded-full self-center shadow-lg"
              >
                <Feather name="search" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>
          )}
        </Animated.View>
      </View>
      <View className="flex-1 justify-end px-3 ">
        <View className="flex-row justify-between ">
          <View>
            <Text className="text-white  text-3xl font-poppins-bold ">
              AVATAR:
            </Text>
            <Text className="text-white font-poppins-bold text-3xl  mb-4">
              Fire and Ash
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              shadowColor: "#BC002D",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.9,
              shadowRadius: 4,
              elevation: 8,
            }}
          >
            <LinearGradient
              colors={["#BC002D", "#0D1F42"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="px-4 py-3 rounded-full self-center shadow-lg"
            >
              <View className="flex-row items-center gap-2">
                <Text className="text-white text-base font-poppins-bold">
                  Buy Ticket
                </Text>
                <Feather name="chevron-right" size={24} color="white" />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <Text className="text-white/90 font-roboto text-base leading-6 mb-4 w-3/4">
          Jake and Neytiri&apos;s family grapples with grief after
          Neteyam&apos;s death, encountering a new, aggressive Na&apos;vi tribe,
          the Ash People, who are led by the fiery Varang, as the conflict on
          Pandora escalates and a new moral focus emerges.
        </Text>

        <View className="flex-row flex-wrap gap-2 mb-6">
          <View className="bg-primary px-2 py-1.5 rounded-full border border-white/30">
            <Text className="text-white text-xs font-medium">Action</Text>
          </View>
          <View className="bg-primary px-2 py-1.5 rounded-full border border-white/30">
            <Text className="text-white text-xs font-medium">Fantasy</Text>
          </View>
          <View className="bg-primary px-2 py-1.5 rounded-full border border-white/30">
            <Text className="text-white text-xs font-medium">
              Science Fiction
            </Text>
          </View>
          <View className="bg-primary px-2 py-1.5 rounded-full border border-white/30">
            <Text className="text-white text-xs font-medium">Adventure</Text>
          </View>
        </View>
      </View>
      <NavigationBar />
    </View>
  );
};

export default Index;
