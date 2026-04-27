import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWalletStore } from "../stores/wallet-store";

export function FavoriteButton({ address }: { address: string }) {
    const isFavorite = useWalletStore((s) => s.isFavorite(address));
    const addFavorite = useWalletStore((s) => s.addFavorite);
    const removeFavorite = useWalletStore((s) => s.removeFavorite);

    const toggle = () => {
        if (isFavorite) {
            removeFavorite(address);
        } else {
            addFavorite(address);
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={toggle} activeOpacity={0.7}>
            <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={24}
                color={isFavorite ? "#EF4444" : "#6B7280"}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
    },
});
