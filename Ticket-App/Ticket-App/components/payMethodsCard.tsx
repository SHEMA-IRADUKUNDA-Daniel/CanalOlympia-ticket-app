import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MastercardIcon from "./masteCardIcon";
import VisaIcon from "./VisaCardIcon";
import MTNIcon from "./mtnIcon";
import AirtelIcon from "./airtelIcon";

const paymentMethods = [
  { id: "mastercard", name: "Master Card", icon: MastercardIcon },
  { id: "visa", name: "Visa Card", icon: VisaIcon },
  { id: "mtn", name: "MTN Money", icon: MTNIcon },
  { id: "airtel", name: "Airtel Money", icon: AirtelIcon },
];

const PayMethodsCard = () => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <View className="flex-1 justify-center items-center bg-white rounded-2xl mx-4 mt-10 p-5">
      <Text className="font-poppins-bold text-sm">Select payment method</Text>

      <View className="mt-5 w-full space-y-4">
        {paymentMethods.map(({ id, name, icon: Icon }) => (
          <TouchableOpacity
            key={id}
            onPress={() => setSelected(id)}
            className="flex-row justify-between items-center bg-gray-100 p-3 rounded-xl"
          >
            <View className="flex-row items-center space-x-8">
              <Icon width={50} height={50} />
              <Text className="font-roboto-bold text-sm">{name}</Text>
            </View>

            <View
              className={`w-6 h-6 rounded-full border-2 flex justify-center items-center ${
                selected === id ? "border-primary" : "border-primary/50"
              }`}
            >
              {selected === id && (
                <View className="w-3 h-3 bg-primary rounded-full" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PayMethodsCard;
