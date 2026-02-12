import { View, Text, TouchableOpacity, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Seat from "@/components/seat";
import Sofa from "@/components/sofa";
import BackButton from "@/components/backButton";
import LinearBackground from "@/components/linearBackground";
import { seatType } from "@/interface";
import { useState, useRef } from "react";
import Button from "@/components/button";
import { useRouter } from "expo-router";
import Screen from "@/components/screen";

const Seats = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const [rotated, setRotated] = useState(false);

  const paymentAmount = 3000;
  const route = useRouter();
  const [selectedSeats, setSelectedSeats] = useState<seatType[]>([]);
  const totalAmount = paymentAmount * selectedSeats.length;

  const handleSeatPress = ({ id, number, isAvailable }: seatType) => {
    if (!isAvailable) return;

    setSelectedSeats((prev) => {
      const alreadySelected = prev.find((seat) => seat.id === id);

      if (alreadySelected) {
        return prev.filter((seat) => seat.id !== id);
      } else {
        return [...prev, { id, number, isAvailable }];
      }
    });
  };
  return (
    <View className="flex-1 bg-black">
      <LinearBackground />

      <View className="flex-row px-4 pt-20 justify-between items-center">
        <BackButton onPress={() => route.push("/")} />
        <TouchableOpacity
          onPress={() => {
            if (selectedSeats.length === 0) return;
            Animated.timing(rotateAnim, {
              toValue: rotated ? 0 : 1,
              duration: 1000,
              useNativeDriver: true,
            }).start();

            setRotated(!rotated);
            setTimeout(() => {
              setSelectedSeats([]);
            }, 2000);
          }}
        >
          <Animated.View
            style={{
              transform: [
                {
                  rotate: rotateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "180deg"],
                  }),
                },
              ],
            }}
          >
            <Feather name="refresh-cw" size={26} color="white" />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <Text className="text-white text-center mt-10 font-poppins-bold text-sm">
        Screen
      </Text>
      <View className="mt-5 h-1 w-[80%] self-center bg-secondary rounded-full shadow-lg  " />
      <Screen />
      <Seat onSeatPress={handleSeatPress} selectedSeats={selectedSeats} />

      <View className="mt-10 px-5 flex-row items-center justify-between ">
        <Sofa text={"Available"} color="white" />
        <Sofa text={"Not available"} color="#767577" />
        <Sofa text={"Selected"} color="#BC002E" />
      </View>
      <View className="flex-row  justify-between items-center  px-3 mt-10">
        <View className="flex-col items-center bg-primary p-4 rounded-2xl">
          <Text className="text-[#767577] font-roboto-medium text-xs mb-2">
            Dec 19,2025
          </Text>
          <Text className="text-white font-roboto-bold text-sm">8:PM</Text>
        </View>
        <View className="bg-secondary flex-col items-center p-4 rounded-2xl">
          <Text className="text-white/80  font-roboto-medium text-xs mb-2">
            Category
          </Text>
          <Text className="text-white font-roboto-bold text-sm">Premiere</Text>
        </View>
        <View className="flex-col flex-wrap items-center bg-primary p-4 rounded-2xl">
          <Text className="text-[#767577] font-roboto-medium text-xs mb-2">
            Selected seats
          </Text>
          <View className="flex-row items-center gap-1">
            <Sofa
              text={selectedSeats.map((s) => s.number).join(", ")}
              color="#BC002E"
            />
          </View>
        </View>
      </View>
      {selectedSeats.length > 0 && (
        <View className="px-3">
          <Button name="Pay" amount={totalAmount} />
        </View>
      )}
    </View>
  );
};

export default Seats;
