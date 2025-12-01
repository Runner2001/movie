import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

const MovieCard = ({id, poster_path, title, vote_average, release_date, media_type}: Movie) => {
    const { width } = Dimensions.get('window');

    const GAP = 16;
    const PADDING = 16;
    const ITEM_WIDTH = (width - (PADDING * 2) - (GAP * 2)) / 3;
    return (
        <>
            <Link href={`/movies/${id}`} asChild>
                <TouchableOpacity style={{width: ITEM_WIDTH}}>
                    <Image
                        className="w-full h-52 rounded-lg mb-2"
                        resizeMode={"cover"}
                        source={{uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placehold.co/600x400/1a1a1a/ffffff.png'}}
                    />
                    <Text className="font-semibold line-clamp-1" numberOfLines={1}>{title}</Text>
                    <View className="flex-row items-center justify-start gap-x-1">
                        <Image
                            source={icons.star}
                            className="size-4"
                        />
                        <Text className="text-xs font-bold">{Math.round(vote_average/2)}</Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-xs text-gray-500 mt-1">{release_date.split("-")[0]}</Text>
                        <Text className="text-xs text-gray-500 mt-1 uppercase">{media_type}</Text>
                    </View>
                </TouchableOpacity>
            </Link>
        </>
    )
}

export default MovieCard