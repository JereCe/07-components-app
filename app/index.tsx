import ThemedView from "@/presentation/shared/ThemedView";
import { Text } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView margin>
      <Text className="text-3xl text-black dark:text-white">Hola Mundo</Text>
    </ThemedView>
  );
}
