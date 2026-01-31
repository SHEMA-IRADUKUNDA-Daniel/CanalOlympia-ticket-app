import {
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    reapeatPassword: "",
  });

  const handleLogin = () => {
    console.log("Profile updated:", formData);
    router.push("/");
  };

  const googleSvg = `
    <svg width="20" height="20" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
  `;

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

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <Image
            source={require("../assets/images/icon.png")}
            style={{
              width: 300,
              height: 128,
              alignSelf: "center",
              marginTop: 50,
              marginBottom: 0,
            }}
            resizeMode="contain"
          />

          <Text className="text-white text-center font-poppins-bold text-xl mb-5">
            Create account
          </Text>
          <View className="px-6 ">
            <View className="flex-row items-center bg-white rounded-full px-6 py-4 mb-4 ">
              <TextInput
                className="flex-1 text-black font-poppins-semibold text-sm"
                placeholder="Email..."
                placeholderTextColor="#767577"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
              />
              <MaterialCommunityIcons
                name="email"
                size={18}
                color="#767577"
                style={{ marginRight: 10 }}
              />
            </View>
            <View className="flex-row items-center bg-white rounded-full px-6 py-4 mb-4 ">
              <TextInput
                className="flex-1 text-black font-poppins-semibold text-sm"
                placeholder="Username..."
                placeholderTextColor="#767577"
                keyboardType="default"
                autoCapitalize="none"
                value={formData.username}
                onChangeText={(text) =>
                  setFormData({ ...formData, username: text })
                }
              />
              <MaterialCommunityIcons
                name="account"
                size={20}
                color="#767577"
                style={{ marginRight: 10 }}
              />
            </View>
            <View className="flex-row items-center bg-white rounded-full px-6 py-4 mb-4">
              <TextInput
                className="flex-1 text-black font-poppins-semibold text-sm"
                placeholder="Password..."
                placeholderTextColor="#767577"
                keyboardType="default"
                value={formData.password}
                onChangeText={(text) =>
                  setFormData({ ...formData, password: text })
                }
              />
              <FontAwesome
                name="lock"
                size={20}
                color="gray"
                style={{ marginRight: 10 }}
              />
            </View>
            <View className="flex-row items-center bg-white rounded-full px-6 py-4 mb-4">
              <TextInput
                className="flex-1 text-black font-poppins-semibold text-sm"
                placeholder="Repeat Password..."
                placeholderTextColor="#767577"
                keyboardType="default"
                value={formData.reapeatPassword}
                onChangeText={(text) =>
                  setFormData({ ...formData, reapeatPassword: text })
                }
              />
              <FontAwesome
                name="lock"
                size={20}
                color="gray"
                style={{ marginRight: 10 }}
              />
            </View>
            <TouchableOpacity onPress={handleLogin}>
              <View
                style={{
                  shadowColor: "#BC002E",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.9,
                  shadowRadius: 6.3,
                }}
              >
                <LinearGradient
                  colors={["#BC002D", "#0D1F42"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  className="bg-[#BC002E] py-4 rounded-full items-center mb-4 "
                >
                  <Text className="text-white font-poppins-bold text-sm">
                    Sign up
                  </Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>

            <View className="flex-row self-center">
              <Text className="text-white text-left mb-4 ">
                Already have an account?{" "}
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-blue-400"
                  onPress={() => router.push("/login")}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="flex-row justify-center items-center  bg-white rounded-full px-4 py-5 mb-4">
              <SvgXml
                xml={googleSvg}
                width="20"
                height="20"
                style={{ marginRight: 20 }}
              />
              <Text className="font-poppins-bold text-sm">
                Continue with Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-center items-center  bg-[#50504F] rounded-full px-4 py-5 mb-4">
              <FontAwesome
                name="apple"
                size={20}
                color="white"
                style={{ marginRight: 20 }}
              />
              <Text className="font-poppins-bold text-sm text-white">
                Continue with Apple
              </Text>
            </TouchableOpacity>
            <Text className="text-white self-center text-center mt-5 font-roboto text-sm w-9/12">
              <Text className="text-gray-600">
                By continuing , you agree to our terms
              </Text>{" "}
              & Conditions <Text className="text-gray-600">and</Text> Privacy
              Policy
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
