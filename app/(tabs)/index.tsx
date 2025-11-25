import {View, Image, ScrollView} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import SearchBar from "../../components/searchbar";

export default function Index() {
  return (
      <View className="flex flex-1 bg-gray-100">
        <Image source={images.bg} className="absolute z-0 top-0 w-full opacity-30" />

          <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={true} scrollEnabled={true}
          contentContainerStyle={{minHeight: "100%", paddingBottom: 10, overflow: "hidden"}}
          >
              <Image source={icons.logo} className="w-20 mt-20 mx-auto" />

              <SearchBar />
          </ScrollView>
      </View>
  );
}
