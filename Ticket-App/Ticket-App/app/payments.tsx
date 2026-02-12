import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import BackButton from "@/components/backButton";
import LinearBackground from "@/components/linearBackground";
import { useRouter } from "expo-router";
import PayMenthodsCard from "@/components/payMethodsCard";

const Payments = () => {
  const route = useRouter();

  return (
    <View className="flex-1 bg-black">
      <LinearBackground />

      <ScrollView className="flex-1 ">
        <View className="flex-row px-4 pt-20 items-center">
          <BackButton onPress={() => route.push("/seats")} />

          <View className="flex-1 items-center">
            <Text className="text-white font-poppins-bold text-base">
              Payment
            </Text>
          </View>
          <View style={{ width: 24 }} />
        </View>
        <PayMenthodsCard />=
      </ScrollView>
    </View>
  );
};

export default Payments;
