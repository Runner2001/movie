import {Tabs} from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Text, View} from "react-native";

const TabIcons = ({iconame, focused, color, label}: any) => {
    if (focused === true){
        return (
            <View className="flex flex-col w-full justify-center items-center min-w-16 mt-2 h-14">
                <MaterialIcons name={iconame} size={24} color="#5D5DC9" />
                <Text className="text-xs font-semibold text-primary">{label}</Text>
            </View>
        )
    }else {
        return (
            <View className="flex flex-col w-full justify-center items-center min-w-16 mt-2 h-14">
                <MaterialIcons name={iconame} size={24} color="#6b7280" />
                <Text className="text-xs font-normal text-gray-500">{label}</Text>
            </View>
        )
    }
}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false
            }}
        >
            <Tabs.Screen name="index" options={{ title: "Home", headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcons iconame="home" focused={focused} label="Home"  />
                )}} />
            <Tabs.Screen name="search" options={{ title: "Search", headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcons iconame="search" focused={focused} label="Search" />
                )}} />
            <Tabs.Screen name="saved" options={{ title: "Saved", headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcons iconame="bookmarks" size={24} focused={focused} label="Saved" />
            )}} />
            <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcons iconame="account-circle" size={24} focused={focused} label="Profile"  />
            )}} />
        </Tabs>
    )
}

export default _layout;