import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Seat from "@/components/seat";
import Sofa from "@/components/sofa";
import BackButton from "@/components/backButton";
import LinearBackground from "@/components/linearBackground";
import { seatType } from "@/interface";
import { useState } from "react";
import Button from "@/components/button";
import { useRouter } from "expo-router";

const Seats = () => {
  const route = useRouter();
  const [selectedSeats, setSelectedSeats] = useState<seatType[]>([]);

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
            setTimeout(() => {
              setSelectedSeats([]);
            }, 2000);
          }}
        >
          <Feather name="refresh-cw" size={26} color="white" />
        </TouchableOpacity>
      </View>
      <Text className="text-white text-center mt-10 font-poppins-bold text-sm">
        Screen
      </Text>
      <View className="mt-5 h-1 w-[80%] self-center bg-secondary rounded-full shadow-lg  " />
      <LinearGradient
        colors={["rgba(188,0,46,0.6)", "transparent"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          width: "80%",
          height: 80,
          marginTop: -2,
          opacity: 10,
        }}
        className="self-center rounded-2xl shadow-secondary shadow-lg"
      />
      <Seat onSeatPress={handleSeatPress} selectedSeats={selectedSeats} />

      <View className="mt-10 px-5 flex-row items-center justify-between ">
        <Sofa text={"Available"} color="white" />
        <Sofa text={"Not available"} color="#767577" />
        <Sofa text={"Selected"} color="#BC002E" />
      </View>
      <View className="flex-row  justify-between items-center space-x-1 px-3 mt-10">
        <View className="flex-col items-center bg-primary p-5 rounded-3xl">
          <Text className="text-white">Dec 19,2025</Text>
          <Text className="text-white">8:PM</Text>
        </View>
        <View className="bg-secondary p-7 rounded-3xl">
          <Text className="text-white">Premiere</Text>
        </View>
        <View className="flex-col flex-wrap items-center bg-primary p-5 rounded-3xl">
          <Text className="text-white">Seats</Text>
          <View>
            <Sofa
              className=""
              text={selectedSeats.map((s) => s.number).join(", ")}
              color="#BC002E"
            />
          </View>
        </View>
      </View>
      {selectedSeats.length > 0 && (
        <View className="px-3">
          <Button name="Pay" text="12000" />
        </View>
      )}
    </View>
  );
};

export default Seats;
