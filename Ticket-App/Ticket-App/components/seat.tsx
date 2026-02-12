import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SeatProps, seatType } from "@/interface";

const Seat = ({ onSeatPress, selectedSeats }: SeatProps) => {
  const seatsData: seatType[] = Array.from({ length: 100 }).map((_, i) => ({
    id: String(i + 1),
    number: `D${i + 1}`,
    isAvailable: Math.random() > 0.3,
  }));

  return (
    <View className="flex-row flex-wrap justify-center gap-1 mt-10 px-3">
      {seatsData.map((seat) => {
        const isSelected = selectedSeats.some((s) => s.id === seat.id);

        let color = "white";
        if (!seat.isAvailable) color = "#767577";
        else if (isSelected) color = "#BC002E";

        return (
          <TouchableOpacity
            key={seat.id}
            disabled={!seat.isAvailable}
            onPress={() => onSeatPress(seat)}
          >
            <MaterialCommunityIcons name="sofa" size={20} color={color} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Seat;
