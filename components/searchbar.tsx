import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {useState} from "react";

interface Props {
    inputText: string;
    setInputText: (text: string) => void;
    handleSearchSubmit: () => void;
    setSubmittedSearch: (search: string) => void;
}

const SearchBar = ({inputText, setInputText, setSubmittedSearch, handleSearchSubmit}:Props) => {

    return (
        <View className="
        flex flex-row gap-1.5 items-center justify-items-start mt-10 mb-4 mx-4
        bg-gray-200 px-3 h-14 border border-gray-300 rounded-full"
        >
            <MaterialIcons name="search" size={24} color="#5D5DC9" />
            <TextInput
                className="flex h-full flex-1"
                placeholder="Search and press enter..."
                value={inputText}
                onChangeText={(text) => setInputText(text)}
                returnKeyType="search"
                onSubmitEditing={handleSearchSubmit}
                autoCorrect={false}
            />

            {inputText.length > 0 && (
                <TouchableOpacity onPress={() => {
                    setInputText('');
                    setSubmittedSearch('');
                }}>
                    <MaterialIcons name="close" size={24} color="black" />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default SearchBar;