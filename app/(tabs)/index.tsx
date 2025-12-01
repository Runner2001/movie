import {
    View,
    Image,
    ActivityIndicator,
    FlatList,
    Text,
    Keyboard,
    RefreshControl,
    ScrollView,
} from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/searchbar";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/movieCard";
import React, {useEffect, useState} from "react";

export default function Index() {

    const [inputText, setInputText] = useState('');
    const [submittedSearch, setSubmittedSearch] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    // const router = useRouter();

    const { data: movies, refetch, loading, error } = useFetch(() =>
        fetchMovies({ query: submittedSearch })
    );

    // console.log(movies, error?.message);
    // This triggers ONLY when the 'search' button on keyboard is pressed
    const handleSearchSubmit = () => {
        if (inputText.trim() === '') return; // Don't search empty strings

        console.log(`Searching for: ${inputText}`);
        setSubmittedSearch(inputText); // Update the "result" state
        Keyboard.dismiss(); // Close the keyboard
    };

    useEffect(() => {
        refetch()
    }, [submittedSearch]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        console.log("Refreshing data...");

        // Simulate fetching new data from an API (2 second delay)
        setTimeout(() => {
            refetch();

            // Stop the spinner
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
            <ScrollView className="flex-1 bg-gray-100"
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#007AFF']}
                        tintColor="#007AFF"
                    />
            }
            >
                <Image
                    source={images.bg}
                    className="absolute z-0 top-0 w-full opacity-30"
                />
                <View>
                    <Image source={icons.logo} className="w-20 mt-20 mx-auto" />
                    <SearchBar
                        inputText={inputText}
                        setInputText={setInputText}
                        handleSearchSubmit={handleSearchSubmit}
                        setSubmittedSearch={setSubmittedSearch}
                    />
                </View>

                {loading ? (
                    <ActivityIndicator
                        size="large"
                        color="blue"
                        className="mt-20 self-center"
                    />
                ) : error ? (
                    <Text> {error.message} </Text>
                ) : (
                    <View>
                        <FlatList className="mt-2 mb-4"
                                  data={movies}
                                  keyExtractor={(item) => item.id.toString()}
                                  renderItem={({ item }) => <MovieCard { ...item} />}
                                  contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20, }}
                                  showsVerticalScrollIndicator={true}
                                  numColumns={3}
                                  columnWrapperStyle={{
                                      justifyContent: 'flex-start',
                                      gap: 16,
                                      marginBottom: 10,
                                  }}
                                  scrollEnabled={false}
                                  ListHeaderComponent={
                                      <>
                                          {submittedSearch ?
                                              <Text className="font-bold text-lg mb-4">Search Result For: <Text className="text-primary">{submittedSearch}</Text></Text> :
                                              <Text className="font-bold text-lg mb-4">Latest Movies</Text>
                                          }
                                      </>
                                  }
                        />
                    </View>
                )}
            </ScrollView>
    );
}
