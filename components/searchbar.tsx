import {View, Text, StyleSheet, TextInput} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <MaterialIcons name="search" size={24} color="#5D5DC9" />
            <TextInput
                onPress={() => {}}
                placeholder={"Search"}
            />
        </View>
    )
}

export default SearchBar;
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 40,
        backgroundColor: "#e5e7eb",
        borderWidth: 1,
        borderColor: "#d1d5db",
        height: 48,
        paddingHorizontal: 12,
        borderRadius: 500,
        gap: 8
    }
})