import { View, Text, TouchableOpacity } from "react-native";
import { datesType } from "@/interface";

const Dates = ({ date, day, className }: datesType) => {
  return (
    <TouchableOpacity className="flex-col justify-center bg-primary  items-center p-4 rounded-2xl mt-10">
      <Text className="text-[#767577] font-roboto-bold mb-2">{day}</Text>
      <Text className="text-white font-poppins-bold">{date}</Text>
    </TouchableOpacity>
  );
};
export default Dates;
