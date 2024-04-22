import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export function Credential() {
  return (
    <View className="w-full self-stretch items-center">
      <Image
        source={require("@/assets/ticket/band.png")}
        className="w-24 h-52 z-10"
      />
      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          className="px-6 py-8 h40 items-center self-stretch border-b borer-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-betweens">
            <Text className="text-zinc-50 text-sm font-bold">Unite summit</Text>
            <Text className="text-zinc-50 text-sm font-bold">#123</Text>
          </View>
          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>
        <Image
          source={{ uri: "https://github.com/maressad.png" }}
          className="w-36 h-36 rounded-full -mt-24"
        />
        <Text className="font-bold text-2xl">Maressa Dâmaris</Text>
        <Text className="font-regular text-base text-zinx-300">
          maressa@gmail.com
        </Text>
        <Image
          source={require("@/assets/ticket/qrcode.png")}
          className="w-32 h-32"
        />
        <TouchableOpacity>
          <Text className="font-body text-orange-500 text-sm">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
