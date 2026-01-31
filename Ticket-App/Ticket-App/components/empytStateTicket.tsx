import { EmptyStateProps } from "@/interface";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const EmptyState = ({ text }: EmptyStateProps) => (
  <View className="mt-24 items-center justify-center space-y-3">
    <Ionicons name="ticket-outline" size={64} color="white" />
    <Text className="font-poppins-bold text-sm text-white/70 text-center">
      {text}
    </Text>
  </View>
);
export default EmptyState;
